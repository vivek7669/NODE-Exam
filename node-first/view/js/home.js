document.getElementById("email").value = localStorage.getItem("emaillogin");

// const putuserdata = async(data)=> {

//     let url =("http://localhost:3040/task/");
//     let option = {
//         method : "POST",
//         headers : {"Content-Type": "application/json"},
//         body : JSON.stringify(data)
//     }
//     let req = await fetch(url, option);
//     console.log(req);
     
//     if(req){
//        alert("Task Added Successfully");
//     }
//     else{
//        alert("Task Added Failure");
//     }
// }

const checkdata = async(data) => {
    
    console.log(data.user);
    
    // let url = (`http://localhost:3040/task/${data.user}`);
    let req = await fetch(`http://localhost:3040/task/${data.taskname}`);
    let res = await req.json(); 
    console.log(res);
    
    if(res.taskname == data.taskname){  
      return true
    }
    else{
        return false
    }

}

const getuserdata = (e) => {
    e.preventDefault();
    let udata ={
        taskname: document.getElementById("tname").value,
        user: document.getElementById("email").value,
        description: document.getElementById("task_desc").value,
        status : document.getElementById("status").value
    }
   checkdata(udata);
    // console.log(a);
    
    // putuserdata(udata);
}

const userdatas = document.querySelector("#userdata");
userdatas.addEventListener("submit", getuserdata);