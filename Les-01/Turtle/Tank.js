// maak een variabele voor de canvas
let canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
let context = canvas.getContext('2d');

//maak de canvas schermvullend
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

//TURRET
context.beginPath();

context.fillStyle = "#e8dab5";
context.lineWidth = 5;

context.moveTo(600,200);
context.lineTo(1000,200);
context.lineTo(1030,220);
context.lineTo(1030,270);
context.lineTo(1000,290);
context.lineTo(640,320);
context.lineTo(400,310);
context.lineTo(350,270);
context.lineTo(400,210);

context.fill();
context.closePath();
context.stroke();
//----------------------------------------------------------------------------------

//HULL
context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(500,314.5);
context.lineTo(140,340);
context.lineTo(120,360);
context.lineTo(180,440);
context.lineTo(1100,440);
context.lineTo(1120,420);
context.lineTo(1120,400);
context.lineTo(1140,380);
context.lineTo(1250,380);
context.lineTo(1250,340);
context.lineTo(140,340);


context.fill();
context.closePath();
context.stroke();

//=-==============================================

context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(710,314.5);
context.lineTo(900,314.5);
context.lineTo(1100,290);
context.lineTo(1200,290);
context.lineTo(1180,340);
context.lineTo(710,340);

context.fill();
context.closePath();
context.stroke();
//--------------------------------------------------------

context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(480,340);
context.lineTo(480,440);

context.fill();
context.closePath();
context.stroke();

//....................

context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(600,340);
context.lineTo(600,440);

context.fill();
context.closePath();
context.stroke();
//.....................
context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(640,340);
context.lineTo(640,440);

context.fill();
context.closePath();
context.stroke();

//.....................
context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(1100,340);
context.lineTo(1100,440);

context.fill();
context.closePath();
context.stroke();

//...........

context.beginPath();

context.fillStyle = "";

context.moveTo(500,314.5);
context.lineTo(140,340);
context.lineTo(710,340);
context.lineTo(710,315);
context.lineTo(640,320);


context.fill();
context.closePath();
context.stroke();

///----------------------------------

context.beginPath();

context.fillStyle = "";

context.moveTo(363,254.5);
context.lineTo(0,254.5);
context.lineTo(0,284.5);
context.lineTo(363,284.5);
context.lineTo(351,271);



context.fill();
context.closePath();
context.stroke();
//---------------

context.beginPath();

context.fillStyle = "#636363";

context.moveTo(150, 400);
context.lineTo(150, 420);
context.lineTo(165, 440);
context.lineTo(340, 550);
context.lineTo(1100, 550);
context.lineTo(1200, 440);
context.lineTo(1200, 410);
context.lineTo(1180, 380);
context.lineTo(1140, 380);
context.lineTo(1120, 400);
context.lineTo(1120, 420);
context.lineTo(1100, 440);
context.lineTo(180, 440);

context.lineTo(340, 540);
context.lineTo(1100, 540);
context.lineTo(1190, 440);
context.lineTo(1190, 410);
context.lineTo(1170, 380);

context.lineTo(1140, 380);
context.lineTo(1120, 400);
context.lineTo(1120, 420);
context.lineTo(1100, 440);
context.lineTo(180, 440);


//*context.lineTo(1140, 370);
//context.lineTo(1120, 390);
//context.lineTo(1120, 410);
//context.lineTo(1100, 430);
//context.lineTo(180, 430);
//#b3a788
context.fill();
context.closePath();
context.stroke();

//---------------------

context.beginPath();
context.arc(350, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(350, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(476, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(476, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(600, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(600, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(725, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(725, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(850, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(850, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(975, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(975, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(1075, 495, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#828282";
context.arc(1075, 495, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(220, 410, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#6e6e6e";
context.arc(220, 410, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(1145, 420, 45, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = "#6e6e6e";
context.arc(1145, 420, 38, 0, 2 * Math.PI);
context.fill();
context.stroke();

//----------------------------------------------------------------------

context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(140,340);
context.lineTo(120,360);
context.lineTo(180,440);
context.lineTo(480,440);
context.lineTo(480,340);

context.fill();
context.closePath();
context.stroke();

context.beginPath();

context.fillStyle = "#e8dab5";

context.moveTo(1100,340);
context.lineTo(1100,440);
context.lineTo(1120,420);
context.lineTo(1120,400);
context.lineTo(1140,380);
context.lineTo(1250,380);
context.lineTo(1250,340);

context.fill();
context.closePath();
context.stroke();

//-------------------------------------------------
