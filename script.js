const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
var initialemail = "trial123@123.com";
var initialpassword = "1234";

registerLink.addEventListener("click", asba);
function asba(){
    wrapper.classList.add("active");
}

loginLink.addEventListener("click", asb); 
function asb(){
    wrapper.classList.remove("active")
}

document.querySelectorAll("button")[0].addEventListener("click", ()=>{
    var loginemail = document.getElementById("email-login").value;
    var loginpassword = document.getElementById("password-login").value;

    if(loginemail == initialemail && loginpassword == initialpassword){
        document.getElementsByClassName("wrong-password")[0].classList.add("sorry");
        alert("Site is Under Maintenance. Sorry for inconvenience")
    }
    else{
        var crash = new Audio("error.mp3");
            crash.play();
        document.getElementsByClassName("wrong-password")[0].classList.remove("sorry");
    }
});

document.querySelectorAll("button")[1].addEventListener("click", ()=>{
    alert("Site is Under Maintenance. Sorry for inconvenience")
})





