var gradspan = 1;
var c1, c2;
var font;
var songdata;
var songdatapt2;
var songdatapt3;
var songdatapt4;
var songdatapt5;
var songdatapt6;
var songdatapt7;

var msongp0, msongp1, msongp2, msongp3, msongp4, msongp5, msongp6,
  msongp7, msongp8
var wsongp0, wsongp1, wsongp2, wsongp3, wsongp4, wsongp5, wsongp6,
  wsongp7, wsongp8, wsongp9, wsongp10, wsongp11, wsongp12, wsongp13,
  wsongp14, wsongp15, wsongp16
var tsong0, tsong1, tsong2, tsong3, tsong4, tsong5, tsong6, tsong7,
  tsong8, tsong9, tsong10, tsong11, tsong12, tsong13, tsong14
var fsong0, fsong1, fsong2, fsong3, fsong4, fsong5, fsong6, fsong7,
  fsong8, fsong9, fsong10, fsong11, fsong12, fsong13, fsong14
var ssong0, ssong1, ssong2, ssong3, ssong4, ssong5, ssong6, ssong7,
  ssong8, ssong9, ssong10, ssong11, ssong12, ssong13, ssong14
var sunsong0, sunsong1, sunsong2, sunsong3, sunsong4, sunsong5, sunsong6,
  sunsong8, sunsong9, sunsong10, sunsong11, sunsong12, sunsong13, sunsong14
var m2song0, m2song1, m2song2, m2song3, m2song4, m2song5, m2song6, m2song7,
  m2song8, m2song9, m2song10, m2song11, m2song12, m2song13, m2son14

function preload() {
  
  font = loadFont('adventpro-medium.ttf');
  songdata = loadJSON("songs.json");
  songdatapt2 = loadJSON("songs2.json");
  songdatapt3 = loadJSON("songs3.json");
  songdatapt4 = loadJSON("songs4.json");
  songdatapt5 = loadJSON("songs5.json");
  songdatapt6 = loadJSON("songs6.json");
  songdatapt7 = loadJSON("songs7.json");
  soundFormats('mp3', 'ogg');

}

