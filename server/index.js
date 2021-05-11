const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const db = require("./DB");
const app = express();
const usersRouter = require('./routes/users-router')

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.on('error', (err)=>{console.log(err)})

app.listen(PORT, () => {
  console.log(`MERN app is connected to serve on server on port: ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Get api is working fine");
// });

app.use('/users', usersRouter)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
