const canvas=
  document.getElementById('canavs');
canvas.getContext('2d');
const images=
  [
    "i1.jpg",
    "i2.jpg",
    "i3.jpg",
    "i4.jpg",
  ];
img.x= Math.random() * width;
img.y= Math.random() * height;
images.forEach(img => {
  ctx.filter = 'grayscale(1)';
});
images.forEach(img => {
  img.opacity = 0.5;
});
const dist = Math.hypot(dx, dy);
if (dist <100) {
  img.scale =1.2;
  ctx.filter = 'grayscale(0)'
}
