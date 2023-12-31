const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json()) //req.body
app.use(cors());

//Routes//

// register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//dashboard route

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("server is running on port 5000");
})
