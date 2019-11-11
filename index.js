import express from 'express';

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`listein port ${PORT}`);

const handleHome = (req, res) => {
  console.log(req);
  res.send('Hello from index.js toto');
};

app.get('/', handleHome);
app.listen(PORT, handleListening);
