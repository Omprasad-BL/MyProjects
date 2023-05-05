function check() {
    var otp=document.getElementById("otp");
    let val="";
    for(let i=1;i<7;i++){
        val=val+ Math.floor(Math.random()*16).toString(16);
    }
    otp.innerHTML=val;
}

// console.log(Math.floor(Math.random()*10));



 