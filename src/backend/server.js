const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5500;

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World from the backend' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
