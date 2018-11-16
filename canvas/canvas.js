const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(300, 100, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(500, 100, 100, 100);
ctx.fillStyle = 'orange';

// LINE
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(100, 200);
ctx.lineTo(300, 400);
ctx.lineTo(500, 600);
ctx.lineTo(700, 700);
ctx.lineTo(800, 600);
ctx.lineTo(900, 800);
ctx.lineTo(1000, 710);
ctx.strokeStyle = 'red';
ctx.stroke();

// Circle
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.arc(500, 500, Math.random() * 250, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
}
