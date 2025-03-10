let xbola = 300;
let ybola = 200;
let zbola = 45;
let vxbolinha = 5;
let vybolinha = 6;


function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    background(0);
    criaCirculo();
    velocidadeBola();
    limiteBolax();
    limiteBolay();
    
    

    function criaCirculo(){
        circle(xbola, ybola, zbola);
        
    }
    function velocidadeBola(){
    xbola += vxbolinha;
    ybola += vybolinha;
    }
    function limiteBolax(){
    if (xbola > 600 || xbola < 0)
        vxbolinha *= -1;
}
    
    function limiteBolay(){

    if(ybola > 400 || ybola < 0)
        vybolinha*= -1;
}

}

