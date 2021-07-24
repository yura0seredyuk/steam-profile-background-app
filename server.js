const express = require('express');
const app = express();

app.use('/users/', require('./routes/usersRoute'));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Yura', lastName: 'Seredyuk'},
    {id: 2, firstName: 'Oleg', lastName: 'Seredyuk'}
  ]; 

  res.json(customers);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server was running on port ${PORT}`);
})
