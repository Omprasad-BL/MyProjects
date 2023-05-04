
// function random() {
    //  let emj= Math.floor(Math.random()*10);
    // var emjArea=document.getElementById("val");

    // console.log("Hello work ");  REFERENCE COPY
    // let emj=Math.floor(100000 + Math.random() * 900000);
    // emjArea.innerHTML=emj;

    
    // console.log("Hello work ");
    // let emj=Math.floor((8986) + Math.floor(Math.random() * 129510));
    // emjArea.innerHTML= `&#${emj}`;

    // };
let code="";
console.log(Math.floor(Math.random()*9000));
for(let i=1;i<5;i++){
    code+=Math.floor(Math.random()*9);

}
console.log(code);
    // console.log(
    //     Math.floor(Math.random() * 1000000)
    //     );
    
    // var number = Math.floor(Math.random() * 9000000000) + 1000000000;
    // console.log(number);

    // function random(len) {
    //     let result = Math.floor(Math.random() * Math.pow(10, len));
      
    //     return (result.toString().length < len) ? random(len) : result;
    //   }
      
    //   console.log(random(6));


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
console.log( getRandomInt(8986,129510));      
console.log(Math.floor(Math.random()*(129510-8986) + 129510 ));