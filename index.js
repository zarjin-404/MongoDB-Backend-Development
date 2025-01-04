const express = require('express');
const app = express();
const port = 3000;
const User = require('./user.models');

app.get('/', (req, res) => {
  res.send('Mongo Data Base');
});

app.get('/createUser', async (req, res) => {
  const user = await User.create({
    fullName: 'Jewel Rana',
    userName: 'jewel',
    email: 'jewelrana@gamil.com',
    password: '12345678',
  });
  res.send(user);
});

app.get('/readUser', async (req, res) => {
  const user = await User.find();
  res.send(user);
});

app.get('/upadataUser', async (req, res) => {
  const user = await User.findOneAndUpdate({ userName: 'jewel' }, { fullName: 'Ayman Islam' }, { new: true });
  res.send(user);
});

app.get('/deleteUser', async (req, res) => {
  const user = await User.findOneAndDelete({ userName: 'jewel' });
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
