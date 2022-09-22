import express from 'express';
const client = require('../connection');
const router:express.Router = express.Router();

/*
Find all users
*/
router.get('/', (req, res) => { 
    client.query(`select * from users`,(err:any,data:any)=>{ //what can be the data type here for error and data
        if(err)
        {
            res.send(`error: ${err}`);
        }
        else
        {
            res.send(data.rows);
        }
    })
    client.end;
});
/*
Find user by id
*/
router.get('/:id', (req, res) => { 
    client.query(`select * from users where id=${req.params.id}`,(err:any,data:any)=>{ //what can be the data type here for error and data
        if(err)
        {
            res.send(`error: ${err}`);
        }
        else
        {
            res.send(data.rows);
        }
    })
    client.end;
});
/*
Insert a new user into table
*/
router.post('/add', (req, res) => { 
    const rb=req.body;
    const Query=`insert into users(id,first_name,last_name) values(${rb.id},'${rb.first_name}','${rb.last_name}')`
    //see in the above query dont forget the columns
   // console.log(rb);
    client.query(Query,(err:any,data:any)=>{ //what can be the data type here for error and data
        if(err)
        {
            res.send(`error: ${err}`);
        }
        else
        {
           res.send(`data Inserted successfully`);
        }
    })
    client.end;
});
router.put('/update/', (req, res) => { 
    const rb=req.body;
    const Query=`update users 
                    set
                    first_name='${rb.first_name}',
                    last_name='${rb.last_name}'
                    where id=${rb.id}
                    `
    //see in the above query dont forget the columns
   // console.log(rb);
    client.query(Query,(err:any,data:any)=>{ //what can be the data type here for error and data
        if(err)
        {
            res.send(`error: ${err}`);
        }
        else
        {
           res.send(`data Updated successfully`);
        }
    })
    client.end;
});
router.delete('/delete/', (req, res) => { 
    const rb=req.body;
    const Query=`delete from users 
                    where id=${rb.id}
                    `
    //see in the above query dont forget the columns
   // console.log(rb);
    client.query(Query,(err:any,data:any)=>{ //what can be the data type here for error and data
        if(err)
        {
            res.send(`error: ${err}`);
        }
        else
        {
           res.send(`data deleted successfully`);
        }
    })
    client.end;
});
client.connect();

module.exports = router;