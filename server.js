const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

