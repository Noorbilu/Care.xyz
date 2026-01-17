require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendBookingEmail(to, booking, service) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject: `Your Care.IO Booking #${booking.id}`,
    html: `
      <h1>Booking Confirmation</h1>
      <p>Service: ${service.name}</p>
      <p>Duration: ${booking.durationHours} hours</p>
      <p>Total Cost: ৳ ${booking.totalCost}</p>
      <p>Status: ${booking.status}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

let services = [
  {
    id: 'baby-care',
    name: 'Baby Sitting Service',
    description: 'Trusted babysitting at your home.',
    pricePerHour: 300,
    category: 'Baby Care',
    image: 'https://i.ibb.co/x8L5QRfX/download-53.jpg',
  },
  {
    id: 'elderly-care',
    name: 'Elderly Care Service',
    description: 'Professional elderly care and companionship.',
    pricePerHour: 350,
    category: 'Elderly Care',
    image: 'https://i.ibb.co/v4FMcJyv/download-54.jpg',
  },
  {
    id: 'sick-care',
    name: 'Sick People Care',
    description: 'Special care for sick or recovering individuals.',
    pricePerHour: 400,
    category: 'Sick Care',
    image: 'https://i.ibb.co/MHTDGJ8/download-55.jpg',
  },
];

let bookings = [];


app.get('/api/items', (req, res) => {
  res.json(services);
});


app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const item = services.find((s) => s.id === itemId);
  if (!item) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json(item);
});


app.post('/api/items', (req, res) => {
  const { id, name, description, pricePerHour, category, image } = req.body;
  const newItem = { id, name, description, pricePerHour, category, image };
  services.push(newItem);
  res.status(201).json(newItem);
});


app.post('/api/bookings', async (req, res) => {
  try {
    const {
      userId, 
      serviceId,
      durationHours,
      division,
      district,
      city,
      area,
      address,
      totalCost,
    } = req.body;

    const booking = {
      id: String(bookings.length + 1),
      userId,
      serviceId,
      durationHours,
      location: { division, district, city, area, address },
      totalCost,
      status: 'Pending',
      createdAt: new Date(),
    };

    bookings.push(booking);

    const service = services.find((s) => s.id === serviceId);

    
    if (service && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await sendBookingEmail(userId, booking, service);
        console.log('Booking email sent to', userId);
      } catch (emailErr) {
        console.error('Error sending booking email:', emailErr.message);
      }
    }

    res.status(201).json(booking);
  } catch (err) {
    console.error('Error creating booking:', err.message);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

app.get('/api/bookings', (req, res) => {
  const { userId } = req.query;
  const userBookings = bookings.filter((b) => b.userId === userId);
  res.json(userBookings);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Backend running on port', PORT);
});