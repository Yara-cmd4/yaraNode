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
function Login(e){
    fetch('/get-users')
    .then(r=>r.json())
    .then(data=>{
        
        renderUsers(data)
            
    })
}

function renderpass(users){

}
function getPassword(name) {
    console.log('get password', name)

    fetch(`/get-password?name=${name}`)
        .then(r => r.json())
        .then(pass => {

            console.log(pass.password)
        })
    console.log('after fetch')
}

function Show(){

}

function Add(e) {
    e.preventDefault();



    let {url} = e.target.elements;
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