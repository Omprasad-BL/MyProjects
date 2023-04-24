const listenBtn = document.getElementById('submit');
let text=document.getElementById("demo");
listenBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const msg = new SpeechSynthesisUtterance( text.value );
  window.speechSynthesis.speak(msg);

});






// Trying some other methods














































// 'speechSythesis' in window ?
// console.log("Web browser supports "): console.log("Browser not support");

// const synth= window.speechSynthesis;
// let ourText="Hey there whats up ";
// const utterThis=new SpeechSynthesisUtterance(ourText);
// synth.speak(utterThis)

// if ('speechSynthesis' in window) {
//     // Speech Synthesis supported 🎉
//    }else{
//      // Speech Synthesis Not Supported 😣
//      alert("Sorry, your browser doesn't support text to speech!");
//    }

//    var msg = new SpeechSynthesisUtterance();
// msg.text = document.getElementById("demo").value;
// window.speechSynthesis.speak(msg);


// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10]; 
// msg.volume = 1; // From 0 to 1
// msg.rate = 1; // From 0.1 to 10
// msg.pitch = 2; // From 0 to 2
// msg.text = "Como estas Joel";
// msg.lang = 'es';
// speechSynthesis.speak(msg);

// speechSynthesis.getVoices().forEach(function(voice) {
//     console.log(voice.name, voice.default ? voice.default :'');
//   });
