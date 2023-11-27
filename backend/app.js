const express = require('express');
const cors=require("cors")
const eventRoutes = require('./routes/events');

const app = express();

app.use(cors())
app.use(express.json());



app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);
