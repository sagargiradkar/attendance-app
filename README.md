AttendanceApp/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js      # Handles authentication
│   │   ├── attendanceController.js # Handles attendance
│   │   └── userController.js      # Handles user-related actions
│   ├── models/
│   │   ├── User.js                # User schema
│   │   └── Attendance.js          # Attendance schema
│   ├── routes/
│   │   ├── authRoutes.js          # Authentication routes
│   │   ├── attendanceRoutes.js    # Attendance routes
│   │   └── userRoutes.js          # User management routes
│   ├── middlewares/
│   │   └── authMiddleware.js      # JWT authentication
│   ├── utils/
│   │   └── jwtUtils.js            # JWT helpers
│   ├── app.js                     # Express server setup
│   └── server.js                  # Entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── pages/                 # Page components
│   │   ├── services/              # API services
│   │   ├── App.js                 # React App
│   │   ├── index.js               # React entry point
│   │   └── routes.js              # Routing
└── README.md
