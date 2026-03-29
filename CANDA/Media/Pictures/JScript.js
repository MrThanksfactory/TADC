const canvas=
  document.getElementById('canavs');
canvas.getContext('2d');
const images=
  [
    "i1.png",
    "i2.png",
    "i3.png",
    "i4.png",
    "i5.png",
    "i6.png",
    "i7.png",
    "i8.png",
    "i9.png",
    "i10.png",
    "i11.png",
    "i12.png",
    "i13.png",
    "i14.png",
    "i15.png",
    "i16.png",
    "i17.png",
    "i18.png",
    "i19.png",
    "i20.png",
    "i21.png",
    "i22.png",
    "i24.png",
    "i25.png",
    "i26.png",
    "i27.png",
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
