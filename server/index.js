const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use('/', require('./routes/route'));
app.listen(PORT, () => {});