function setup() {
  
  msongp0 = loadSound(songdata.items[0].track.preview_url);
  msongp1 = loadSound(songdata.items[1].track.preview_url);
  msongp2 = loadSound(songdata.items[2].track.preview_url);
  msongp3 = loadSound(songdata.items[3].track.preview_url);
  msongp4 = loadSound(songdata.items[4].track.preview_url);
  msongp5 = loadSound(songdata.items[5].track.preview_url);
  msongp6 = loadSound(songdata.items[6].track.preview_url);
  msongp7 = loadSound(songdata.items[7].track.preview_url);
  msongp8 = loadSound(songdata.items[8].track.preview_url);

  wsongp0 = loadSound(songdatapt2.items[0].track.preview_url);
  wsongp1 = loadSound(songdatapt2.items[1].track.preview_url);
  wsongp2 = loadSound(songdatapt2.items[2].track.preview_url);
  wsongp3 = loadSound(songdatapt2.items[3].track.preview_url);
  wsongp4 = loadSound(songdatapt2.items[4].track.preview_url);
  wsongp5 = loadSound(songdatapt2.items[5].track.preview_url);
  wsongp6 = loadSound(songdatapt2.items[6].track.preview_url);
  wsongp7 = loadSound(songdatapt2.items[7].track.preview_url);
  wsongp8 = loadSound(songdatapt2.items[8].track.preview_url);
  wsongp9 = loadSound(songdatapt2.items[9].track.preview_url);
  wsongp10 = loadSound(songdatapt2.items[10].track.preview_url);
  wsongp11 = loadSound(songdatapt2.items[11].track.preview_url);
  wsongp12 = loadSound(songdatapt2.items[12].track.preview_url);
  wsongp13 = loadSound(songdatapt2.items[13].track.preview_url);
  wsongp14 = loadSound(songdatapt2.items[14].track.preview_url);
  wsongp15 = loadSound(songdatapt2.items[15].track.preview_url);
  wsongp16 = loadSound(songdatapt2.items[16].track.preview_url);

  tsongp0 = loadSound(songdatapt3.items[0].track.preview_url);
  tsongp1 = loadSound(songdatapt3.items[1].track.preview_url);
  tsongp2 = loadSound(songdatapt3.items[2].track.preview_url);
  tsongp3 = loadSound(songdatapt3.items[3].track.preview_url);
  tsongp4 = loadSound(songdatapt3.items[4].track.preview_url);
  tsongp5 = loadSound(songdatapt3.items[5].track.preview_url);
  tsongp6 = loadSound(songdatapt3.items[6].track.preview_url);
  tsongp7 = loadSound(songdatapt3.items[7].track.preview_url);
  tsongp8 = loadSound(songdatapt3.items[8].track.preview_url);
  tsongp9 = loadSound(songdatapt3.items[9].track.preview_url);
  tsongp10 = loadSound(songdatapt3.items[10].track.preview_url);
  tsongp11 = loadSound(songdatapt3.items[11].track.preview_url);
  tsongp12 = loadSound(songdatapt3.items[12].track.preview_url);
  tsongp13 = loadSound(songdatapt3.items[13].track.preview_url);
  tsongp14 = loadSound(songdatapt3.items[14].track.preview_url);

  fsongp0 = loadSound(songdatapt4.items[0].track.preview_url);
  fsongp1 = loadSound(songdatapt4.items[1].track.preview_url);
  fsongp2 = loadSound(songdatapt4.items[2].track.preview_url);
  fsongp3 = loadSound(songdatapt4.items[3].track.preview_url);
  fsongp4 = loadSound(songdatapt4.items[4].track.preview_url);
  fsongp5 = loadSound(songdatapt4.items[5].track.preview_url);
  fsongp6 = loadSound(songdatapt4.items[6].track.preview_url);
  fsongp7 = loadSound(songdatapt4.items[7].track.preview_url);
  fsongp8 = loadSound(songdatapt4.items[8].track.preview_url);
  fsongp9 = loadSound(songdatapt4.items[9].track.preview_url);
  fsongp10 = loadSound(songdatapt4.items[10].track.preview_url);
  fsongp11 = loadSound(songdatapt4.items[11].track.preview_url);
  fsongp12 = loadSound(songdatapt4.items[12].track.preview_url);
  fsongp13 = loadSound(songdatapt4.items[13].track.preview_url);
  fsongp14 = loadSound(songdatapt4.items[14].track.preview_url);

  ssongp0 = loadSound(songdatapt5.items[0].track.preview_url);
  ssongp1 = loadSound(songdatapt5.items[1].track.preview_url);
  ssongp2 = loadSound(songdatapt5.items[2].track.preview_url);
  ssongp3 = loadSound(songdatapt5.items[3].track.preview_url);
  ssongp4 = loadSound(songdatapt5.items[4].track.preview_url);
  ssongp5 = loadSound(songdatapt5.items[5].track.preview_url);
  ssongp6 = loadSound(songdatapt5.items[6].track.preview_url);
  ssongp7 = loadSound(songdatapt5.items[7].track.preview_url);
  ssongp8 = loadSound(songdatapt5.items[8].track.preview_url);
  ssongp9 = loadSound(songdatapt5.items[9].track.preview_url);
  ssongp10 = loadSound(songdatapt5.items[10].track.preview_url);
  ssongp11 = loadSound(songdatapt5.items[11].track.preview_url);
  ssongp12 = loadSound(songdatapt5.items[12].track.preview_url);
  ssongp13 = loadSound(songdatapt5.items[13].track.preview_url);
  ssongp14 = loadSound(songdatapt5.items[14].track.preview_url);

  sunsongp0 = loadSound(songdatapt6.items[0].track.preview_url);
  sunsongp1 = loadSound(songdatapt6.items[1].track.preview_url);
  sunsongp2 = loadSound(songdatapt6.items[2].track.preview_url);
  sunsongp3 = loadSound(songdatapt6.items[3].track.preview_url);
  sunsongp4 = loadSound(songdatapt6.items[4].track.preview_url);
  sunsongp5 = loadSound(songdatapt6.items[5].track.preview_url);
  sunsongp6 = loadSound(songdatapt6.items[6].track.preview_url);
  sunsongp7 = loadSound(songdatapt6.items[7].track.preview_url);
  sunsongp8 = loadSound(songdatapt6.items[8].track.preview_url);
  sunsongp9 = loadSound(songdatapt6.items[9].track.preview_url);
  sunsongp10 = loadSound(songdatapt6.items[10].track.preview_url);
  sunsongp11 = loadSound(songdatapt6.items[11].track.preview_url);
  sunsongp12 = loadSound(songdatapt6.items[12].track.preview_url);
  sunsongp13 = loadSound(songdatapt6.items[13].track.preview_url);
  sunsongp14 = loadSound(songdatapt6.items[14].track.preview_url);

  m2songp0 = loadSound(songdatapt7.items[0].track.preview_url);
  m2songp1 = loadSound(songdatapt7.items[1].track.preview_url);
  m2songp2 = loadSound(songdatapt7.items[2].track.preview_url);
  m2songp3 = loadSound(songdatapt7.items[3].track.preview_url);
  m2songp4 = loadSound(songdatapt7.items[4].track.preview_url);
  m2songp5 = loadSound(songdatapt7.items[5].track.preview_url);
  m2songp6 = loadSound(songdatapt7.items[6].track.preview_url);
  m2songp7 = loadSound(songdatapt7.items[7].track.preview_url);
  m2songp8 = loadSound(songdatapt7.items[8].track.preview_url);
  m2songp9 = loadSound(songdatapt7.items[9].track.preview_url);
  m2songp10 = loadSound(songdatapt7.items[10].track.preview_url);
  m2songp11 = loadSound(songdatapt7.items[11].track.preview_url);
  m2songp12 = loadSound(songdatapt7.items[12].track.preview_url);
  m2songp13 = loadSound(songdatapt7.items[13].track.preview_url);
  m2songp14 = loadSound(songdatapt7.items[14].track.preview_url);

  createCanvas(1450, 800);

  c1 = color(226, 165, 221);
  c2 = color(127, 190, 209);

  //noLoop();
}

