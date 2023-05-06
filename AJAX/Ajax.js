function gen() {
    let data=new XMLHttpRequest();
    data.onreadystatechange=function(){
        if (this.readyState==4&& this.status==200) {
            document.getElementById("demo").innerHTML=this.responseText;
        }

    };
    data.open("GET","https://reqres.in/api/users/2")
    
    data.send();
}