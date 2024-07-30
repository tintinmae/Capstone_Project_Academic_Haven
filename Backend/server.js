import express from 'express';
// import userRoutes from './routes/user.routes.js'; 
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// app.use('/api/users', userRoutes);

// MySQL connection
db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});