document.getElementById("email").value = localStorage.getItem("emaillogin");

const putuserdata = async(dataou)=> {

    let url =("http://localhost:3040/task/");
    let option = {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(dataou)
    }
    let req = await fetch(url, option); 
    if(req){
       alert("Task Added Successfully");
    }
    else{
       alert("Task Added Failure");
    }
}

const getuserdata = (e) => {
    e.preventDefault();
    let udata = {
        taskname: document.getElementById("tname").value,
        user: document.getElementById("email").value,
        description: document.getElementById("task_desc").value,
        status : document.getElementById("status").value
    }
    putuserdata(udata);
}

const userdatas = document.querySelector("#userdata");
userdatas.addEventListener("submit", getuserdata);