const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


function animate() {
  requestAnimationFrame(animate);
  ctx.arc(500, 500, 100, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
}
