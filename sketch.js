var box, firstPage, secondPage;
var dottedImg, dotted, circle, circleImg, heart, heartImg, star, starImg, rectangle, rectangleImg, square, squareImg, triangle, triangleImg, cylinder, cylinderImg, oval, ovalImg, sphere, sphereImg, decagon, decagonImg, heptagon, heptagonImg, hexagon,
  hexagonImg, nonagon, nonagonImg, octagon, octagonImg, pentagon, pentagonImg, cube, cubeImg, cuboid, cuboidImg, kite, kiteImg, parallelogram, parallelogramImg, rhombus, rhombusImg, trapezium, trapeziumImg, acuteAngled, acuteAngledImg, cone, coneImg,
  equilateral, equilateralImg, isoceles, isocelesImg, obtuseAngled, obtuseAngledImg, prism, prismImg, pyramid, pyramidImg, rightAngled, rightAngledImg, scalene, scaleneImg, dot, dotImg, sleeping, sleepingImg, standing, standingImg, slanting, slantingImg;

function preload() {
  dottedImg = loadImage("asserts/basics/image.png");
  dotImg = loadImage("asserts/basics/dot.png");
  sleepingImg = loadImage("asserts/basics/dotted-line.png");
  slantingImg = loadImage("asserts/basics/slanting line.png");
  standingImg = loadImage("asserts/basics/standingLine.png");
  circleImg = loadImage("asserts/circle/circle.png");
  cylinderImg = loadImage("asserts/circle/cylinder.jpg");
  ovalImg = loadImage("asserts/circle/Oval.png");
  sphereImg = loadImage("asserts/circle/sphere.jpg");
  heartImg = loadImage("asserts/other shapes/heart.png");
  starImg = loadImage("asserts/other shapes/star.png");
  decagonImg = loadImage("asserts/other shapes/decagon.png");
  heptagonImg = loadImage("asserts/other shapes/heptagon.png");
  hexagonImg = loadImage("asserts/other shapes/hexagon.png");
  nonagonImg = loadImage("asserts/other shapes/nonagon.png");
  octagonImg = loadImage("asserts/other shapes/octagon.png");
  pentagonImg = loadImage("asserts/other shapes/pentaon.png");
  rectangleImg = loadImage("asserts/quadrilaterals/retangle.png");
  squareImg = loadImage("asserts/quadrilaterals/square.jpg");
  cubeImg = loadImage("asserts/quadrilaterals/cube.png");
  cuboidImg = loadImage("asserts/quadrilaterals/cuboid.png");
  kiteImg = loadImage("asserts/quadrilaterals/kite.png");
  parallelogramImg = loadImage("asserts/quadrilaterals/parallelogram.png");
  rhombusImg = loadImage("asserts/quadrilaterals/rhombus.png");
  trapeziumImg = loadImage("asserts/quadrilaterals/trapezium.png");
  triangleImg = loadImage("asserts/triangle/triangle.jpg");
  acuteAngledImg = loadImage("asserts/triangle/acuteAngled.png");
  coneImg = loadImage("asserts/triangle/cone.png");
  equilateralImg = loadImage("asserts/triangle/equilateral.png");
  isocelesImg = loadImage("asserts/triangle/isoceles.png");
  obtuseAngledImg = loadImage("asserts/triangle/obtuseAngled.png");
  prismImg = loadImage("asserts/triangle/prism.png");
  pyramidImg = loadImage("asserts/triangle/pyramid.png");
  rightAngledImg = loadImage("asserts/triangle/rightAngled.jpg");
  scaleneImg = loadImage("asserts/triangle/scalene.png");
}

function setup() {
  createCanvas(800, 800);

  gameState = 2;
  /*box = createSprite(400, 400, 600, 600);
  box.shapeColor = 255;*/

  dotted = createSprite(450, 430, 50, 50);
  dotted.addImage("img", dottedImg);
  dotted.scale = 0.8;

  triangle = createSprite(360, 365, 50, 50);
  triangle.addImage(triangleImg);
  triangle.scale = 0.6;

  rectangle = createSprite(200, 365, 50, 50);
  rectangle.addImage(rectangleImg);
  rectangle.scale = 0.15;

  square = createSprite(470, 460, 50, 50);
  square.addImage(squareImg);
  square.scale = 0.3;

  circle = createSprite(265, 455, 50, 50);
  circle.addImage(circleImg);
  circle.scale = 0.15;

  star = createSprite(160, 450, 50, 50);
  star.addImage(starImg);
  star.scale = 0.08;

  heart = createSprite(370, 475, 50, 50);
  heart.addImage(heartImg);
  heart.scale = 0.15;

  firstPageGroup = createGroup();
  firstPageGroup.add(dotted);
  firstPageGroup.add(triangle);
  firstPageGroup.add(rectangle);
  firstPageGroup.add(square);
  firstPageGroup.add(circle);
  firstPageGroup.add(star);
  firstPageGroup.add(heart);

  firstPage = new FirstPage;
  secondPage = new SecondPage;
}

function draw() {
  background("yellow");
  textSize(50);
  fill(0);
  strokeWeight(3);
  stroke(0)
  text("SHAPE LEARNING", 190, 65);
  
  firstPage.display();
  console.log(gameState)

  if(gameState == 0){
    textSize(20);
    strokeWeight(2);
    text("LEARNING SHAPES NOT ONLY HELPS CHILDREN IDENTIFY ", 115, 140);
    text("AND ORGANIZE VISUAL INFORMATION , IT WILL HELP THEM ", 110, 175);
    text("LEARN SKILLS IN OTHER CURRICULUM AREAS INCLUDING", 115, 210);
    text("READING , MATH , AND SCIENCE LEARNING SHAPES ALSO", 115, 245);
    text("HELPS THEM UNDERSTAND OTHER SIGNS AND SYMBOLS...", 115, 280);
    text("THIS APP WILL HELP THEM TO REMEMBER THE SHAPES", 115, 450);
    text("WITH VERY EASY CONCEPTS AND THEY CAN IDENTIFY", 115, 485);
    text("THE SHAPES LIFELONG . IT WOULD BASICALLY EXPLAIN.", 115, 520);
    text("EXAMPLE : RECTANGLE - IT IS A SHAPE WHICH IS MADE ", 115, 555);
    text("AFTER STRETCHING THE SQUARE . SUCH FUN EXANPLES", 115, 590);
    text("ARE EMBEDDED IN THE APP.", 115, 625); 
    
    
}
  else if(gameState==1) {
    textSize(20);
    strokeWeight(2);
    text(" 1) BASICS", 120, 150);
    text(" 2) QUADRILATERALS", 120, 190);
    text(" 3) TRIANGLES", 120, 230);
    text(" 4) CIRCLES", 120, 270);
    text(" 5) OTHER SHAPES", 120, 310);
  }
  drawSprites();
  /*textSize(30);
  fill(0);
  strokeWeight(1.5);
  stroke(0)
  text("Shapes are our first step to start learning. ", 130, 150);
  text("This is a simple and enjoyable app for ", 130, 200);
  text("children to recognize and learn shape ", 130, 250);
  text("easily.", 130, 300);*/
 
}