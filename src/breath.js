function godzillaLoad(){
  //Right Foot
  var rightFoot = new Cube();
  rightFoot.color=[0.2,0.2,0.2,1.0];
  rightFoot.matrix.translate(0.20,-0.95,-0.50);
  rightFoot.matrix.rotate(g_bodyAngle2,0,1,0);
  var rightFootCoord = new Matrix4(rightFoot.matrix);
  rightFoot.matrix.translate(-0.01,0,0);
  rightFoot.matrix.scale(0.43,0.2,0.5);
  if(g_normalOn){
    rightFoot.textureNum=-4;
  }
  rightFoot.normalMatrix.setInverseOf(rightFoot.matrix).transpose();
  rightFoot.render();


  //Left Foot
  var leftFoot = new Cube();
  leftFoot.color=[0.2,0.2,0.2,1.0];

  leftFoot.matrix.translate(-0.60,-0.95,-0.5);
  leftFoot.matrix.rotate(g_bodyAngle2,0,1,0);
  var leftFootCoord = new Matrix4(leftFoot.matrix);
  leftFoot.matrix.translate(-0.01,0,0); 

  leftFoot.matrix.scale(0.43,0.2,0.5);
  if(g_normalOn){
    leftFoot.textureNum=-4;
  }
  leftFoot.normalMatrix.setInverseOf(leftFoot.matrix).transpose();

  leftFoot.render();


  //BottmRightLeg
  var bRightleg = new Cube();
  bRightleg.color=[0.2,0.2,0.2,1.0];

  bRightleg.matrix = rightFootCoord;
  bRightleg.matrix.translate(0.0,0.2,0.1);
  bRightleg.matrix.rotate(g_legAngle,1,0,0);
  if(g_animation==true&&poke==true){
    bRightleg.matrix.rotate(-Math.abs(30*Math.sin(g_seconds)),1,0,0);
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);

  }
  //bRightleg.matrix.rotate(g_bodyAngle2,0,1,0);
  var rightLegCoord = new Matrix4(bRightleg.matrix);
  bRightleg.matrix.scale(0.4,0.6,0.45);
  bRightleg.matrix.translate(0,-0.28,0);
  if(g_normalOn){
    bRightleg.textureNum=-4;
  }
  bRightleg.normalMatrix.setInverseOf(bRightleg.matrix).transpose();
  bRightleg.render();

  //BottmLeftLeg
  var bLeftleg = new Cube();
  bLeftleg.color=[0.2,0.2,0.2,1.0];

  bLeftleg.matrix = leftFootCoord;
  bLeftleg.matrix.translate(0.0,0.2,0.1);
  bLeftleg.matrix.rotate(g_legAngle,1,0,0);
  if(g_animation==true&&poke==true){
    bLeftleg.matrix.rotate(-Math.abs(30*Math.sin(g_seconds)),1,0,0);
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);

  }
  var leftLegCoord = new Matrix4(bLeftleg.matrix);
  bLeftleg.matrix.scale(0.4,0.6,0.45);
  bLeftleg.matrix.translate(0,-0.28,0);
  if(g_normalOn){
    bLeftleg.textureNum=-4;
  }
  bLeftleg.normalMatrix.setInverseOf(bLeftleg.matrix).transpose();

  bLeftleg.render();

  //TopRightLeg
  var tRightleg = new Cube();
  tRightleg.color=[0.2,0.2,0.2,1.0];
  tRightleg.matrix = rightLegCoord;
  tRightleg.matrix.translate(0,0.60,-0.01);
  tRightleg.matrix.rotate(-g_legAngle*1.5,1,0,0);
  if(g_animation==true&&poke==true){
    tRightleg.matrix.rotate(Math.abs(60*Math.sin(g_seconds)),1,0,0);
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);

  }
  //tRightleg.matrix.rotate(g_bodyAngle2,0,1,0);

  tRightleg.matrix.scale(0.45,0.7,0.551);
  tRightleg.matrix.translate(-0.05,-0.25,0);
  if(g_normalOn){
    tRightleg.textureNum=-4;
  }
  tRightleg.normalMatrix.setInverseOf(tRightleg.matrix).transpose();
  tRightleg.render();

  //TopLeftLeg
  var tLeftleg = new Cube();
  tLeftleg.color=[0.2,0.2,0.2,1.0];
  tLeftleg.matrix = leftLegCoord;
  tLeftleg.matrix.translate(0,0.60,-0.01);
  tLeftleg.matrix.rotate(-g_legAngle*1.5,1,0,0);
  if(g_animation==true&&poke==true){
    tLeftleg.matrix.rotate(Math.abs(60*Math.sin(g_seconds)),1,0,0);
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);

  }
  //tLeftleg.matrix.rotate(g_bodyAngle2,0,1,0);

  var TLegCoord = new Matrix4(tLeftleg.matrix);
  tLeftleg.matrix.scale(0.45,0.7,0.551);
  tLeftleg.matrix.translate(-0.05,-0.25,0);
  if(g_normalOn){
    tLeftleg.textureNum=-4;
  }
  tLeftleg.normalMatrix.setInverseOf(tLeftleg.matrix).transpose();

  tLeftleg.render();


  
  //Body
  var body = new Cube();
  body.color=[0.2,0.2,0.2,1.0];
  TLegCoord.translate(0.7,0,0.20);
  body.matrix=TLegCoord;
  //body.matrix.translate(-0.65,0.2,0.1);
  body.matrix.rotate(g_bodyAngle,1,0,0);
  //body.matrix.rotate(g_bodyAngle2,0,1,0);
  body.matrix.translate(-0.65,0.2,0.1);
  if(g_animation==true){
    if(g_seconds>15.5){
      body.matrix.rotate(-Math.abs(45*Math.sin(g_seconds/5)),1,0,0);

    }
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);

  }
  var bodyCoor = new Matrix4(body.matrix);
  var bodyCoorChest = new Matrix4(body.matrix);
  var bodyCoorNeck = new Matrix4(body.matrix);
  var bodyCoorArmRight = new Matrix4(body.matrix);
  var bodyCoorArmLeft = new Matrix4(body.matrix);
  body.matrix.translate(0,0,-0.20);
  body.matrix.scale(1.1,1.7,0.5);
  if(g_normalOn){
    body.textureNum=-4;
  }
  body.normalMatrix.setInverseOf(body.matrix).transpose();

  body.render();

  //ArmRight
  var armRight = new Cube();
  armRight.color=[0.2,0.2,0.2,1.0];
  armRight.matrix = bodyCoorArmRight;
  armRight.matrix.translate(1,0.90,0.1);
  if(g_animation==true&&poke==true){
    armRight.matrix.rotate(45*Math.sin(g_seconds/0.1),1,0,0);
  }
  else if(g_animation==true){
    //armRight.matrix.rotate(45*Math.sin(g_seconds/1),0,1,0);
    armRight.matrix.rotate(45*Math.sin(g_seconds/1),1,0,0);

  }
  else{
    armRight.matrix.rotate(-g_rightArmAngle,1,0,0);

  }
  armRight.matrix.scale(0.4,0.4,-1.2);
  if(g_normalOn){
    armRight.textureNum=-4;
  }
  armRight.normalMatrix.setInverseOf(armRight.matrix).transpose();

  armRight.render();

  //ArmLeft
  var armLeft = new Cube();
  armLeft.color=[0.2,0.2,0.2,1.0];

  armLeft.matrix = bodyCoorArmLeft;
  armLeft.matrix.translate(-0.4,0.90,0.1);
  if(g_animation==true&&poke==true){
    armLeft.matrix.rotate(45*Math.sin(g_seconds/0.1),1,0,0);
  }
  else if(g_animation==true){
    //armLeft.matrix.rotate(-45*Math.sin(g_seconds/1),0,1,0);
    armLeft.matrix.rotate(-45*Math.sin(g_seconds/1.2),1,0,0);

  }
  else{
    armLeft.matrix.rotate(-g_rightArmAngle,1,0,0);

  }
  armLeft.matrix.scale(0.4,0.4,-1.2);
  if(g_normalOn){
    armLeft.textureNum=-4;
  }
  armLeft.normalMatrix.setInverseOf(armLeft.matrix).transpose();

  armLeft.render();



  //Chest
  var chest = new Cube();
  chest.color=[0.2,0.2,0.2,1.0];
  chest.matrix = bodyCoorChest;
  chest.matrix.translate(0.01,0.25,-0.25);
  var chestCoord = new Matrix4(chest.matrix);
  chest.matrix.scale(1,1.4,0.2);
  if(g_normalOn){
    chest.textureNum=-4;
  }
  chest.normalMatrix.setInverseOf(chest.matrix).transpose();

  chest.render();

  //Peck
  var peck = new Cube();
  peck.color=[0.2,0.2,0.2,1.0];
  peck.textureNum=-2;
  peck.matrix = chestCoord;
  peck.matrix.translate(0.15,0.50,-0.05);
  peck.matrix.scale(0.8,0.8,0.1);
  if(g_normalOn){
    peck.textureNum=-4;
  }
  peck.normalMatrix.setInverseOf(peck.matrix).transpose();
  peck.render();

  //Neck
  var neck = new Cube();
  neck.color=[0.2,0.2,0.2,1.0];
  neck.matrix = bodyCoorNeck;
  neck.matrix.translate(0.25,1.6,-0.26);
  var neckCoord = new Matrix4(neck.matrix);
  neck.matrix.scale(0.6,0.17,0.5);
  if(g_normalOn){
    neck.textureNum=-4;
  }
  neck.normalMatrix.setInverseOf(neck.matrix).transpose();
  neck.render();

  //Head
  var head = new Cube();
  head.color=[0.2,0.2,0.2,1.0];
  neckCoord.translate(0.5,0,0.2);
  head.matrix = neckCoord;
  //var testy =neckCoord;
  //head.matrix.translate(-0.10,0.15,-0.05);
  //head.matrix.rotate(g_headAngle,0,1,0);
  head.matrix.rotate(-10,1,0,0);

  if(g_animation==true){
    if(g_seconds>0&&g_seconds<12.6){
     head.matrix.rotate((35*Math.sin(g_seconds/1)),0,1,0);
    }
    else if(g_seconds>14&&g_seconds<17.5){
      
      head.matrix.rotate((-45*Math.sin(g_seconds/4))-10,1,0,0);

    }
    else if(g_seconds>17.5){

    
      
      head.matrix.rotate(35,1,0,0);

    }
  else{
    head.matrix.rotate(g_headAngle,1,0,0);

    }
  }
  head.matrix.translate(-0.6,0.15,-0.15);

  var headCoordTop = new Matrix4(head.matrix);
  var headCoordBottom = new Matrix4(head.matrix);
  var headCoordEyeL = new Matrix4(head.matrix);
  var headCoordEyeR = new Matrix4(head.matrix);

  var BreathCoord1 = new Matrix4(head.matrix);
  

  head.matrix.scale(0.8,0.75,0.6);
  if(g_normalOn){
    head.textureNum=-4;
  }
  head.normalMatrix.setInverseOf(head.matrix).transpose();
  head.render();

  

  //MouthTop
  var mouthTop = new Cube();
  mouthTop.color=[0.22,0.2,0.2,1.0];
  mouthTop.matrix = headCoordTop;
  mouthTop.matrix.translate(0.10,0.30,-0.4);
  var mouthTopCoord = new Matrix4(mouthTop.matrix);
  var mouthTopCoordTwo = new Matrix4(mouthTop.matrix);
  var mouthTopCoordThree = new Matrix4(mouthTop.matrix);
  var mouthTopCoordFour = new Matrix4(mouthTop.matrix);
  mouthTop.matrix.scale(0.6,0.3,0.45);
  if(g_normalOn){
    mouthTop.textureNum=-4;
  }
  mouthTop.normalMatrix.setInverseOf(mouthTop.matrix).transpose();

  mouthTop.render();

  //ToothOne
  var toothOne = new Cube();
  toothOne.color=[1,1,1,1.0];
  toothOne.matrix = mouthTopCoord;
  toothOne.matrix.translate(0.05,-0.05,0.05);
  toothOne.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothOne.textureNum=-4;
  }
  toothOne.normalMatrix.setInverseOf(toothOne.matrix).transpose();

  toothOne.render();

  //ToothTwo
  var toothTwo = new Cube();
  toothTwo.color=[1,1,1,1.0];
  toothTwo.matrix = mouthTopCoordTwo;
  toothTwo.matrix.translate(0.05,-0.05,0.2);
  toothTwo.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothTwo.textureNum=-4;
  }
  toothTwo.normalMatrix.setInverseOf(toothTwo.matrix).transpose();
  toothTwo.render();

  //ToothThree
  var toothThree = new Cube();
  toothThree.color=[1,1,1,1.0];
  toothThree.matrix = mouthTopCoordThree;
  toothThree.matrix.translate(0.45,-0.05,0.05);
  toothThree.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothThree.textureNum=-4;
  }
  toothThree.normalMatrix.setInverseOf(toothThree.matrix).transpose();
  toothThree.render();

  //ToothFour
  var toothFour = new Cube();
  toothFour.color=[1,1,1,1.0];
  toothFour.matrix = mouthTopCoordFour;
  toothFour.matrix.translate(0.45,-0.05,0.2);
  toothFour.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothFour.textureNum=-4;
  }
  toothFour.normalMatrix.setInverseOf(toothFour.matrix).transpose();
  toothFour.render();



  //MouthBottom
  var mouthBottom = new Cube();
  mouthBottom.color=[0.21,0.2,0.2,1.0];
  headCoordBottom.translate(0,0.2,0.35);
  mouthBottom.matrix = headCoordBottom;
  mouthBottom.matrix.translate(0.09,0.1,-0.15);
  mouthBottom.matrix.rotate(180,1,0,0);

  if(g_animation==true&&poke==true){
    mouthBottom.matrix.rotate(-Math.abs(30*Math.sin(g_seconds/0.1)), 1, 0, 0);

  }
  else if(g_animation==true){
    
    if(g_seconds<6.1){
      mouthBottom.matrix.rotate(-Math.abs(30*Math.sin(g_seconds/2)), 1, 0, 0);
    }
    else if(g_seconds>19&&g_seconds<22){
      mouthBottom.matrix.rotate(-Math.abs(45*Math.sin(g_seconds/2)), 1, 0, 0);
    }
    else if(g_seconds>22){
      mouthBottom.matrix.rotate(-45,1,0,0);
    }
    
  }
  else{
    mouthBottom.matrix.rotate(g_mouthAngle,1,0,0);

  }
  mouthBottom.matrix.rotate(g_mouthAngle,1,0,0);
  var mouthBottomCoord = new Matrix4(mouthBottom.matrix);
  var mouthBottomCoordTwo = new Matrix4(mouthBottom.matrix);
  var mouthBottomCoordThree = new Matrix4(mouthBottom.matrix);
  var mouthBottomCoordFour = new Matrix4(mouthBottom.matrix);
  var mouthBottomCoordFive = new Matrix4(mouthBottom.matrix);
  mouthBottom.matrix.scale(0.6,0.28,0.65);
  if(g_normalOn){
    mouthBottom.textureNum=-4;
  }
  mouthBottom.normalMatrix.setInverseOf(mouthBottom.matrix).transpose();
  mouthBottom.render();

  //ToothOne
  var toothOneBot = new Cube();
  toothOneBot.color=[1,1,1,1.0];
  toothOneBot.matrix = mouthBottomCoord;
  toothOneBot.matrix.translate(0.05,-0.05,0.3);
  toothOneBot.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothOneBot.textureNum=-4;
  }
  toothOneBot.normalMatrix.setInverseOf(toothOneBot.matrix).transpose();
  toothOneBot.render();

  //ToothTwo
  var toothTwoBot = new Cube();
  toothTwoBot.color=[1,1,1,1.0];
  toothTwoBot.matrix = mouthBottomCoordTwo;
  toothTwoBot.matrix.translate(0.05,-0.05,0.51);
  toothTwoBot.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothTwoBot.textureNum=-4;
  }
  toothTwoBot.normalMatrix.setInverseOf(toothTwoBot.matrix).transpose();

  toothTwoBot.render();

  //ToothThree
  var toothThreeBot = new Cube();
  toothThreeBot.color=[1,1,1,1.0];
  toothThreeBot.matrix = mouthBottomCoordThree;
  toothThreeBot.matrix.translate(0.45,-0.05,0.3);
  toothThreeBot.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothThreeBot.textureNum=-4;
  }
  toothThreeBot.normalMatrix.setInverseOf(toothThreeBot.matrix).transpose();
  toothThreeBot.render();

  //ToothFour
  var toothFourBot = new Cube();
  toothFourBot.color=[1,1,1,1.0];
  toothFourBot.matrix = mouthBottomCoordFour;
  toothFourBot.matrix.translate(0.45,-0.05,0.51);
  toothFourBot.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothFourBot.textureNum=-4;
  }
  toothFourBot.normalMatrix.setInverseOf(toothFourBot.matrix).transpose();
  toothFourBot.render();

  //ToothFive
  var toothFiveBot = new Cube();
  toothFiveBot.color=[1,1,1,1.0];
  toothFiveBot.matrix = mouthBottomCoordFive;
  toothFiveBot.matrix.translate(0.25,-0.05,0.49);
  toothFiveBot.matrix.scale(0.1,0.1,0.1);
  if(g_normalOn){
    toothFiveBot.textureNum=-4;
  }
  toothFiveBot.normalMatrix.setInverseOf(toothFiveBot.matrix).transpose();

  toothFiveBot.render();




  //EyeRight
  var eyeRight = new Cube();
  eyeRight.color=[1,1,1,1.0];
  eyeRight.matrix = headCoordEyeR;
  eyeRight.matrix.translate(0.80,0.50,0);
  eyeRight.matrix.scale(0.01,0.1,0.1);
  if (g_animation === true) {
    if(g_seconds>24){
      eyeRight.color=[0.3,0.3,1,1.0];


    }
  }
  if(g_normalOn){
    eyeRight.textureNum=-4;
  }
  eyeRight.normalMatrix.setInverseOf(eyeRight.matrix).transpose();

  eyeRight.render();

  
