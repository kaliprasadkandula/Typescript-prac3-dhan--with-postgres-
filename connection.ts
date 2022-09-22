const { Client } = require ('pg')
const client = new Client ( {
    host : "localhost" , //be careful while writing the host names 
    user : "postgres" ,
    port : 9999 ,   //how to change the port number
    database : "postgres",
    password : "kali2001",
} )
    
module.exports = client