Care.IO – Baby Sitting & Elderly Care Service Platform

Care.IO is a web application that helps users book reliable and trusted care services for babies, elderly people, and sick or special‑needs family members. Users can browse services, view details, calculate total cost, and create bookings with location details and duration.

Live Frontend: https://care-j8l58wq0p-afsanas-projects-b742d697.vercel.app
Backend API (items): https://care-xyz-backend.onrender.com/api/items

Frontend: Next.js
Backend: Express.js

Setup & Installation:

Clone the repo:
git clone https://github.com/Noorbilu/Care.xyz.git
cd care-xyz


Backend setup:
    cd backend
    npm install
    create .env with PORT, FRONTEND_URL, SMTP_USER, SMTP_PASS
    node index.js


Frontend setup:
    cd frontend
    npm install
    create .env.local with NEXT_PUBLIC_BACKEND_URL
    npm run dev

Open browser at http://localhost:3000

Main Routes:
/ – Landing page
/items – List all services
/items/[id] – Service details
/service/[service_id] – Alternate service detail route
/booking/[service_id] – Book a service (login required)
/my-bookings – My bookings (login required)
/items/add – Add new service (login required)
/login – Login
/register – Register

Features:
Landing page – Hero section, about, services, testimonials, FAQ
Services list & details – See all services, check description, price, and image
Booking system – Select hours, enter location, calculate total cost, save booking, send email invoice
My bookings – See all your bookings with status (Pending/Confirmed/etc.)
Add service – Form to add new service with ID, name, price, category, image
Authentication – Simple mock login with cookies, protected routes
Email invoice – Sends booking info using Nodemailer (Gmail SMTP)

How It Works:
Users see a list of services and select one to book.
Booking requires login, duration, and location.
Total cost is calculated automatically.
Admin-like user can add new services.
Email invoice sent when booking is created.

Tech Stack:
Frontend: Next.js, React, Tailwind CSS, react-hot-toast, js-cookie
Backend: Node.js, Express.js, Nodemailer
Auth: Mock login with hardcoded credentials
