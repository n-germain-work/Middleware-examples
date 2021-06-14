const express = require('express');
const router = express.Router();
const morgan = require('morgan');

const app = express();

// Third-party
app.use(morgan('common'));

const port = 3000;

//application-level
app.use('/', router);

//router-level
router.get('/', (req, res) => {
  res.json({
    message: 'Hello Stranger! How are you?',
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
