const express=require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('public'));
app.use(bodyParser.json())
const users = [
  {name:'Kilani', id:'2222',password:'123'},
  {name:'Yara', id:'333333333',password:'1234'},
  {name:'Ihab', id:'444444',password:'12345'}
]
users.push({name:'ksfj',id:'983',password:'122'});
const images=[]
var id=0;
//route
const stars=[
  {num:'1',star:''},
  {num:'2',star:''},
  {num:'3',star:''},
  {num:'4',star:''},
  {num:'5',star:''}
]
app.get('/get-users',(req, res)=>{
  res.send(images)
})
app.get('/get-images' ,(req,res)=>{
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
    id+=1;
    console.log(req.body) //get the data
    const {url} = req.body;
  
    images.push({url})
   // images.sort();
    res.send({ok:true})
  })
  app.post('/sort',(req,res)=>{
    images.sort();
  })
   
const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})
