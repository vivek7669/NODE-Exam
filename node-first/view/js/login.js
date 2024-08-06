
const putuserdata = async(dataou)=> {
    console.log(dataou.email);
    let url =(`http://localhost:3040/user/${dataou.email}`);
    let req = await fetch(url); 
    let res = await req.json();
    console.log(res);

    if(res.password == dataou.password){
        console.log(`User Login Success by ${res.name}.`);
        localStorage.setItem('emaillogin',res.email);
        location.href = "./home.html";
    }
    else{
        console.log("User Not Login.");
    }
}

const getuserdata = (e) => {
    e.preventDefault();
    let udata = {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
    }
    putuserdata(udata);
}

const userdatas = document.querySelector("#userdata");
userdatas.addEventListener("submit", getuserdata);