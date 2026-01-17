Care.IO – Baby Sitting & Elderly Care Service Platform

Care.IO is a web application that helps users book reliable and trusted care services for babies, elderly people, and sick or special‑needs family members. Users can browse services, view details, calculate total cost, and create bookings with location details and duration.

UI / UX & Styling

 Fully responsive (mobile / tablet / desktop)
 Theme: lime / dark‑lime / green using Tailwind CSS
 Custom Navbar & Footer with multiple navigation paths
 Custom 404 page with “Return Home” button

---

Tech Stack

Frontend
   Next.js 16 (App Router)
   React
   Tailwind CSS
   react-hot-toast
   js-cookie
Backend
  Node.js
  Express.js
  Nodemailer
Auth
  Mock login with hardcoded credentials + cookies



Project Structure:
care-xyz/
  backend/
    index.js            
    package.json
    .env               
  frontend/
    src/
      app/
        page.js                 
        items/
          page.js              
          id/page.js          
          add/page.js           
        service/
          service_id/page.js  
        booking/
          service_id/page.js  
        my-bookings/page.js     
        login/page.js           
        register/page.js        
        about/page.js           
        contact/page.js         
        not-found.js           
      components/
        Navbar.js
        Footer.js
        ServiceCard.js
      lib/
        api.js                 
        auth.js                 
    .env.local                 
    next.config.mjs
    tailwind.config  