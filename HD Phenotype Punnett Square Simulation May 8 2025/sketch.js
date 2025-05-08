let dadGeneDom = "H"
let dadGeneRec = "h"
let momGeneDom = "h"
let momGeneRec = "h"
let b1
let b2
let b3
let b4
let chance
let numHD =0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //making it dominant
  if(momGeneRec == "H"){
    momGeneDom = "H"
  }
  if(dadGeneRec == "H"){
    dadGeneDom = "H"
  }
  
  background(100, 125, 155)
  fill(305, 255, 255)
  //top left
  rect(125,75,125,125)
  //top right
  rect(275,75, 125, 125)
  //bottom left
  rect(125, 225, 125, 125)
  //bottom right
  rect(275, 225, 125, 125)
  textSize(25)
  text("Dad:", 240, 25)
  text("Mom:", 5, 125)
  textSize(10)
  text("Dominant Allele: ", 100, 70)
  text("Dominant Allele: ", 10, 150)
  text("Recessive Allele: ", 250, 70)
  text("Recessive Allele: ", 10, 300)
  textSize(25)
  text(dadGeneDom, 175, 70)
  text(dadGeneRec, 335, 70)
  text(momGeneDom, 100, 150)
  text(momGeneRec, 100, 300)
  
  //setting b1
  if(momGeneDom == "h"){
  b1= dadGeneDom +  momGeneDom
  } else(b1=momGeneDom+dadGeneDom)
  fill(0)
  text(b1,175, 150)
  
  //setting b3
   if(momGeneRec == "h"){
  b3= dadGeneDom +  momGeneRec
  } else(b3=momGeneRec+dadGeneDom)
  
  //setting b2 order
   if(momGeneDom == "h"){
  b2= dadGeneRec + momGeneDom
  } else(b2=momGeneDom+dadGeneRec)
  
  //setting b4 order
   if(momGeneRec == "h"){
  b4= dadGeneRec +  momGeneRec
  } else(b4=momGeneRec+dadGeneRec)
  
  //displaying phenotypes
  text(b1,175, 150)
  text(b2, 325, 150)
  text(b3, 175, 300)
  text(b4, 325, 300)
  
  //percentages
  if(b1 == "Hh"|| b1=="HH"){
    numHD+=1
  }
  if(b2=="Hh"|| b2 == "HH"){
    numHD+=1
  }
  if(b3=="Hh"|| b3 == "HH"){
    numHD+=1
  }
  if(b4=="Hh"|| b4 == "HH"){
    numHD+=1
  }
  chance= (numHD/4)*100
  textSize(15)
  text("Chance of offspring inheiriting Huntington's disease: "+ chance +"%", 10, 375)
  numHD = 0
  
}
  function mouseClicked(){
    print(mouseX+", "+mouseY)
    if(mouseX < 125 && mouseX > 90 && mouseY > 120 && mouseY < 160){
      if(momGeneDom=="h"){
        momGeneDom = "H"
      }else(momGeneDom = "h")
    }
    if(mouseX < 116 && mouseX > 95 && mouseY > 279 && mouseY < 305){
      if(momGeneRec=="h"){
        momGeneRec = "H"
      }else(momGeneRec = "h")
    }
    if(mouseX < 199 && mouseX > 168 && mouseY > 45 && mouseY < 71){
      if(dadGeneDom=="h"){
        dadGeneDom = "H"
      }else(dadGeneDom = "h")
    }
    if(mouseX < 356 && mouseX > 325 && mouseY > 41 && mouseY < 72){
      if(dadGeneRec=="h"){
        dadGeneRec = "H"
      }else(dadGeneRec = "h")
    }
}