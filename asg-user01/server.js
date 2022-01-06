const express = require('express');
const server = express();
const port=3000;


const cors=require('cors');
const CORS_OPTIONS= {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200 
  }
  server.use(express.json())
server.use(express.urlencoded({extended:true}));
//server.use(express.cors(CORS_OPTIONS));
server.use(cors(CORS_OPTIONS));
const USERS =[
    {id:1,userName:"Shalaka"},
    {id:2,userName:"Rashmi"},
    {id:3,userName:"Sonali"}
];
//server.use(cors(CORS_OPTIONS));

server.get('/',(req,resp)=>{
    resp.send("Express is working");
})

server.get('/users/',(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.send(USERS);
  });

  server.listen(port,()=>{
    console.log("http://localhost:3000 started ");
});

 