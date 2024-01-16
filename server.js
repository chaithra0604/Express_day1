const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;
const app = express();
const contactRouter = require('./routes/contactRouter');
const connectDb = require('./config/dbConnection');
connectDb();
app.use(express.json());

//MIDDLEWARE FUNCTION
//app.use((req, res, next) => { console.log(`${req.url}`,`${req.method}`,Date.now()),
//next() })

app.get('/',(req,res)=>{
      res.status(200).json({
        "message":"message from server.js"
      });
});


app.use('/api/contacts', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});





//npm install mongodb
//mongodb+srv://chaithrags:chaimongo213!@chaithrags.qvqteun.mongodb.net/?retryWrites=true&w=majority
