
document.querySelector('h1').style.background = 'pink';
const root = document.querySelector('#root')


function getUsers(e){
    console.log('get users')

    fetch('/get-users')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        renderUsers(data)
    })
    console.log('after fetch')
}





function Show(e){
    console.log('get images')

    fetch('/get-images')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        renderImages(data)
    })
    console.log('after fetch')
}


function Add(e) {
    e.preventDefault();
    
    var url= document.getElementById('url');
    url=url.value;
    
    console.log(url);
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ url })
    }).then(r => r.json())
        .then(data => {
            console.log(data)
        })
    document.getElementById('url').value="";    
}
function renderImages(images){
    const root = document.querySelector('#root');
    let html = '';
    //var num=0;
    //const imagess=[];
    
    images.forEach(image => {
        
      //  num+=1;
       
        html += `<p onclick="show('${image.url}')">${image.id}<img style="width:100px;height:100px" src="${image.url}"></p>`
        //imagess.push({image})
    })
    
   

    root.innerHTML = html
}
function getImages(url) {
    console.log('get url', url)

    fetch(`/get-images`)
        .then(r => r.json())
        .then(pass => {

            console.log()
        })
    console.log('after fetch')
}
function renderUsers(users) {
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        
        html += `
        <p >Name: ${user.url}</p>`
    })

    root.innerHTML = html
}