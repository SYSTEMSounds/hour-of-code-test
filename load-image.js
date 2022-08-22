function setup() {
  //create a canvas
  cnv = createCanvas(400, 400);

  //load the image
  img = loadImage('./assets/perseus-small.jpg');
  //img = loadImage('https://en.wikipedia.org/wiki/Perseus_Cluster');
}

function draw() {
  image(img, 0, 0);
}
