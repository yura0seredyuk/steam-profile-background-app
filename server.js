const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use('/users/', require('./routes/usersRoute'));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Yura', lastName: 'Seredyuk'},
    {id: 2, firstName: 'Oleg', lastName: 'Seredyuk'}
  ]; 

  res.json(customers);
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.1b6uf.mongodb.net/steam-profile-background-app?retryWrites=true&w=majority', {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})

mongoose.connection.on('error', err => {
  console.log('err', err);
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server was running on port ${PORT}`);
})
