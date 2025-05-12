const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const helmet = require('helmet');


app.use(express.json());

app.use(cors());

app.use(helmet());

app.use('/api/users', userRoutes); 

app.use(errorHandler); // Global error handler


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server has started on: ${port}`))