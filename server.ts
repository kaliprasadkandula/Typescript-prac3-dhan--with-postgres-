// const express=require('express'); //[D] why this is not working...
import express from 'express';
// import router from './routes/users' //[D ] this is not working
const router=require('./routes/users')
const client = require('./connection');
const app:express.Application = express();
const body_parser = require('body-parser');

app.use(express.json());
app.use('/users',router);
const port:number = 3000;
const company:string =`Dhan AI`

app.get('/',(req:express.Request, res:express.Response) => {
    res.send(`welcome to ${company} !!`);
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);    //our server is listening on port 3000 in local
})
module.exports = {client: client}