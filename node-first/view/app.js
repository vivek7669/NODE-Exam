
const putuserdata = async(dataou)=> {

    let url =("http://localhost:3040/user/");
    let option = {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(dataou)
    }
    let req = await fetch(url, option); 
    if(req){
        console.log("User Registered");
        location.href = "./web/login.html";
    }
    else{   
        console.log("User Not Registered");
    }
}

const getuserdata = (e) => {
    e.preventDefault();
    let udata = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    }
    putuserdata(udata);
}

const userdatas = document.querySelector("#userdata");
userdatas.addEventListener("submit", getuserdata);