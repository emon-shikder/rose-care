dental-website/
│
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── DoctorController.php
│   │   │   │   ├── ServiceController.php
│   │   │   │   ├── AppointmentController.php
│   │   │   │   ├── BlogController.php
│   │   │   │   └── DashboardController.php
│   │   └── Middleware/
│   ├── Models/
│   └── Services/
│
├── database/
├── routes/
│   ├── web.php
│   └── api.php
│
├── resources/
│   ├── css/
│   │   └── app.css
│   └── js/
│       ├── app.jsx
│       ├── bootstrap.js
│       ├── router.jsx
│       ├── layouts/
│       │   ├── WebsiteLayout.jsx
│       │   └── AdminLayout.jsx
│       ├── pages/
│       │   ├── website/
│       │   │   ├── Home.jsx
│       │   │   ├── About.jsx
│       │   │   ├── Services.jsx
│       │   │   ├── Doctors.jsx
│       │   │   ├── Gallery.jsx
│       │   │   ├── Blog.jsx
│       │   │   └── Contact.jsx
│       │   └── admin/
│       │       ├── Login.jsx
│       │       ├── Dashboard.jsx
│       │       ├── Doctors/
│       │       │   ├── List.jsx
│       │       │   ├── Create.jsx
│       │       │   └── Edit.jsx
│       │       ├── Services/
│       │       ├── Blogs/
│       │       ├── Gallery/
│       │       ├── Appointment/
│       │       └── Settings/
│       ├── components/
│       │   ├── common/
│       │   │   ├── Button.jsx
│       │   │   ├── Input.jsx
│       │   │   ├── Card.jsx
│       │   │   ├── Modal.jsx
│       │   │   ├── Table.jsx
│       │   │   ├── Loader.jsx
│       │   │   └── Pagination.jsx
│       │   ├── website/
│       │   │   ├── Navbar.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── Hero.jsx
│       │   │   ├── ServiceCard.jsx
│       │   │   ├── DoctorCard.jsx
│       │   │   └── Testimonial.jsx
│       │   └── admin/
│       │       ├── Sidebar.jsx
│       │       ├── Header.jsx
│       │       ├── StatsCard.jsx
│       │       └── DataTable.jsx
│       ├── hooks/
│       │   ├── useAuth.js
│       │   ├── useFetch.js
│       │   └── usePagination.js
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── ThemeContext.jsx
│       ├── services/
│       │   ├── axios.js
│       │   ├── auth.js
│       │   ├── doctor.js
│       │   ├── service.js
│       │   ├── blog.js
│       │   └── appointment.js
│       ├── utils/
│       │   ├── helper.js
│       │   ├── constants.js
│       │   └── validator.js
│       └── assets/
│           ├── images/
│           ├── icons/
│           └── fonts/
│
├── public/
├── package.json
└── vite.config.js