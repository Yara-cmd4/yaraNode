const express=require('express')

const app = express();


app.use(express.static('public'));

const users = [
  {name:'Kilani', id:'222222222',password:'123'},
  {name:'Yara', id:'333333333',password:'1234'},
  {name:'Ihab', id:'444444',password:'12345'}
]
users.push({name:'ksfj',id:'983',password:'122'});
const images=[]
//route
app.get('/get-users',(req, res)=>{
  res.send(images)
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
    const {url} = req.body;
  
    images.push({url})
  
    res.send({ok:true})
  })
  
   
const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})
