var circles  = [];
var nCicles  = 0;
var path = [];

var current;
var cCopy;

var start = false;

function setup() {
  cnv =   createCanvas(400,400);
  cnv.mouseClicked(false);
  frameRate(15);
  button = createButton('findPath');
  button.position(335, 400);
  button.mousePressed(startAlgo);
  
}



function draw() {
  background(244, 248, 252);
  for(var i = 0; i<circles.length; i++){
    circles[i].show();
  }
  
  showPath(path);
  
  stroke(200);
  line(mouseX, 0, mouseX, height);
  line(0,mouseY, height, mouseY);
  describe('horizontal black line moves left and right with mouse x-position');
    
  if(start){
    current.highlight();
    console.log("cC: ",cCopy)
    var next = current.findCloser();

    if(next){
      //console.log("i: ",next.i)
      path.push(current);
      removerElemento(cCopy, current);
      //cCopy.pop(current)
      //console.log("cCopy: ",cCopy)
      current = next;
    } else {
      start = false;
    }
  }
}

function showPath(a){
  stroke(20);
  for(var k = 0; k<a.length-1; k++){
    line(a[k].i,a[k].j,   a[k+1].i,a[k+1].j);
  }
  if(a.length>1){
    line(a[a.length-1].i,a[a.length-1].j,   a[0].i,a[0].j);
  }
}

function startAlgo(){
  path = [];
  start = true;
  cCopy = circles.slice();
  current = cCopy[0];
  console.log("c",cCopy)
  //current.visited = true;
  path.push(current);
  removerElemento(cCopy, current)
  console.log(current)

}

function removerElemento(array, elementoParaRemover) {
  // Encontrar o índice do elemento no array
  let indice = array.findIndex(elemento => elemento === elementoParaRemover);

  // Verificar se o elemento foi encontrado
  if (indice !== -1) {
    // Remover o elemento usando o método splice
    array.splice(indice, 1);
    console.log('Elemento removido:', elementoParaRemover);
  } else {
    console.log('Elemento não encontrado no array.');
  }
}


function mouseClicked(){
  if(mouseX < height && mouseY < height){
    circles.push(new MyCircle(mouseX,mouseY));
  }
}

function MyCircle(i,j){
  this.i = i;
  this.j = j;
  this.visited = false;
  
  this.show = function () {
    noStroke();
    fill(0,255,255);
    circle(this.i  ,this.j  , 20);
  }
  
  this.highlight = function(){
    noStroke();
    fill(0,128,0);
    circle(this.i  ,this.j  , 20);
  }
  
  this.findCloser = function(){
    //const a = floor(random(0,cCopy.length-1))
    
  //IMPLEMENTAR FUNCAO DE ACRA MAIS PROXIMO e att index do proximo nó em 'a'
  let distanciaMinima = 1000000;
  let pontoMaisProximo = null;
  let a =0;
  const b = 0;
  if(b){ 
    for (k=0;k<cCopy.length;k++) {
      let distancia = dist(current.i, current.j, cCopy[k].i, cCopy[k].j);
        for (l=0;l<cCopy.length;l++){
          if(k!=l){
            let distancia2 = distancia;
            distancia2 += dist(cCopy[k].i, cCopy[k].j, cCopy[l].i, cCopy[l].j);
              if (distancia2 < distanciaMinima) {
                distanciaMinima = distancia;
                a = k; 
              }
          }
        }
    }
  }
    
    
  if(!b){
    for (k=0;k<cCopy.length;k++) {
    let distancia = dist(current.i, current.j, cCopy[k].i, cCopy[k].j);
     

     if (distancia < distanciaMinima) {
       distanciaMinima = distancia;
        a = k;
     }
    }
  }
        
    if(a>=0){
      console.log("ret: ",cCopy[a])
      return cCopy[a];
    }else{
      console.log("undef")
      return undefined;
    }
  }
  
  
}