function draw() {
  textFont(font);
  textSize(18);

  noCursor();

  c1 = color(mouseX - 226, 165, mouseX + 221);
  c2 = color(127, 190, 209);

  setGradient(0, 0, width, height, c2, c1, gradspan);
  
  noStroke();
  fill(mouseX + 150, 200, mouseX - 100);
  
  stroke(mouseX + 150, 200, mouseX - 100);
  line(mouseX - 10, 1450, mouseX - 9, 0);
  
	noStroke();
  
  if(mouseX < 200) {
   text("12 - 03 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 200 && mouseX < 400) {
   text("12 - 05 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 400 && mouseX < 600) {
   text("12 - 06 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 600 && mouseX < 800) {
   text("12 - 07 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 800 && mouseX < 1000) {
   text("12 - 08 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 1000 && mouseX < 1200) {
   text("12 - 09 - 2018", mouseX - 110, 400); 
  }
  if(mouseX > 1200 && mouseX < 1400) {
   text("12 - 10 - 2018", mouseX - 110, 400); 
  }
  
  if (mouseX < 200 && mouseY > 100 && mouseY < 200) {
    var monsongs0 = songdata.items[0].track.name;
    text(monsongs0, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 50 && mouseY < 100) {
    var monsongs1 = songdata.items[1].track.name;
    text(monsongs1, mouseX, mouseY);

  }

  if (mouseX < 200 && mouseY > 200 && mouseY < 300) {
    var monsongs2 = songdata.items[2].track.name;
    text(monsongs2, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 300 && mouseY < 400) {
    var monsongs3 = songdata.items[3].track.name;
    text(monsongs3, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 400 && mouseY < 500) {
    var monsongs4 = songdata.items[4].track.name;
    text(monsongs4, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 500 && mouseY < 600) {
    var monsongs5 = songdata.items[5].track.name;
    text(monsongs5, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 600 && mouseY < 700) {
    var monsongs6 = songdata.items[6].track.name;
    text(monsongs6, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY > 700 && mouseY < 800) {
    var monsongs7 = songdata.items[7].track.name;
    text(monsongs7, mouseX, mouseY);
  }

  if (mouseX < 200 && mouseY < 50) {
    var monsongs8 = songdata.items[8].track.name;
    text(monsongs8, mouseX, mouseY);
  }

  if (mouseX > 200 && mouseX < 400 && mouseY < 50) {
    var wedsongs0 = songdatapt2.items[0].track.name;
    text(wedsongs0, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 50 && mouseY < 100) {
    var wedsongs1 = songdatapt2.items[1].track.name;
    text(wedsongs1, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 100 && mouseY < 150) {
    var wedsongs2 = songdatapt2.items[2].track.name;
    text(wedsongs2, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 150 && mouseY < 200) {
    var wedsongs3 = songdatapt2.items[3].track.name;
    text(wedsongs3, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 250) {
    var wedsongs4 = songdatapt2.items[4].track.name;
    text(wedsongs4, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 250 && mouseY < 300) {
    var wedsongs5 = songdatapt2.items[5].track.name;
    text(wedsongs5, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 300 && mouseY < 350) {
    var wedsongs6 = songdatapt2.items[6].track.name;
    text(wedsongs6, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 350 && mouseY < 400) {
    var wedsongs7 = songdatapt2.items[7].track.name;
    text(wedsongs7, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 450) {
    var wedsongs8 = songdatapt2.items[8].track.name;
    text(wedsongs8, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 450 && mouseY < 500) {
    var wedsongs9 = songdatapt2.items[9].track.name;
    text(wedsongs9, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 500 && mouseY < 550) {
    var wedsongs10 = songdatapt2.items[10].track.name;
    text(wedsongs10, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 550 && mouseY < 600) {
    var wedsongs11 = songdatapt2.items[11].track.name;
    text(wedsongs11, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 600 && mouseY < 650) {
    var wedsongs12 = songdatapt2.items[12].track.name;
    text(wedsongs12, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 650 && mouseY < 700) {
    var wedsongs13 = songdatapt2.items[13].track.name;
    text(wedsongs13, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 700 && mouseY < 750) {
    var wedsongs14 = songdatapt2.items[14].track.name;
    text(wedsongs14, mouseX, mouseY);
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 750 && mouseY < 800) {
    var wedsongs15 = songdatapt2.items[15].track.name;
    text(wedsongs15, mouseX, mouseY);
  }

  if (mouseX > 400 && mouseX < 600 && mouseY < 50) {
    var wedsongs16 = songdatapt2.items[16].track.name;
    text(wedsongs16, mouseX, mouseY);
  }

  if (mouseX > 400 && mouseX < 600 && mouseY > 50 && mouseY < 100) {
    var thurssongs0 = songdatapt3.items[0].track.name;

    text(thurssongs0, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 100 && mouseY < 150) {
    var thurssongs1 = songdatapt3.items[1].track.name;

    text(thurssongs1, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 150 && mouseY < 200) {
    var thurssongs2 = songdatapt3.items[2].track.name;

    text(thurssongs2, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 250) {
    var thurssongs3 = songdatapt3.items[3].track.name;

    text(thurssongs3, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 250 && mouseY < 300) {
    var thurssongs4 = songdatapt3.items[4].track.name;

    text(thurssongs4, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 300 && mouseY < 350) {
    var thurssongs5 = songdatapt3.items[5].track.name;

    text(thurssongs5, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 350 && mouseY < 400) {
    var thurssongs6 = songdatapt3.items[6].track.name;

    text(thurssongs6, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
    var thurssongs7 = songdatapt3.items[7].track.name;

    text(thurssongs7, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 450 && mouseY < 500) {
    var thurssongs8 = songdatapt3.items[8].track.name;

    text(thurssongs8, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 500 && mouseY < 550) {
    var thurssongs9 = songdatapt3.items[9].track.name;

    text(thurssongs9, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 550 && mouseY < 600) {
    var thurssongs10 = songdatapt3.items[10].track.name;

    text(thurssongs10, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 600 && mouseY < 650) {
    var thurssongs11 = songdatapt3.items[11].track.name;

    text(thurssongs11, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 650 && mouseY < 700) {
    var thurssongs12 = songdatapt3.items[12].track.name;

    text(thurssongs12, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 700 && mouseY < 750) {
    var thurssongs13 = songdatapt3.items[13].track.name;

    text(thurssongs13, mouseX, mouseY);
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 750 && mouseY < 800) {
    var thurssongs14 = songdatapt3.items[14].track.name;

    text(thurssongs14, mouseX, mouseY);
  }

  if (mouseX > 600 && mouseX < 800 && mouseY < 50) {
    var frisongs0 = songdatapt4.items[0].track.name;
    text(frisongs0, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 50 && mouseY < 100) {
    var frisongs1 = songdatapt4.items[1].track.name;
    text(frisongs1, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 100 && mouseY < 150) {
    var frisongs2 = songdatapt4.items[2].track.name;
    text(frisongs2, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 150 && mouseY < 200) {
    var frisongs3 = songdatapt4.items[3].track.name;
    text(frisongs3, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 200 && mouseY < 250) {
    var frisongs4 = songdatapt4.items[4].track.name;
    text(frisongs4, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 250 && mouseY < 300) {
    var frisongs5 = songdatapt4.items[5].track.name;
    text(frisongs5, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 300 && mouseY < 350) {
    var frisongs6 = songdatapt4.items[6].track.name;
    text(frisongs6, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 350 && mouseY < 400) {
    var frisongs7 = songdatapt4.items[7].track.name;
    text(frisongs7, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 400 && mouseY < 450) {
    var frisongs8 = songdatapt4.items[8].track.name;
    text(frisongs8, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
    var frisongs9 = songdatapt4.items[9].track.name;
    text(frisongs9, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 500 && mouseY < 550) {
    var frisongs10 = songdatapt4.items[10].track.name;
    text(frisongs10, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 550 && mouseY < 600) {
    var frisongs11 = songdatapt4.items[11].track.name;
    text(frisongs11, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 600 && mouseY < 650) {
    var frisongs12 = songdatapt4.items[12].track.name;
    text(frisongs12, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 650 && mouseY < 700) {
    var frisongs13 = songdatapt4.items[13].track.name;
    text(frisongs13, mouseX, mouseY);
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 700 && mouseY < 750) {
    var frisongs14 = songdatapt4.items[14].track.name;
    text(frisongs14, mouseX, mouseY);
  }
  // 
  if (mouseX > 800 && mouseX < 1000 && mouseY < 50) {
    var satsongs0 = songdatapt5.items[0].track.name;
    text(satsongs0, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 50 && mouseY < 100) {
    var satsongs1 = songdatapt5.items[1].track.name;
    text(satsongs1, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 100 && mouseY < 150) {
    var satsongs2 = songdatapt5.items[2].track.name;
    text(satsongs2, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 150 && mouseY < 200) {
    var satsongs3 = songdatapt5.items[3].track.name;
    text(satsongs3, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 250) {
    var satsongs4 = songdatapt5.items[4].track.name;
    text(satsongs4, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 250 && mouseY < 300) {
    var satsongs5 = songdatapt5.items[5].track.name;
    text(satsongs5, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 300 && mouseY < 350) {
    var satsongs6 = songdatapt5.items[6].track.name;
    text(satsongs6, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 350 && mouseY < 400) {
    var satsongs7 = songdatapt5.items[7].track.name;
    text(satsongs7, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 400 && mouseY < 450) {
    var satsongs8 = songdatapt5.items[8].track.name;
    text(satsongs8, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 450 && mouseY < 500) {
    var satsongs9 = songdatapt5.items[9].track.name;
    text(satsongs9, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 500 && mouseY < 550) {
    var satsongs10 = songdatapt5.items[10].track.name;
    text(satsongs10, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 550 && mouseY < 600) {
    var satsongs11 = songdatapt5.items[11].track.name;
    text(satsongs11, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 600 && mouseY < 650) {
    var satsongs12 = songdatapt5.items[12].track.name;
    text(satsongs12, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 650 && mouseY < 700) {
    var satsongs13 = songdatapt5.items[13].track.name;
    text(satsongs13, mouseX, mouseY);
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 700 && mouseY < 750) {
    var satsongs14 = songdatapt5.items[14].track.name;
    text(satsongs14, mouseX, mouseY);
  }
  //
  if (mouseX > 1000 && mouseX < 1200 && mouseY < 50) {
    var sunsongs0 = songdatapt6.items[0].track.name;
    text(sunsongs0, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 50 && mouseY < 100) {
    var sunsongs1 = songdatapt6.items[1].track.name;
    text(sunsongs1, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 100 && mouseY < 150) {
    var sunsongs2 = songdatapt6.items[2].track.name;
    text(sunsongs2, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 150 && mouseY < 200) {
    var sunsongs3 = songdatapt6.items[3].track.name;
    text(sunsongs3, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 200 && mouseY < 250) {
    var sunsongs4 = songdatapt6.items[4].track.name;
    text(sunsongs4, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 250 && mouseY < 300) {
    var sunsongs5 = songdatapt6.items[5].track.name;
    text(sunsongs5, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 300 && mouseY < 350) {
    var sunsongs6 = songdatapt6.items[6].track.name;
    text(sunsongs6, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 350 && mouseY < 400) {
    var sunsongs7 = songdatapt6.items[7].track.name;
    text(sunsongs7, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 400 && mouseY < 450) {
    var sunsongs8 = songdatapt6.items[8].track.name;
    text(sunsongs8, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 450 && mouseY < 500) {
    var sunsongs9 = songdatapt6.items[9].track.name;
    text(sunsongs9, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
    var sunsongs10 = songdatapt6.items[10].track.name;
    text(sunsongs10, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 550 && mouseY < 600) {
    var sunsongs11 = songdatapt6.items[11].track.name;
    text(sunsongs11, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 600 && mouseY < 650) {
    var sunsongs12 = songdatapt6.items[12].track.name;
    text(sunsongs12, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 650 && mouseY < 700) {
    var sunsongs13 = songdatapt6.items[13].track.name;
    text(sunsongs13, mouseX, mouseY);
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 700 && mouseY < 750) {
    var sunsongs14 = songdatapt6.items[14].track.name;
    text(sunsongs14, mouseX, mouseY);
  }
  //
  if (mouseX > 1200 && mouseX < 1400 && mouseY < 50) {
    var m2songs0 = songdatapt7.items[0].track.name;
    text(m2songs0, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 50 && mouseY < 100) {
    var m2songs1 = songdatapt7.items[1].track.name;
    text(m2songs1, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 100 && mouseY < 150) {
    var m2songs2 = songdatapt7.items[2].track.name;
    text(m2songs2, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 150 && mouseY < 200) {
    var m2songs3 = songdatapt7.items[3].track.name;
    text(m2songs3, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 200 && mouseY < 250) {
    var m2songs4 = songdatapt7.items[4].track.name;
    text(m2songs4, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 250 && mouseY < 300) {
    var m2songs5 = songdatapt7.items[5].track.name;
    text(m2songs5, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 300 && mouseY < 350) {
    var m2songs6 = songdatapt7.items[6].track.name;
    text(m2songs6, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 350 && mouseY < 400) {
    var m2songs7 = songdatapt7.items[7].track.name;
    text(m2songs7, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 400 && mouseY < 450) {
    var m2songs8 = songdatapt7.items[8].track.name;
    text(m2songs8, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 450 && mouseY < 500) {
    var m2songs9 = songdatapt7.items[9].track.name;
    text(m2songs9, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 500 && mouseY < 550) {
    var m2songs10 = songdatapt7.items[10].track.name;
    text(m2songs10, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 550 && mouseY < 600) {
    var m2songs11 = songdatapt7.items[11].track.name;
    text(m2songs11, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 600 && mouseY < 650) {
    var m2songs12 = songdatapt7.items[12].track.name;
    text(m2songs12, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 650 && mouseY < 700) {
    var m2songs13 = songdatapt7.items[13].track.name;
    text(m2songs13, mouseX, mouseY);
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 700 && mouseY < 750) {
    var m2songs14 = songdatapt7.items[14].track.name;
    text(m2songs14, mouseX, mouseY);
  }

}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == gradspan) {
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function mousePressed() {
  if (mouseX < 200 && mouseY > 100 && mouseY < 200) {
    msongp0.loop();
  } else {
    msongp0.stop();
  }

  if (mouseX < 200 && mouseY > 50 && mouseY < 100) {
    msongp1.loop();
  } else {
    msongp1.stop();
  }


  if (mouseX < 200 && mouseY > 200 && mouseY < 300) {
    msongp2.loop();
  } else {
    msongp2.stop();
  }

  if (mouseX < 200 && mouseY > 300 && mouseY < 400) {
    msongp3.loop();
  } else {
    msongp3.stop();
  }

  if (mouseX < 200 && mouseY > 400 && mouseY < 500) {
    msongp4.loop();
  } else {
    msongp4.stop();
  }

  if (mouseX < 200 && mouseY > 500 && mouseY < 600) {
    msongp5.loop();
  } else {
    msongp5.stop();
  }

  if (mouseX < 200 && mouseY > 600 && mouseY < 700) {
    msongp6.loop();
  } else {
    msongp6.stop();
  }

  if (mouseX < 200 && mouseY > 700 && mouseY < 800) {
    msongp7.loop();
  } else {
    msongp7.stop();
  }

  if (mouseX < 200 && mouseY < 50) {
    msongp8.loop();
  } else {
    msongp8.stop();
  }

  if (mouseX > 200 && mouseX < 400 && mouseY < 50) {
    wsongp0.loop();
  } else {
    wsongp0.stop();
  }

  if (mouseX > 200 && mouseX < 400 && mouseY > 50 && mouseY < 100) {
    wsongp1.loop();
  } else {
    wsongp1.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 100 && mouseY < 150) {
    wsongp2.loop();
  } else {
    wsongp2.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 150 && mouseY < 200) {
    wsongp3.loop();
  } else {
    wsongp3.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 250) {
    wsongp4.loop();
  } else {
    wsongp4.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 250 && mouseY < 300) {
    wsongp5.loop();
  } else {
    wsongp5.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 300 && mouseY < 350) {
    wsongp6.loop();
  } else {
    wsongp6.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 350 && mouseY < 400) {
    wsongp7.loop();
  } else {
    wsongp7.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 450) {
    wsongp8.loop();
  } else {
    wsongp8.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 450 && mouseY < 500) {
    wsongp9.loop();
  } else {
    wsongp9.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 500 && mouseY < 550) {
    wsongp10.loop();
  } else {
    wsongp10.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 550 && mouseY < 600) {
    wsongp11.loop();
  } else {
    wsongp11.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 600 && mouseY < 650) {
    wsongp12.loop();
  } else {
    wsongp12.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 650 && mouseY < 700) {
    wsongp13.loop();
  } else {
    wsongp13.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 700 && mouseY < 750) {
    wsongp14.loop();
  } else {
    wsongp14.stop();
  }
  if (mouseX > 200 && mouseX < 400 && mouseY > 750 && mouseY < 800) {
    wsongp15.loop();
  } else {
    wsongp15.stop();
  }

  if (mouseX > 400 && mouseX < 600 && mouseY < 50) {
    wsongp16.loop();
  } else {
    wsongp16.stop();
  }

  if (mouseX > 400 && mouseX < 600 && mouseY > 50 && mouseY < 100) {
    tsongp0.loop();
  } else {
    tsongp0.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 100 && mouseY < 150) {
    tsongp1.loop();
  } else {
    tsongp1.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 150 && mouseY < 200) {
    tsongp2.loop();
  } else {
    tsongp2.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 250) {
    tsongp3.loop();
  } else {
    tsongp3.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 250 && mouseY < 300) {
    tsongp4.loop();
  } else {
    tsongp4.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 300 && mouseY < 350) {
    tsongp5.loop();
  } else {
    tsongp5.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 350 && mouseY < 400) {
    tsongp6.loop();
  } else {
    tsongp6.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
    tsongp7.loop();
  } else {
    tsongp7.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 450 && mouseY < 500) {
    tsongp8.loop();
  } else {
    tsongp8.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 500 && mouseY < 550) {
    tsongp9.loop();
  } else {
    tsongp9.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 550 && mouseY < 600) {
    tsongp10.loop();
  } else {
    tsongp10.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 600 && mouseY < 650) {
    tsongp11.loop();
  } else {
    tsongp11.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 650 && mouseY < 700) {
    tsongp12.loop();
  } else {
    tsongp12.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 700 && mouseY < 750) {
    tsongp13.loop();
  } else {
    tsongp13.stop();
  }
  if (mouseX > 400 && mouseX < 600 && mouseY > 750 && mouseY < 800) {
    tsongp14.loop();
  } else {
    tsongp14.stop();
  }

  if (mouseX > 600 && mouseX < 800 && mouseY < 50) {
    fsongp0.loop();
  } else {
    fsongp0.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 50 && mouseY < 100) {
    fsongp1.loop();
  } else {
    fsongp1.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 100 && mouseY < 150) {
    fsongp2.loop();
  } else {
    fsongp2.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 150 && mouseY < 200) {
    fsongp3.loop();
  } else {
    fsongp3.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 200 && mouseY < 250) {
    fsongp4.loop();
  } else {
    fsongp4.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 250 && mouseY < 300) {
    fsongp5.loop();
  } else {
    fsongp5.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 300 && mouseY < 350) {
    fsongp6.loop();
  } else {
    fsongp6.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 350 && mouseY < 400) {
    fsongp7.loop();
  } else {
    fsongp7.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 400 && mouseY < 450) {
    fsongp8.loop();
  } else {
    fsongp8.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
    fsongp9.loop();
  } else {
    fsongp9.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 500 && mouseY < 550) {
    fsongp10.loop();
  } else {
    fsongp10.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 550 && mouseY < 600) {
    fsongp11.loop();
  } else {
    fsongp11.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 600 && mouseY < 650) {
    fsongp12.loop();
  } else {
    fsongp12.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 650 && mouseY < 700) {
    fsongp13.loop();
  } else {
    fsongp13.stop();
  }
  if (mouseX > 600 && mouseX < 800 && mouseY > 700 && mouseY < 750) {
    fsongp14.loop();
  } else {
    fsongp14.stop();
  }

  if (mouseX > 800 && mouseX < 1000 && mouseY < 50) {
    ssongp0.loop();
  } else {
    ssongp0.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 50 && mouseY < 100) {
    ssongp1.loop();
  } else {
    ssongp1.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 100 && mouseY < 150) {
    ssongp2.loop();
  } else {
    ssongp2.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 150 && mouseY < 200) {
    ssongp3.loop();
  } else {
    ssongp3.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 250) {
    ssongp4.loop();
  } else {
    ssongp4.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 250 && mouseY < 300) {
    ssongp5.loop();
  } else {
    ssongp5.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 300 && mouseY < 350) {
    ssongp6.loop();
  } else {
    ssongp6.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 350 && mouseY < 400) {
    ssongp7.loop();
  } else {
    ssongp7.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 400 && mouseY < 450) {
    ssongp8.loop();
  } else {
    ssongp8.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 450 && mouseY < 500) {
    ssongp9.loop();
  } else {
    ssongp9.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 500 && mouseY < 550) {
    ssongp10.loop();
  } else {
    ssongp10.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 550 && mouseY < 600) {
    ssongp11.loop();
  } else {
    ssongp11.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 600 && mouseY < 650) {
    ssongp12.loop();
  } else {
    ssongp12.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 650 && mouseY < 700) {
    ssongp13.loop();
  } else {
    ssongp13.stop();
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 700 && mouseY < 850) {
    ssongp14.loop();
  } else {
    ssongp14.stop();
  }

  if (mouseX > 1000 && mouseX < 1200 && mouseY < 50) {
    sunsongp0.loop();
  } else {
    sunsongp0.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 50 && mouseY < 100) {
    sunsongp1.loop();
  } else {
    sunsongp1.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 100 && mouseY < 150) {
    sunsongp2.loop();
  } else {
    sunsongp2.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 150 && mouseY < 200) {
    sunsongp3.loop();
  } else {
    sunsongp3.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 200 && mouseY < 250) {
    sunsongp4.loop();
  } else {
    sunsongp4.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 250 && mouseY < 300) {
    sunsongp5.loop();
  } else {
    sunsongp5.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 300 && mouseY < 350) {
    sunsongp6.loop();
  } else {
    sunsongp6.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 350 && mouseY < 400) {
    sunsongp7.loop();
  } else {
    sunsongp7.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 400 && mouseY < 450) {
    sunsongp8.loop();
  } else {
    sunsongp8.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 450 && mouseY < 500) {
    sunsongp9.loop();
  } else {
    sunsongp9.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
    sunsongp10.loop();
  } else {
    sunsongp10.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 550 && mouseY < 600) {
    sunsongp11.loop();
  } else {
    sunsongp11.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 600 && mouseY < 650) {
    sunsongp12.loop();
  } else {
    sunsongp12.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 650 && mouseY < 700) {
    sunsongp13.loop();
  } else {
    sunsongp13.stop();
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 700 && mouseY < 750) {
    sunsongp14.loop();
  } else {
    sunsongp14.stop();
  }

  if (mouseX > 1200 && mouseX < 1400 && mouseY < 50) {
    m2songp0.loop();
  } else {
    m2songp0.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 50 && mouseY < 100) {
    m2songp1.loop();
  } else {
    m2songp1.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 100 && mouseY < 150) {
    m2songp2.loop();
  } else {
    m2songp2.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 150 && mouseY < 200) {
    m2songp3.loop();
  } else {
    m2songp3.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 200 && mouseY < 250) {
    m2songp4.loop();
  } else {
    m2songp4.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 250 && mouseY < 300) {
    m2songp5.loop();
  } else {
    m2songp5.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 300 && mouseY < 350) {
    m2songp6.loop();
  } else {
    m2songp6.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 350 && mouseY < 400) {
    m2songp7.loop();
  } else {
    m2songp7.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 400 && mouseY < 450) {
    m2songp8.loop();
  } else {
    m2songp8.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 450 && mouseY < 500) {
    m2songp9.loop();
  } else {
    m2songp9.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 500 && mouseY < 550) {
    m2songp10.loop();
  } else {
    m2songp10.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 550 && mouseY < 600) {
    m2songp11.loop();
  } else {
    m2songp11.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 600 && mouseY < 650) {
    m2songp12.loop();
  } else {
    m2songp12.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 650 && mouseY < 700) {
    m2songp13.loop();
  } else {
    m2songp13.stop();
  }
  if (mouseX > 1200 && mouseX < 1400 && mouseY > 700 && mouseY < 750) {
    m2songp14.loop();
  } else {
    m2songp14.stop();
  }



}