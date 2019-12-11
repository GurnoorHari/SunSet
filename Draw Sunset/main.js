let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloudLogoImg = document.getElementById("cloud-logo-img")

//Background
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300)


// CIRCLES / ARCS
ctx.lineWidth = 5;
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill();

// IMAGES
ctx.drawImage(cloudLogoImg, 150, 100);
ctx.drawImage(cloudLogoImg, 190, 80);

ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 300);
