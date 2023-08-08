require('dotenv').config();
const express = require('express');
const app=express();
const request = require('request');

app.use(express.json());  // body parser middleware to parse json objects in body
app.use(express.urlencoded({extended:true})); // urlencoded-like form body to act like JSON


  


// route for quotes
app.get('/quotes', (req, res) => {
  request.get(
    {
      //didn't understand this
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + "",
      headers: {
        'X-Api-Key': Viommv+U8M2zNxIIoBwaoA==5d7ai9EqPmZP4V9E,
      },
    },
    (error, response, body) => {
      if (error) {
        res.status(500).send('Request failed')
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send('Error')
      } else {
        //body not parsed
        res.send(body)
      }
    }
  )
});

// route for quotes using custom categories
app.get('/quotes/:category', (req, res) => {
//   const id = req.params;
//   console.log(id);
  const category = req.params.category;
  request.get(
    {
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: {
        'X-Api-Key': Viommv+U8M2zNxIIoBwaoA==5d7ai9EqPmZP4V9E,
      },
    },
    (error, response, body) => {
      if (error) {
        res.status(500).send('Request failed')
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).send('Error')
      } else {
        console.log(body);
        //res.send(body)
      }
    }
  )
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})