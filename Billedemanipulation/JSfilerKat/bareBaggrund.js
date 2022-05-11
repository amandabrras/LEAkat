let img;
let sortKat;
let orangeKat;
let brunKat;
let multiKat;


function preload(){
  img = loadImage('billeder/baggrund.jpg');
  orangeKat = loadImage('billeder/kat1.png');
  sortKat = loadImage('billeder/kat2.png');
  brunKat = loadImage('billeder/kat3.png');
  multiKat = loadImage('billeder/kat4.png');
}

function setup(){
  w = sortKat.width;
  h = sortKat.height;
  w2 = orangeKat.width;
  h2 = orangeKat.height;
  createCanvas(1450,800);
  noStroke();
  img.loadPixels();

  sortKnap = createButton("Udtvær sort kat");

  sortKnap.size(150,70);
  sortKnap.position(10,10);
  sortKnap.style("font-family", "Bodoni");
  sortKnap.style("font-size", "24px");
  sortKnap.mouseClicked(blurSort1);
    
  orangeKnap = createButton("Orange kat bliver grå!");
  
  orangeKnap.size(150,70);
  orangeKnap.position(170,10);
  orangeKnap.style("font-family", "Bodoni");
  orangeKnap.style("font-size", "24px");
  orangeKnap.mouseClicked(grayOrange);
}

function draw() {
    image(img,0,0,1450,800);
    let value = mouseX;

a=map(mouseX,1015,1275,0,225);
b=map(mouseX,1275,1535, 255, 0);
c=map(mouseY,210,430,255,0);
d=map(mouseY,430,650,0,255);

//hvis man finder den sorte kat!

 if (mouseX>870 && mouseX<1020 && mouseY>600 && mouseY<720){
     image(sortKat,870,600,150,120);
 }

//hvis man finder den orange kat!
if (mouseX>70 && mouseX<190 && mouseY>400 && mouseY<520){
    image(orangeKat,70,400,120,120);  
}

//hvis man finder den brune kat!
if (mouseX>900 && mouseX<980 && mouseY>360 && mouseY<440){
     image(brunKat,900,360,80,80); 
}

//hvis man finder den multifarvede kat!
if ((mouseX>1015 && mouseX<1275) && (mouseY>0 && mouseY<430)){
     tint(255,a-c);

     image(multiKat,1215,310,120,120); 
}
    
if ((mouseX>1015 && mouseX<1275) && (mouseY>430 && mouseY<650)){
     tint(255,a-d);

     image(multiKat,1215,310,120,120); 
    
}    
if ((mouseX>1275 && mouseX<1535) && (mouseY>0 && mouseY<430)){
     tint(255,b-c);
         image(multiKat,1215,310,120,120); 
}
if ((mouseX>1275 && mouseX<1535) && (mouseY>430 && mouseY<650)){
     tint(255,b-d);
         image(multiKat,1215,310,120,120); 
}

//sol og titel
         tint(255,255);
    fill(255,255,0);
    ellipse(500,150,50,50);
    fill(0,0,0);
    textSize(50);
    text("FIND KATTENE",548,100);
    
}

    
//filtrene
function blurSort1(){
  sortKat.filter(BLUR,6);
  image(sortKat,870,600,150,120);
  noLoop();
}

function blurSort2(){
 sortKat.filter(BLUR, 5);
      noLoop();
}

function grayOrange(){
    orangeKat.filter(GRAY);
    image(orangeKat,70,400,120,120);
    noLoop();
}

function ownFilter() {
  for (let i = 870; i < w+870; i += 1) {
    for (let j = 600; j < h+600; j += 1) {
      r = sortKat.get(i,j)[0]+sortKat.get(i-1,j)[0]+sortKat.get(i-2,j)[0]+sortKat.get(i+2,j)[0]+sortKat.get(i+1,j)[0]
      g = sortKat.get(i,j)[1]+sortKat.get(i-1,j)[1]+sortKat.get(i-2,j)[1]+sortKat.get(i+2,j)[1]+sortKat.get(i+1,j)[1]
      b = sortKat.get(i,j)[2]+sortKat.get(i-1,j)[2]+sortKat.get(i-2,j)[2]+sortKat.get(i+2,j)[2]+sortKat.get(i+1,j)[2]
      fill([r/5,g/5,b/5]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
function ownFilter2() {

  for (let i = 870; i < w+870; i += 1) {
    for (let j = 600; j < h+600; j += 1) {
      r = (orangeKat.get(i,j)[0]+orangeKat.get(i,j)[1]+orangeKat.get(i,j)[2])/3
      g = (orangeKat.get(i,j)[0]+orangeKat.get(i,j)[1]+orangeKat.get(i,j)[2])/3
      b = (orangeKat.get(i,j)[0]+orangeKat.get(i,j)[1]+orangeKat.get(i,j)[2])/3
      fill([r,g,b]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
