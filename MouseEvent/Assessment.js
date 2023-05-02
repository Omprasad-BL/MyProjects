let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;
let alpha = 1;

const circle = document.querySelector(".circle");

addEventListener("mousemove", ({ clientX, clientY }) => {
  mouseX = clientX;
  mouseY = clientY;
  // arbitrary high value so that it takes a moment until it actually fades out.
  alpha = 5;  
});

let prev = 0;
requestAnimationFrame(function render(now) {
  requestAnimationFrame(render);
  
  // expecting a 16ms frame interval, 
  // check how the current update interval compared to that
  const factor = (now - prev) / 16;
  prev = now;
  
  // how quickly to follow the cursor
  const speed = .125; 

  // adjusted for differences in update interval.
  posX += factor * speed * (mouseX - posX);
  posY += factor * speed * (mouseY - posY);
  // fade out
  alpha *= Math.pow(.95, factor);

  circle.style.transform = `translate(${posX}px, ${posY}px)`;
  
  let opacity = Math.min(1, alpha);

  // round the value to closest 1/255 step
  // opacity ain't more precise and that way we don't set 
  // "new values" that compute to the same opacity.
  circle.style.opacity = Math.round(opacity * 255) / 255;
});