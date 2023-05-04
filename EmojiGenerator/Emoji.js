function random() {
  //  let emj= Math.floor(Math.random()*10);
  var emjArea = document.getElementById("val");
  console.log("Hello work ");
  // let emj=Math.floor((8986) + Math.floor(Math.random() * 129510));
  var emj =0;
  while (emj < 8986) {
    emj = Math.floor(Math.random() * 129510);
  }
  emjArea.innerHTML = `&#${emj}`;
  document.getElementById("code").innerHTML=emjArea.textContent;

}

















// console.log(emj=Math.floor(Math.random()*(129510)));
// let str="";
// for(let a=1;a<5;a++){
//     str+=Math.floor(Math.random()*16).toString(16)
//     console.log(str);

// }
