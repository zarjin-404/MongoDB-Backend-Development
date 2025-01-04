const express = require('express');
const app = express();
const port = 3000;

const userModel = require('./user.models');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create User
app.get('/create', async (req, res) => {
  const user = await userModel.create({
    name: 'Zarjin Islam',
    username: 'zarjin',
    email: 'zarjin@gmail.com',
    password: '12345699999',
  });
  res.send(user);
});

//Update User
app.get('/update', async (req, res) => {
  const userUpdate = await userModel.findOneAndUpdate(
    {
      username: 'johndoe',
    },
    { name: 'Zarjin Islam Jewel' },
    { new: true },
  );
  res.send(userUpdate);
});

//read User
app.get('/read', async (req, res) => {
  const usersRead = await userModel.find();
  res.send(usersRead);
});

//delete User
app.get('/delete', async (req, res) => {
  const usersDelete = await userModel.findOneAndDelete({ username: 'zarjin' });
  res.send(usersDelete);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
