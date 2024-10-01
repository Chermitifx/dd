const express = require('express');
const database = require('./config/database');
const cors = require('cors');
const TaskRoute = require('./routes/TaskRoutes');
const UserRoute = require('./routes/UserRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", TaskRoute);
app.use("/api/users", UserRoute);     

//MONGO_URI=mongodb://127.0.0.1:27017/tasksdb
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
