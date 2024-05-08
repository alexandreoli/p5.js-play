var cols, rows;
var w = 40;
var mat = [];

var current;

//0 = 4.5%  __ 10 = 50%
var densidade = 1; // de 1 a 10 representando qts % da grid sera obstaculos

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(30);

  for (var i = 0; i < cols; i++) {
    var row = [];
    for (var j = 0; j < rows; j++) {
      var val = floor(random(12 - densidade));
      row.push(new Cell(i, j, val));
    }
    mat.push(row);
  }
  mat[0][0].val = -1;
  mat[cols - 1][rows - 1].val = -1;
  current = mat[0][0];
}

function draw() {
  background(220, 255, 220);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      mat[i][j].show();
    }
  }

  // current.highlight();
  current = current.findPath();

  // current = current.findPath();
}

Cell.prototype.findPath = function () {
  console.log("(" + this.i + ", " + this.j + ")");

  var i = this.i;
  var j = this.j;

  let dx = rows - i;
  let dy = cols - j;
  let xory = dx - dy; //>0 estamos mais distante no eido x se <0 mais distante no eixo y
  console.log(i, j, xory, rows);

  if (this.val > 20) {
    this.val += 10;
  } else if (this.val > 0) {
    this.val = 25;
  }

  if (xory >= 0) {
    if (i + 1 < rows) {
      return mat[i + 1][j].val ? mat[i + 1][j] : mat[i][j + 1];
      // return mat[i + 1][j];
    }
  } else if (j + 1 < cols) {
    return mat[i][j + 1].val ? mat[i][j + 1] : mat[i][j];
    // return mat[i][j + 1];
  }
};

function Cell(i, j, val) {
  this.i = i;
  this.j = j;
  this.val = val;

  this.highlight = function () {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(127, 255, 0, 200);
    rect(x, y, w, w);
  };

  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;

    if (this.val == 0) {
      noStroke();
      fill(0, 0, 0); // Black color
      rect(x, y, w, w);
    }
    if (this.val == -1) {
      noStroke();
      fill(255, 0, 0); // Red color
      rect(x, y, w, w);
    }
    if (this.val > 0) {
      noStroke();
      fill(220 - (this.val - 20) * 20, 220 - (this.val - 20) * 20, 255);
      rect(x, y, w, w);
    }
  };
}
