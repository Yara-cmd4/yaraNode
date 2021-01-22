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


function renderUsers(users) {
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        html += `<p onclick="getPassword('${user.name}')">Name: ${user.name} password:${user.password}</p>`
    })

    root.innerHTML = html
}