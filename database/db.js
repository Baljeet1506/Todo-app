const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./database')


const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded());

app.get('/tasks',(req,res)=>{
    const Task_Query = "SELECT * FROM todohandler.tasks";
    connection.query(Task_Query, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
        })
})

app.post('/addTasks',(req,res)=>{
   const Add_Query = `insert into todohandler.tasks (taskName) values ('${req.body.task}')`
   connection.query(Add_Query, (err) => {
   if(err) console.log(err)
   else res.send('Task added')
   })
 
})



app.delete('/deleteTasks/: taskId',(req,res)=>{
    const taskId = req.params.taskId;
   const Delete_Query = "DELETE FROM todohandler.tasks where taskId= ?";
   connection.query(Delete_Query, taskId, (err, res) => {
    if(err){ console.log(err)
    }else{
        res.send('task deleted')
    }
    });
});

app.put("/updateTasks", (req, res) => {
    const taskId = req.body.taskId;
    const taskName = req.body.taskName;
    const Update_Query = "UPDATE todohandler.tasks SET taskName = ? where taskId= ?";
    connection.query(Update_Query, taskId, taskName, (err, res) => {
    if(err){ console.log(err)
    }else{
        res.send('task updated')
    }
    });
})

app.post('/searchTasks',(req,res)=>{
   res.send(req.body)
    })


app.post('/register', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;


    connection.query("INSERT INTO register (username, password) VALUES (?,?)", [username, password], (err,result) => {
        console.log(err);
    });
});

app.post('/login', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;


    connection.query("SELECT * FROM register WHERE username = ? AND password = ?", [username, password], (err,result) => {
        if (err){
        res.send({err: err}); 
        } 
            if (result.length > 0){
                res.send(result)
            }else{
                res.send({message: "The user/password not found"});
            }
        
    });
});


app.listen(4000, ()=> {
    console.log('run program')
})