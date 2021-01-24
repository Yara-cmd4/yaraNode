const express=require('express')

const app = express();


app.use(express.static('public'));

const users = [
  {name:'Kilani', id:'222222222',password:'123'},
  {name:'Yara', id:'333333333',password:'1234'},
  {name:'Ihab', id:'444444',password:'12345'}
]
users+={name:'ksfj',id:'983',password:'122'}

//route
app.get('/get-users',(req, res)=>{
  res.send(users)
})

app.get('/get-password',(req, res)=>{
    const {name} =req.query;
  
    console.log(req.query);
  
    let usr = users.find(user=>user.name === name);
    console.log(usr)
    res.send({password:usr.password})
  })
  
  
  app.post('/login',(req, res)=>{
  
    console.log(req.body) //get the data
    const {name, password} = req.body;
  
    users.push({name, password})
  
    res.send({ok:true})
  })
  
   
const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})
