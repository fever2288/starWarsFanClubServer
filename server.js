const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use('/api/v1/starWars', require('./routes/starWarsRoutes'));

// API Documentation
if (process.env.NODE_ENV != 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// error handler middlware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