//EyeLeft
  var eyeLeft = new Cube();
  eyeLeft.color=[1,1,1,1.0];
  eyeLeft.matrix = headCoordEyeL;
  eyeLeft.matrix.translate(-0.01,0.50,0);
  eyeLeft.matrix.scale(0.01,0.1,0.1);
  if (g_animation === true) {
    if(g_seconds>24){
      eyeLeft.color=[0.3,0.3,1,1.0];
    }
  }
  if(g_normalOn){
    eyeLeft.textureNum=-4;
  }
  eyeLeft.normalMatrix.setInverseOf(eyeLeft.matrix).transpose();
  eyeLeft.render();

 

  //back
  var back = new Cube();
  back.color=[0.2,0.2,0.2,1.0];
  back.matrix = bodyCoor;
  back.matrix.translate(0,0.65,0.25);
  var backCoord = new Matrix4(back.matrix);
  var backCoordTwo = new Matrix4(back.matrix);
  var backCoordThree = new Matrix4(back.matrix);
  var backCoordFour = new Matrix4(back.matrix);
  var backCoordFive = new Matrix4(back.matrix);
  back.matrix.scale(1,1,0.1);
  if(g_normalOn){
    back.textureNum=-4;
  }
  back.normalMatrix.setInverseOf(back.matrix).transpose();
  back.render();

  //BackSpikes
  var spikeBack = new Pyramid();
  spikeBack.color=[0.3,0.3,0.3,1.0];
  spikeBack.matrix = backCoord;
  spikeBack.matrix.translate(0.1,0.7,0);
  spikeBack.matrix.scale(0.3,0.3,1);
  spikeBack.matrix.rotate(90,1,0,0);
  if (g_animation === true) {
    if(g_seconds>18&&g_seconds<19){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeBack.matrix.scale(1, scaleY, 1);
      spikeBack.matrix.translate(-scaleY/3,0,0);

    }
    else if(g_seconds>19){
      spikeBack.color=[0.3,0.3,0.9,1.0];
      spikeBack.matrix.translate(-0.333,0,0);
      spikeBack.matrix.scale(1, 2, 1);
    }
  }
  if(g_normalOn){
    spikeBack.textureNum=-4;
  }
  spikeBack.normalMatrix.setInverseOf(spikeBack.matrix).transpose();

  spikeBack.render();

  var spikeBack2 = new Pyramid();
  spikeBack2.color=[0.3,0.3,0.3,1.0];
  spikeBack2.matrix = backCoordTwo;
  spikeBack2.matrix.translate(0.7,0.7,0);
  spikeBack2.matrix.scale(0.3,0.3,1);
  spikeBack2.matrix.rotate(90,1,0,0);
  if (g_animation === true) {
    if(g_seconds>18&&g_seconds<19){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeBack2.matrix.scale(1, scaleY, 1);
      spikeBack2.matrix.translate(scaleY/3,0,0);

    }
    else if(g_seconds>19){
      spikeBack2.color=[0.3,0.3,0.9,1.0];
      spikeBack2.matrix.translate(0.333,0,0);
      spikeBack2.matrix.scale(1, 2, 1);
    }
  }
  if(g_normalOn){
    spikeBack2.textureNum=-4;
  }
    spikeBack2.normalMatrix.setInverseOf(spikeBack2.matrix).transpose();

  spikeBack2.render();

  var spikeBack3 = new Pyramid();
  spikeBack3.color=[0.3,0.3,0.3,1.0];
  spikeBack3.matrix = backCoordThree;
  spikeBack3.matrix.translate(0.1,1.05,0);
  spikeBack3.matrix.scale(0.3,0.3,1);
  spikeBack3.matrix.rotate(90,1,0,0);
  if (g_animation === true) {
    if(g_seconds>22&&g_seconds<23){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeBack3.matrix.scale(1, scaleY, 1);
      spikeBack3.matrix.translate(-scaleY/3,0,0);
      
    }
    else if(g_seconds>23){
      spikeBack3.color=[0.3,0.3,0.9,1.0];
      spikeBack3.matrix.translate(-0.333,0,0);
      spikeBack3.matrix.scale(1, 2, 1);
    }
  }
  if(g_normalOn){
    spikeBack3.textureNum=-4;
  }
      spikeBack3.normalMatrix.setInverseOf(spikeBack3.matrix).transpose();

  spikeBack3.render();


  
  var spikeBack4 = new Pyramid();
  spikeBack4.color=[0.3,0.3,0.3,1.0];
  spikeBack4.matrix = backCoordFour;
  spikeBack4.matrix.translate(0.7,1.05,0);
  spikeBack4.matrix.scale(0.3,0.3,1);
  spikeBack4.matrix.rotate(90,1,0,0);
  if (g_animation === true) {
    if(g_seconds>22&&g_seconds<23){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeBack4.matrix.scale(1, scaleY, 1);
      spikeBack4.matrix.translate(scaleY/3,0,0);

    }
    else if(g_seconds>23){
      spikeBack4.color=[0.3,0.3,0.9,1.0];
      spikeBack4.matrix.translate(0.333,0,0);
      spikeBack4.matrix.scale(1, 2, 1);
    }
  }
  if(g_normalOn){
    spikeBack4.textureNum=-4;
  }
      spikeBack4.normalMatrix.setInverseOf(spikeBack4.matrix).transpose();

  spikeBack4.render();

  var spikeBack5 = new Pyramid();
  spikeBack5.color=[0.3,0.3,0.3,1.0];
  spikeBack5.matrix = backCoordFive;
  spikeBack5.matrix.translate(0.4,0.9,0);
  spikeBack5.matrix.scale(0.3,0.35,1.1);
  spikeBack5.matrix.rotate(90,1,0,0);
  if (g_animation === true) {
    if(g_seconds>20&&g_seconds<21){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeBack5.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>21){
      spikeBack5.color=[0.3,0.3,0.9,1.0];

      spikeBack5.matrix.scale(1, 2, 1);
    }
  }
  if(g_normalOn){
    spikeBack5.textureNum=-4;
  }
      spikeBack5.normalMatrix.setInverseOf(spikeBack5.matrix).transpose();

  spikeBack5.render();




  //TailStart
  //console.log("g_seconds: " + g_seconds);
  var tailStart = new Cube();
  tailStart.color=[0.2,0.2,0.2,1.0];
  tailStart.matrix = bodyCoor;
  tailStart.matrix.translate(0.1,-0.5,0.35);
  if(g_animation==true){
    tailStart.matrix.rotate(3.5*Math.sin(g_seconds/1),0,1,0);
    
    //tailStart.matrix.rotate(3.5*Math.sin(g_seconds/2),0,1,0);

    tailStart.matrix.rotate(2*Math.sin(g_seconds),1,0,0);
    
    
    
  }
  else{
      tailStart.matrix.rotate(g_tailAngle,0,1,0);
      tailStart.matrix.rotate(g_tailAngle2,1,0,0);
  }
  

  var tailCoord = new Matrix4(tailStart.matrix);
  tailStart.matrix.scale(0.8,0.9,4);
  if(g_normalOn){
    tailStart.textureNum=-4;
  }
  tailStart.normalMatrix.setInverseOf(tailStart.matrix).transpose();
  tailStart.render();

  




  var tailTwo = new Cube();
  tailTwo.color=[0.2,0.2,0.2,1.0];
  tailTwo.matrix = tailCoord;
  tailTwo.matrix.translate(0.1,0.05,3.5);
  var tailtwoCoord = new Matrix4(tailTwo.matrix);
  var tailtwoCoordSpike = new Matrix4(tailTwo.matrix);

  tailTwo.matrix.scale(0.6,0.6,5);
  if(g_normalOn){
    tailTwo.textureNum=-4;
  }
  tailTwo.normalMatrix.setInverseOf(tailTwo.matrix).transpose();
  tailTwo.render();

  var spikeTailTwo = new Pyramid();
  spikeTailTwo.color=[0.3,0.3,0.3,1.0];
  spikeTailTwo.matrix = tailtwoCoordSpike;
  spikeTailTwo.matrix.translate(0.05,0.55,1.2);
  spikeTailTwo.matrix.scale(0.5,1,2.5);
  if (g_animation === true) {
    if(g_seconds>16&&g_seconds<17){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeTailTwo.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>17){
      spikeTailTwo.color=[0.3,0.3,0.9,1.0];

      spikeTailTwo.matrix.scale(1, 2, 1);
    }
    
  } 
  if(g_normalOn){
    spikeTailTwo.textureNum=-4;
  }
  spikeTailTwo.normalMatrix.setInverseOf(spikeTailTwo.matrix).transpose();

  spikeTailTwo.render();
  


  var tailThree = new Cube();
  tailThree.color=[0.2,0.2,0.2,1.0];
  tailThree.matrix = tailtwoCoord;
  tailThree.matrix.translate(0.05,0.02,4.5);
  var tailThreeCoord = new Matrix4(tailThree.matrix);
  tailThree.matrix.scale(0.5,0.5,6);
  tailThree.matrix.rotate(-20,1,0,0);
  if(g_normalOn){
    tailThree.textureNum=-4;
  }
  tailThree.normalMatrix.setInverseOf(tailThree.matrix).transpose();
  tailThree.render();

  var tailFour = new Cube();
  tailFour.color=[0.2,0.2,0.2,1.0];
  tailFour.matrix = tailThreeCoord;
  tailFour.matrix.translate(0.05,0.12,3.5);
  var tailFourCoord = new Matrix4(tailFour.matrix);
  var tailFourCoordSpike = new Matrix4(tailFour.matrix);
  tailFour.matrix.scale(0.4,0.4,8);
  tailFour.matrix.rotate(-50,1,0,0);
  if(g_normalOn){
    tailFour.textureNum=-4;
  }
  tailFour.normalMatrix.setInverseOf(tailFour.matrix).transpose();
  tailFour.render();

  var spikeTailFour = new Pyramid();
  spikeTailFour.color=[0.3,0.3,0.3,1.0];
  spikeTailFour.matrix = tailFourCoordSpike;
  spikeTailFour.matrix.translate(-0.05,0.30,-3.2);
  spikeTailFour.matrix.rotate(-1,1,0,0);
  spikeTailFour.matrix.scale(0.5,1,2.5);
  if (g_animation === true) {
    if(g_seconds>14&&g_seconds<15){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeTailFour.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>15){
      spikeTailFour.color=[0.3,0.3,0.9,1.0];
      spikeTailFour.matrix.scale(1, 2, 1);
    }
    
  } 
  if(g_normalOn){
    spikeTailFour.textureNum=-4;
  }
  spikeTailFour.normalMatrix.setInverseOf(spikeTailFour.matrix).transpose();

  spikeTailFour.render();

  var tailFive = new Cube();
  tailFive.color=[0.2,0.2,0.2,1.0];
  tailFive.matrix = tailFourCoord;
  tailFive.matrix.translate(0.05,0.40,4.0);
  var tailFiveCoord = new Matrix4(tailFive.matrix);
  tailFive.matrix.scale(0.32,0.25,6.5);
  tailFive.matrix.rotate(-65,1,0,0);
  tailFive.matrix.translate(0,0,-0.3);
  if(g_normalOn){
    tailFive.textureNum=-4;
  }
  tailFive.normalMatrix.setInverseOf(tailFive.matrix).transpose();
  tailFive.render();

  var tailSix = new Cube();
  tailSix.color=[0.2,0.2,0.2,1.0];
  tailSix.matrix = tailFiveCoord;
  tailSix.matrix.translate(0.05,0.20,4.0);
  var tailSixCoord = new Matrix4(tailSix.matrix);
  var tailSixCoordSpike = new Matrix4(tailSix.matrix);
  tailSix.matrix.scale(0.32,0.25,8.5);
  tailSix.matrix.rotate(-40,1,0,0);
  tailSix.matrix.translate(0,0.0,-0.55);
  if(g_normalOn){
    tailSix.textureNum=-4;
  }
  tailSix.normalMatrix.setInverseOf(tailSix.matrix).transpose();
  tailSix.render();

  var spikeTailSix = new Pyramid();
  spikeTailSix.color=[0.3,0.3,0.3,1.0];
  spikeTailSix.matrix = tailSixCoordSpike;
  spikeTailSix.matrix.translate(0.05,0.15,-7.2);
  spikeTailSix.matrix.rotate(-1,1,0,0);
  spikeTailSix.matrix.scale(0.2,0.5,2.5);
  if (g_animation === true) {
    if(g_seconds>12&&g_seconds<13){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeTailSix.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>13){
      spikeTailSix.color=[0.3,0.3,0.9,1.0];
      spikeTailSix.matrix.scale(1, 2, 1);
    }
    
  } 
  if(g_normalOn){
    spikeTailSix.textureNum=-4;
  }
  spikeTailSix.normalMatrix.setInverseOf(spikeTailSix.matrix).transpose();

  spikeTailSix.render();

  var tailSeven = new Cube();
  tailSeven.color=[0.2,0.2,0.2,1.0];
  tailSeven.matrix = tailSixCoord;
  tailSeven.matrix.translate(0.05,0.10,4.0);
  var tailSevenCoord = new Matrix4(tailSeven.matrix);
  var tailSevenCoordSpike = new Matrix4(tailSeven.matrix);
  tailSeven.matrix.scale(0.32,0.25,5.5);
  tailSeven.matrix.rotate(-10,1,0,0);
  tailSeven.matrix.translate(0,0.05,-1.0);
  if(g_normalOn){
    tailSeven.textureNum=-4;
  }
  tailSeven.normalMatrix.setInverseOf(tailSeven.matrix).transpose();
  tailSeven.render();
  
  var spikeTail5 = new Pyramid();
  spikeTail5.color=[0.3,0.3,0.3,1.0];
  spikeTail5.matrix = tailSevenCoord;
  spikeTail5.matrix.translate(0.05,0.10,-7.2);
  spikeTail5.matrix.rotate(-1,1,0,0);
  spikeTail5.matrix.scale(0.2,0.5,2.5);
  if (g_animation === true) {
    if(g_seconds>10&&g_seconds<11){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeTail5.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>11){
      spikeTail5.color=[0.3,0.3,0.9,1.0];

      spikeTail5.matrix.scale(1, 2, 1);
    }
    
  } 
  if(g_normalOn){
    spikeTail5.textureNum=-4;
  }
  spikeTail5.normalMatrix.setInverseOf(spikeTail5.matrix).transpose();
  spikeTail5.render();

  var spikeTailSeven = new Pyramid();
  spikeTailSeven.color=[0.3,0.3,0.3,1.0];
  spikeTailSeven.matrix = tailSevenCoordSpike;
  spikeTailSeven.matrix.translate(0.05,0.10,-4.2);
  spikeTailSeven.matrix.rotate(-1,1,0,0);
  spikeTailSeven.matrix.scale(0.2,0.5,2.5);
  if (g_animation === true) {
    if(g_seconds>8&&g_seconds<9){
      var scaleY =  1+ Math.abs(Math.sin(g_seconds/2 * Math.PI));
      spikeTailSeven.matrix.scale(1, scaleY, 1);
    }
    else if(g_seconds>9){
      spikeTailSeven.color=[0.3,0.3,0.9,1.0];

      spikeTailSeven.matrix.scale(1, 2, 1);
    }
    
  } 
  if(g_normalOn){
    spikeTailSeven.textureNum=-4;
  }
  spikeTailSeven.normalMatrix.setInverseOf(spikeTailSeven.matrix).transpose();
  spikeTailSeven.render();



  return BreathCoord1;
}
function breathTime(BreathCoord1){
    var breath1 = new Cube();
  breath1.color=[0,0.5,1,1.0];
  breath1.matrix = BreathCoord1;
  breath1.matrix.translate(0.35,0.35,0.0);
  var breath2Coord = new Matrix4(breath1.matrix);
  var breath3Coord = new Matrix4(breath1.matrix);
  var breath4Coord = new Matrix4(breath1.matrix);
  var breath5Coord = new Matrix4(breath1.matrix);
  var breath6Coord = new Matrix4(breath1.matrix);
  var breath7Coord = new Matrix4(breath1.matrix);
  var breath8Coord = new Matrix4(breath1.matrix);
  var breath9Coord = new Matrix4(breath1.matrix);
  var breath10Coord = new Matrix4(breath1.matrix);
  var breath11Coord = new Matrix4(breath1.matrix);
  var breath12Coord = new Matrix4(breath1.matrix);
  var breath13Coord = new Matrix4(breath1.matrix);
  var breath14Coord = new Matrix4(breath1.matrix);
  var breath15Coord = new Matrix4(breath1.matrix);
  var breath16Coord = new Matrix4(breath1.matrix);
  var breath17Coord = new Matrix4(breath1.matrix);
  var breath18Coord = new Matrix4(breath1.matrix);
  var breath19Coord = new Matrix4(breath1.matrix);
  var breath20Coord = new Matrix4(breath1.matrix);
  var breath21Coord = new Matrix4(breath1.matrix);
  var breath22Coord = new Matrix4(breath1.matrix);
  var breath23Coord = new Matrix4(breath1.matrix);
  var breath24Coord = new Matrix4(breath1.matrix);
  var breath25Coord = new Matrix4(breath1.matrix);
  var breath26Coord = new Matrix4(breath1.matrix);
  var breath27Coord = new Matrix4(breath1.matrix);
  var breath28Coord = new Matrix4(breath1.matrix);
  var breath29Coord = new Matrix4(breath1.matrix);
  var breath30Coord = new Matrix4(breath1.matrix);
  var breath31Coord = new Matrix4(breath1.matrix);
  var breath32Coord = new Matrix4(breath1.matrix);
  var breath33Coord = new Matrix4(breath1.matrix);
  var breath34Coord = new Matrix4(breath1.matrix);
  var breath35Coord = new Matrix4(breath1.matrix);
  var breath36Coord = new Matrix4(breath1.matrix);
  var breath37Coord = new Matrix4(breath1.matrix);
  var breath38Coord = new Matrix4(breath1.matrix);
  var breath39Coord = new Matrix4(breath1.matrix);
  var breath40Coord = new Matrix4(breath1.matrix);
  var breath41Coord = new Matrix4(breath1.matrix);
  var breath42Coord = new Matrix4(breath1.matrix);
  var breath43Coord = new Matrix4(breath1.matrix);
  var breath44Coord = new Matrix4(breath1.matrix);
  var breath45Coord = new Matrix4(breath1.matrix);
  var breath46Coord = new Matrix4(breath1.matrix);
  var breath47Coord = new Matrix4(breath1.matrix);
  var breath48Coord = new Matrix4(breath1.matrix);
  var breath49Coord = new Matrix4(breath1.matrix);
  var breath50Coord = new Matrix4(breath1.matrix);
  var breath51Coord = new Matrix4(breath1.matrix);
  var breath52Coord = new Matrix4(breath1.matrix);
  var breath53Coord = new Matrix4(breath1.matrix);
  var breath54Coord = new Matrix4(breath1.matrix);
  var breath55Coord = new Matrix4(breath1.matrix);
  var breath56Coord = new Matrix4(breath1.matrix);
  var breath57Coord = new Matrix4(breath1.matrix);
  var breath58Coord = new Matrix4(breath1.matrix);
  var breath59Coord = new Matrix4(breath1.matrix);
  var breath60Coord = new Matrix4(breath1.matrix);
  var breath61Coord = new Matrix4(breath1.matrix);
  var breath62Coord = new Matrix4(breath1.matrix);
  var breath63Coord = new Matrix4(breath1.matrix);
  var breath64Coord = new Matrix4(breath1.matrix);
  var breath65Coord = new Matrix4(breath1.matrix);
  var breath66Coord = new Matrix4(breath1.matrix);
  var breath67Coord = new Matrix4(breath1.matrix);
  var breath68Coord = new Matrix4(breath1.matrix);
  var breath69Coord = new Matrix4(breath1.matrix);
  var breath70Coord = new Matrix4(breath1.matrix);
  var breath71Coord = new Matrix4(breath1.matrix);
  var breath72Coord = new Matrix4(breath1.matrix);
  var breath73Coord = new Matrix4(breath1.matrix);
  var breath74Coord = new Matrix4(breath1.matrix);
  var breath75Coord = new Matrix4(breath1.matrix);
  var breath76Coord = new Matrix4(breath1.matrix);
  var breath77Coord = new Matrix4(breath1.matrix);
  var breath78Coord = new Matrix4(breath1.matrix);
  var breath79Coord = new Matrix4(breath1.matrix);
  var breath80Coord = new Matrix4(breath1.matrix);
  var breath81Coord = new Matrix4(breath1.matrix);
  var breath82Coord = new Matrix4(breath1.matrix);
  var breath83Coord = new Matrix4(breath1.matrix);
  var breath84Coord = new Matrix4(breath1.matrix);
  var breath85Coord = new Matrix4(breath1.matrix);
  var breath86Coord = new Matrix4(breath1.matrix);
  var breath87Coord = new Matrix4(breath1.matrix);
  var breath88Coord = new Matrix4(breath1.matrix);
  var breath89Coord = new Matrix4(breath1.matrix);
  var breath90Coord = new Matrix4(breath1.matrix);
  var breath91Coord = new Matrix4(breath1.matrix);
  var breath92Coord = new Matrix4(breath1.matrix);
  var breath93Coord = new Matrix4(breath1.matrix);
  var breath94Coord = new Matrix4(breath1.matrix);
  var breath95Coord = new Matrix4(breath1.matrix);
  var breath96Coord = new Matrix4(breath1.matrix);
  var breath97Coord = new Matrix4(breath1.matrix);
  var breath98Coord = new Matrix4(breath1.matrix);
  var breath99Coord = new Matrix4(breath1.matrix);
  var breath100Coord = new Matrix4(breath1.matrix);
  


  breath1.matrix.scale(0.1,0.1,0.1);
  if (g_animation === true) {
    var progress = (g_seconds % 1) / 0.06; 
    var translation = progress * 4;
    if (progress < 1) {
      breath1.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath1.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
  breath1.render();

var breath2 = new Cube();//I used ai to duplicate these
breath2.color = [0, 0.5, 1, 1.0];
breath2.matrix = breath2Coord;
breath2.matrix.translate(0.2, 0.0, 0.0);
breath2.matrix.scale(0.1, 0.1, 0.1);

if (g_animation === true) {
  var delay = 0.05; 
  var adjustedSeconds = g_seconds - delay;
  
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    
    if (progress < 1) {
      breath2.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath2.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath2.render();

var breath3 = new Cube();
breath3.color = [1, 1, 1, 1.0];
breath3.matrix = breath3Coord;
breath3.matrix.translate(0.1, 0.0, 0.0);
breath3.matrix.scale(0.1, 0.1, 0.1);

if (g_animation === true) {
  var delay = 0.03;     
  var adjustedSeconds = g_seconds - delay;
  
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    
    if (progress < 1) {
      breath3.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath3.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}

var breath4 = new Cube();
breath4.color = [0, 0.5, 1, 1.0];
breath4.matrix = breath4Coord;
breath4.matrix.translate(-0.1, 0.0, 0.0);
breath4.matrix.scale(0.1, 0.1, 0.1);

if (g_animation === true) {
  var delay = 0.04;     
  var adjustedSeconds = g_seconds - delay;
  
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    
    if (progress < 1) {
      breath4.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath4.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath4.render();

var breath5 = new Cube();
breath5.color = [0, 0.5, 1, 1.0];
breath5.matrix = breath5Coord;
breath5.matrix.translate(-0.2, 0.0, 0.0);
breath5.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.06;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath5.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath5.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath5.render();

var breath6 = new Cube();
breath6.color = [1, 1, 1, 1.0];
breath6.matrix = breath6Coord;
breath6.matrix.translate(0.25, 0.0, 0.0);
breath6.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.07;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath6.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath6.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath6.render();

var breath7 = new Cube();
breath7.color = [0, 0.5, 1, 1.0];
breath7.matrix = breath7Coord;
breath7.matrix.translate(-0.15, 0.02, 0.0);
breath7.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.08;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath7.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath7.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath7.render();

var breath8 = new Cube();
breath8.color = [0, 0.5, 1, 1.0];
breath8.matrix = breath8Coord;
breath8.matrix.translate(0.2, -0.15, 0.0);
breath8.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.09;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath8.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath8.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath8.render();

var breath9 = new Cube();
breath9.color = [1, 1, 1, 1.0];
breath9.matrix = breath9Coord;
breath9.matrix.translate(-0.05, -0.02, 0.0);
breath9.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.1;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath9.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath9.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath9.render();

var breath10 = new Cube();
breath10.color = [0, 0.5, 1, 1.0];
breath10.matrix = breath10Coord;
breath10.matrix.translate(0.15, 0.02, 0.0);
breath10.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.11;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath10.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath10.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath10.render();

var breath11 = new Cube();
breath11.color = [0, 0.5, 1, 1.0];
breath11.matrix = breath11Coord;
breath11.matrix.translate(-0.2, -0.05, 0.0);
breath11.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.12;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath11.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath11.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath11.render();

var breath12 = new Cube();
breath12.color = [1, 1, 1, 1.0];
breath12.matrix = breath12Coord;
breath12.matrix.translate(0.25, 0.02, 0.0);
breath12.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.13;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath12.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath12.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath12.render();

var breath13 = new Cube();
breath13.color = [0, 0.5, 1, 1.0];
breath13.matrix = breath13Coord;
breath13.matrix.translate(-0.15, 0.02, 0.0);
breath13.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.14;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath13.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath13.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath13.render();

var breath14 = new Cube();
breath14.color = [0, 0.5, 1, 1.0];
breath14.matrix = breath14Coord;
breath14.matrix.translate(-0.1, -0.12, 0.0);
breath14.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.15;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath14.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath14.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath14.render();

var breath15 = new Cube();
breath15.color = [0, 0.5, 1, 1.0];
breath15.matrix = breath15Coord;
breath15.matrix.translate(-0.05, 0.02, 0.0);
breath15.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.16;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath15.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath15.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath15.render();

var breath16 = new Cube();
breath16.color = [1, 1, 1, 1.0];
breath16.matrix = breath16Coord;
breath16.matrix.translate(0.0, -0.09, 0.0);
breath16.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.17;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath16.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath16.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath16.render();

var breath17 = new Cube();
breath17.color = [0, 0.5, 1, 1.0];
breath17.matrix = breath17Coord;
breath17.matrix.translate(0.05, 0.02, 0.0);
breath17.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.18;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath17.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath17.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath17.render();

var breath18 = new Cube();
breath18.color = [0, 0.5, 1, 1.0];
breath18.matrix = breath18Coord;
breath18.matrix.translate(0.1, -0.12, 0.0);
breath18.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.19;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath18.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath18.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath18.render();

var breath19 = new Cube();
breath19.color = [0, 0.5, 1, 1.0];
breath19.matrix = breath19Coord;
breath19.matrix.translate(0.15, 0.02, 0.0);
breath19.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.20;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath19.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath19.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath19.render();

var breath20 = new Cube();
breath20.color = [0, 0.5, 1, 1.0];
breath20.matrix = breath20Coord;
breath20.matrix.translate(-0.25, 0.0, 0.0);
breath20.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.21;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath20.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath20.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath20.render();

var breath21 = new Cube();
breath21.color = [0, 0.5, 1, 1.0];
breath21.matrix = breath21Coord;
breath21.matrix.translate(-0.2, -0.16, 0.0);
breath21.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.22;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath21.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath21.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath21.render();

var breath22 = new Cube();
breath22.color = [0, 0.5, 1, 1.0];
breath22.matrix = breath22Coord;
breath22.matrix.translate(0.2, -0.02, 0.0);
breath22.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.23;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath22.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath22.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath22.render();

var breath23 = new Cube();
breath23.color = [0, 0.5, 1, 1.0];
breath23.matrix = breath23Coord;
breath23.matrix.translate(-0.08, -0.02, 0.0);
breath23.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.24;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath23.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath23.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath23.render();

var breath24 = new Cube();
breath24.color = [0, 0.5, 1, 1.0];
breath24.matrix = breath24Coord;
breath24.matrix.translate(0.07, -0.18, 0.0);
breath24.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.25;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath24.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath24.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath24.render();

var breath25 = new Cube();
breath25.color = [1, 1, 1, 1.0];
breath25.matrix = breath25Coord;
breath25.matrix.translate(0, -0.02, 0.0);
breath25.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.26;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath25.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath25.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath25.render();

var breath26 = new Cube();
breath26.color = [0, 0.5, 1, 1.0];
breath26.matrix = breath26Coord;
breath26.matrix.translate(0.03, -0.02, 0.0);
breath26.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.27;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath26.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath26.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath26.render();

var breath27 = new Cube();
breath27.color = [0, 0.5, 1, 1.0];
breath27.matrix = breath27Coord;
breath27.matrix.translate(-0.07, -0.02, 0.0);
breath27.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.28;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath27.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath27.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath27.render();

var breath28 = new Cube();
breath28.color = [0, 0.5, 1, 1.0];
breath28.matrix = breath28Coord;
breath28.matrix.translate(0.05, -0.12, 0.0);
breath28.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.29;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath28.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath28.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath28.render();

var breath29 = new Cube();
breath29.color = [0, 0.5, 1, 1.0];
breath29.matrix = breath29Coord;
breath29.matrix.translate(-0.1, -0.06, 0.0);
breath29.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.30;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath29.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath29.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath29.render();

var breath30 = new Cube();
breath30.color = [1, 1, 1, 1.0];
breath30.matrix = breath30Coord;
breath30.matrix.translate(0.1, -0.09, 0.0);
breath30.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.31;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath30.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath30.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath30.render();

var breath31 = new Cube();
breath31.color = [0, 0.5, 1, 1.0];
breath31.matrix = breath31Coord;
breath31.matrix.translate(-0.18, 0.015, 0.0);
breath31.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.32;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath31.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath31.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath31.render();

var breath32 = new Cube();
breath32.color = [0, 0.5, 1, 1.0];
breath32.matrix = breath32Coord;
breath32.matrix.translate(0.22, -0.025, 0.0);
breath32.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.33;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath32.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath32.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath32.render();

var breath33 = new Cube();
breath33.color = [0, 0.5, 1, 1.0];
breath33.matrix = breath33Coord;
breath33.matrix.translate(-0.19, 0.018, 0.0);
breath33.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.34;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath33.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath33.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath33.render();

var breath34 = new Cube();
breath34.color = [0, 0.5, 1, 1.0];
breath34.matrix = breath34Coord;
breath34.matrix.translate(0.2, 0.022, 0.0);
breath34.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.35;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath34.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath34.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath34.render();

var breath35 = new Cube();
breath35.color = [0, 0.5, 1, 1.0];
breath35.matrix = breath35Coord;
breath35.matrix.translate(-0.17, -0.19, 0.0);
breath35.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.36;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath35.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath35.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath35.render();

var breath36 = new Cube();
breath36.color = [0, 0.5, 1, 1.0];
breath36.matrix = breath36Coord;
breath36.matrix.translate(0.13, -0.024, 0.0);
breath36.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.37;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath36.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath36.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath36.render();

var breath37 = new Cube();
breath37.color = [0, 0.5, 1, 1.0];
breath37.matrix = breath37Coord;
breath37.matrix.translate(-0.11, -0.117, 0.0);
breath37.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.38;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath37.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath37.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath37.render();

var breath38 = new Cube();
breath38.color = [1, 1, 1, 1.0];
breath38.matrix = breath38Coord;
breath38.matrix.translate(0.09, 0.023, 0.0);
breath38.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.39;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath38.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath38.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath38.render();

var breath39 = new Cube();
breath39.color = [0, 0.5, 1, 1.0];
breath39.matrix = breath39Coord;
breath39.matrix.translate(-0.12, 0.021, 0.0);
breath39.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.40;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath39.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath39.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath39.render();

var breath40 = new Cube();
breath40.color = [0, 0.5, 1, 1.0];
breath40.matrix = breath40Coord;
breath40.matrix.translate(0.14, -0.12, 0.0);
breath40.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.41;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath40.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath40.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath40.render();

var breath41 = new Cube();
breath41.color = [0, 0.5, 1, 1.0];
breath41.matrix = breath41Coord;
breath41.matrix.translate(-0.19, 0.024, 0.0);
breath41.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.42;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath41.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath41.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath41.render();

var breath42 = new Cube();
breath42.color = [1, 1, 1, 1.0];
breath42.matrix = breath42Coord;
breath42.matrix.translate(0.21, 0.017, 0.0);
breath42.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.43;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath42.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath42.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath42.render();

var breath43 = new Cube();
breath43.color = [0, 0.5, 1, 1.0];
breath43.matrix = breath43Coord;
breath43.matrix.translate(-0.06, -0.022, 0.0);
breath43.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.44;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath43.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath43.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath43.render();

var breath44 = new Cube();
breath44.color = [0, 0.5, 1, 1.0];
breath44.matrix = breath44Coord;
breath44.matrix.translate(0.12, -0.019, 0.0);
breath44.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.45;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath44.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath44.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath44.render();

var breath45 = new Cube();
breath45.color = [0, 0.5, 1, 1.0];
breath45.matrix = breath45Coord;
breath45.matrix.translate(-0.16, 0.013, 0.0);
breath45.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.46;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath45.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath45.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath45.render();

var breath46 = new Cube();
breath46.color = [0, 0.5, 1, 1.0];
breath46.matrix = breath46Coord;
breath46.matrix.translate(0.18, -0.018, 0.0);
breath46.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.47;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath46.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath46.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath46.render();

var breath47 = new Cube();
breath47.color = [0, 0.5, 1, 1.0];
breath47.matrix = breath47Coord;
breath47.matrix.translate(-0.11, 0.021, 0.0);
breath47.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.48;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath47.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath47.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath47.render();

var breath48 = new Cube();
breath48.color = [0, 0.5, 1, 1.0];
breath48.matrix = breath48Coord;
breath48.matrix.translate(0.19, -0.2, 0.0);
breath48.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.49;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath48.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath48.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath48.render();

var breath49 = new Cube();
breath49.color = [0, 0.5, 1, 1.0];
breath49.matrix = breath49Coord;
breath49.matrix.translate(-0.03, 0.004, 0.0);
breath49.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.50;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath49.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath49.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath49.render();

var breath50 = new Cube();
breath50.color = [1, 1, 1, 1.0];
breath50.matrix = breath50Coord;
breath50.matrix.translate(0.15, 0.017, 0.0);
breath50.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.51;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath50.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath50.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath50.render();

var breath51 = new Cube();
breath51.color = [0, 0.5, 1, 1.0];
breath51.matrix = breath51Coord;
breath51.matrix.translate(-0.12, 0.002, 0.0);
breath51.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.52;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath51.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath51.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath51.render();

var breath52 = new Cube();
breath52.color = [0, 0.5, 1, 1.0];
breath52.matrix = breath52Coord;
breath52.matrix.translate(0.13, -0.16, 0.0);
breath52.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.53;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath52.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath52.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath52.render();

var breath53 = new Cube();
breath53.color = [0, 0.5, 1, 1.0];
breath53.matrix = breath53Coord;
breath53.matrix.translate(-0.09, 0.013, 0.0);
breath53.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.54;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath53.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath53.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath53.render();

var breath54 = new Cube();
breath54.color = [1, 1, 1, 1.0];
breath54.matrix = breath54Coord;
breath54.matrix.translate(0.07, 0.011, 0.0);
breath54.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.55;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath54.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath54.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath54.render();

var breath55 = new Cube();
breath55.color = [0, 0.5, 1, 1.0];
breath55.matrix = breath55Coord;
breath55.matrix.translate(-0.15, 0.001, 0.0);
breath55.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.56;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath55.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath55.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath55.render();
  
var breath56 = new Cube();
breath56.color = [0, 0.5, 1, 1.0];
breath56.matrix = breath56Coord;
breath56.matrix.translate(0.13, -0.12, 0.0);
breath56.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.57;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath56.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath56.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath56.render();

var breath57 = new Cube();
breath57.color = [1, 1, 1, 1.0];
breath57.matrix = breath57Coord;
breath57.matrix.translate(-0.11, 0.024, 0.0);
breath57.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.58;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath57.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath57.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath57.render();

var breath58 = new Cube();
breath58.color = [0, 0.5, 1, 1.0];
breath58.matrix = breath58Coord;
breath58.matrix.translate(0.15, 0.017, 0.0);
breath58.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.59;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath58.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath58.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath58.render();

var breath59 = new Cube();
breath59.color = [0, 0.5, 1, 1.0];
breath59.matrix = breath59Coord;
breath59.matrix.translate(-0.12, -0.022, 0.0);
breath59.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.60;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath59.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath59.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath59.render();

var breath60 = new Cube();
breath60.color = [0, 0.5, 1, 1.0];
breath60.matrix = breath60Coord;
breath60.matrix.translate(0.02, -0.19, 0.0);
breath60.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.61;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath60.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath60.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath60.render();

var breath61 = new Cube();
breath61.color = [0, 0.5, 1, 1.0];
breath61.matrix = breath61Coord;
breath61.matrix.translate(-0.13, -0.123, 0.0);
breath61.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.62;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath61.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath61.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath61.render();

var breath62 = new Cube();
breath62.color = [0, 0.5, 1, 1.0];
breath62.matrix = breath62Coord;
breath62.matrix.translate(0.08, 0.018, 0.0);
breath62.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.63;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath62.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath62.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath62.render();

var breath63 = new Cube();
breath63.color = [1, 1, 1, 1.0];
breath63.matrix = breath63Coord;
breath63.matrix.translate(-0.1, -0.21, 0.0);
breath63.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.64;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath63.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath63.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath63.render();

var breath64 = new Cube();
breath64.color = [0, 0.5, 1, 1.0];
breath64.matrix = breath64Coord;
breath64.matrix.translate(0.19, 0.02, 0.0);
breath64.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.65;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath64.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath64.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath64.render();

var breath65 = new Cube();
breath65.color = [0, 0.5, 1, 1.0];
breath65.matrix = breath65Coord;
breath65.matrix.translate(0, -0.124, 0.0);
breath65.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.66;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath65.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath65.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath65.render();

var breath66 = new Cube();
breath66.color = [0, 0.5, 1, 1.0];
breath66.matrix = breath66Coord;
breath66.matrix.translate(0.02, -0.087, 0.0);
breath66.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.67;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath66.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath66.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath66.render();

var breath67 = new Cube();
breath67.color = [0, 0.5, 1, 1.0];
breath67.matrix = breath67Coord;
breath67.matrix.translate(-0.13, -0.122, 0.0);
breath67.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.68;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath67.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath67.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath67.render();

var breath68 = new Cube();
breath68.color = [1, 1, 1, 1.0];
breath68.matrix = breath68Coord;
breath68.matrix.translate(0.13, 0.019, 0.0);
breath68.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.69;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath68.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath68.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath68.render();

var breath69 = new Cube();
breath69.color = [0, 0.5, 1, 1.0];
breath69.matrix = breath69Coord;
breath69.matrix.translate(-0.11, -0.123, 0.0);
breath69.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.70;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath69.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath69.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath69.render();

var breath70 = new Cube();
breath70.color = [0, 0.5, 1, 1.0];
breath70.matrix = breath70Coord;
breath70.matrix.translate(0.09, -0.08, 0.0);
breath70.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.71;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath70.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath70.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath70.render();

var breath71 = new Cube();
breath71.color = [0, 0.5, 1, 1.0];
breath71.matrix = breath71Coord;
breath71.matrix.translate(-0.05, 0.022, 0.0);
breath71.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.72;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath71.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath71.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath71.render();

var breath72 = new Cube();
breath72.color = [0, 0.5, 1, 1.0];
breath72.matrix = breath72Coord;
breath72.matrix.translate(0.02, -0.019, 0.0);
breath72.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.73;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath72.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath72.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath72.render();

var breath73 = new Cube();
breath73.color = [0, 0.5, 1, 1.0];
breath73.matrix = breath73Coord;
breath73.matrix.translate(-0.13, 0.023, 0.0);
breath73.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.74;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath73.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath73.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath73.render();

var breath74 = new Cube();
breath74.color = [1, 1, 1, 1.0];
breath74.matrix = breath74Coord;
breath74.matrix.translate(0, 0.018, 0.0);
breath74.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.75;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath74.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath74.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath74.render();

var breath75 = new Cube();
breath75.color = [0, 0.5, 1, 1.0];
breath75.matrix = breath75Coord;
breath75.matrix.translate(-0.11, -0.121, 0.0);
breath75.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.76;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath75.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath75.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath75.render();

var breath76 = new Cube();
breath76.color = [0, 0.5, 1, 1.0];
breath76.matrix = breath76Coord;
breath76.matrix.translate(0.09, -0.2, 0.0);
breath76.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.77;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath76.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath76.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath76.render();

var breath77 = new Cube();
breath77.color = [0, 0.5, 1, 1.0];
breath77.matrix = breath77Coord;
breath77.matrix.translate(-0.12, 0.024, 0.0);
breath77.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.78;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath77.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath77.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath77.render();

var breath78 = new Cube();
breath78.color = [1, 1, 1, 1.0];
breath78.matrix = breath78Coord;
breath78.matrix.translate(0.12, 0.017, 0.0);
breath78.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.79;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath78.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath78.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath78.render();

var breath79 = new Cube();
breath79.color = [0, 0.5, 1, 1.0];
breath79.matrix = breath79Coord;
breath79.matrix.translate(-0.03, -0.122, 0.0);
breath79.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.80;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath79.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath79.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath79.render();

var breath80 = new Cube();
breath80.color = [0, 0.5, 1, 1.0];
breath80.matrix = breath80Coord;
breath80.matrix.translate(0.08, -0.019, 0.0);
breath80.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.81;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath80.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath80.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath80.render();

var breath81 = new Cube();
breath81.color = [1, 1, 1, 1.0];
breath81.matrix = breath81Coord;
breath81.matrix.translate(-0.2, 0.023, 0.0);
breath81.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.82;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath81.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath81.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath81.render();

var breath82 = new Cube();
breath82.color = [0, 0.5, 1, 1.0];
breath82.matrix = breath82Coord;
breath82.matrix.translate(0.09, -0.118, 0.0);
breath82.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.83;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath82.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath82.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath82.render();

var breath83 = new Cube();
breath83.color = [0, 0.5, 1, 1.0];
breath83.matrix = breath83Coord;
breath83.matrix.translate(-0.02, -0.122, 0.0);
breath83.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.84;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath83.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath83.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath83.render();

var breath84 = new Cube();
breath84.color = [1, 1, 1, 1.0];
breath84.matrix = breath84Coord;
breath84.matrix.translate(0.02, -0.09, 0.0);
breath84.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.85;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath84.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath84.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath84.render();

var breath85 = new Cube();
breath85.color = [0, 0.5, 1, 1.0];
breath85.matrix = breath85Coord;
breath85.matrix.translate(-0.03, 0.023, 0.0);
breath85.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.86;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath85.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath85.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath85.render();

var breath86 = new Cube();
breath86.color = [0, 0.5, 1, 1.0];
breath86.matrix = breath86Coord;
breath86.matrix.translate(0.08, -0.118, 0.0);
breath86.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.87;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath86.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath86.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath86.render();

var breath87 = new Cube();
breath87.color = [1, 1, 1, 1.0];
breath87.matrix = breath87Coord;
breath87.matrix.translate(-0.11, 0.021, 0.0);
breath87.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.88;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath87.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath87.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath87.render();

var breath88 = new Cube();
breath88.color = [0, 0.5, 1, 1.0];
breath88.matrix = breath88Coord;
breath88.matrix.translate(0.09, -0.2, 0.0);
breath88.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.89;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath88.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath88.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath88.render();

var breath89 = new Cube();
breath89.color = [0, 0.5, 1, 1.0];
breath89.matrix = breath89Coord;
breath89.matrix.translate(-0.02, 0.024, 0.0);
breath89.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.90;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath89.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath89.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath89.render();

var breath90 = new Cube();
breath90.color = [0, 0.5, 1, 1.0];
breath90.matrix = breath90Coord;
breath90.matrix.translate(0.12, -0.117, 0.0);
breath90.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.91;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath90.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath90.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath90.render();

var breath91 = new Cube();
breath91.color = [1, 1, 1, 1.0];
breath91.matrix = breath91Coord;
breath91.matrix.translate(-0.03, -0.16, 0.0);
breath91.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.92;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath91.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath91.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath91.render();

var breath92 = new Cube();
breath92.color = [0, 0.5, 1, 1.0];
breath92.matrix = breath92Coord;
breath92.matrix.translate(0.18, 0.019, 0.0);
breath92.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.93;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath92.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath92.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath92.render();

var breath93 = new Cube();
breath93.color = [0, 0.5, 1, 1.0];
breath93.matrix = breath93Coord;
breath93.matrix.translate(-0.11, 0.023, 0.0);
breath93.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.94;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath93.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath93.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath93.render();

var breath94 = new Cube();
breath94.color = [0, 0.5, 1, 1.0];
breath94.matrix = breath94Coord;
breath94.matrix.translate(0.09, 0.018, 0.0);
breath94.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.95;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath94.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath94.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath94.render();

var breath95 = new Cube();
breath95.color = [0, 0.5, 1, 1.0];
breath95.matrix = breath95Coord;
breath95.matrix.translate(-0.12, 0.022, 0.0);
breath95.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.96;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath95.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath95.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath95.render();

var breath96 = new Cube();
breath96.color = [1, 1, 1, 1.0];
breath96.matrix = breath96Coord;
breath96.matrix.translate(0.02, 0.019, 0.0);
breath96.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.97;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath96.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath96.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath96.render();

var breath97 = new Cube();
breath97.color = [0, 0.5, 1, 1.0];
breath97.matrix = breath97Coord;
breath97.matrix.translate(-0.13, 0.023, 0.0);
breath97.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.98;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath97.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath97.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath97.render();

var breath98 = new Cube();
breath98.color = [0, 0.5, 1, 1.0];
breath98.matrix = breath98Coord;
breath98.matrix.translate(0.08, 0.018, 0.0);
breath98.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 0.99;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath98.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath98.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath98.render();

var breath99 = new Cube();
breath99.color = [0, 0.5, 1, 1.0];
breath99.matrix = breath99Coord;
breath99.matrix.translate(-0.01, 0.021, 0.0);
breath99.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 1.00;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath99.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath99.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath99.render();

var breath100 = new Cube();
breath100.color = [0, 0.5, 1, 1.0];
breath100.matrix = breath100Coord;
breath100.matrix.translate(0.09, 0.02, 0.0);
breath100.matrix.scale(0.1, 0.1, 0.1);
if (g_animation === true) {
  var delay = 1.01;     
  var adjustedSeconds = g_seconds - delay;
  if (adjustedSeconds >= 0) {
    var progress = (adjustedSeconds % 1) / 0.06; 
    var translation = progress * 4;    
    if (progress < 1) {
      breath100.matrix.translate(0.0, translation/1.5, translation);
    } else {
      breath100.matrix.translate(0.0, -translation/1.5, -translation);
    }
  }
}
breath100.render();
}
