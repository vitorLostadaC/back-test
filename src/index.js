const cors = require('cors')
const express = require("express");

const app = express();
app.use(cors())
const PORT = 3333;

app.get("/", (req, res) => {
  res.json({
    oi: 'Hello'
  }).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
