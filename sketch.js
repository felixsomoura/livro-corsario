var tabela;

function preload() {
  tabela =
    loadTable ("SRD_Spells_TCC.csv","csv","header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  //console.log(url);
  //getURL();
  getURLParams();
  var params = getURLParams();
  
  background(29, 29, 27);
  
  var divCaixa = createDiv('');
  divCaixa.position(0, 0);
  
  if (windowWidth >= 500) {
       divCaixa.addClass('caixaBig');
      }
  
  if (windowWidth <= 500) {
       divCaixa.addClass('caixaSmall');
      }
  
  else {}
  
  divCaixa.addClass('caixa');
  divCaixa.center('horizontal'); 
  
  pTitulo = createP(tabela.get(2,0));
  pTitulo.addClass('titulo');   
  pTitulo.parent(divCaixa);
  
  pCategoria = createP('Magia de' + " " + tabela.get(2,3));
  pCategoria.addClass('categoria');   
  pCategoria.parent(divCaixa);
  
  hrLinha = createP('');
  hrLinha.addClass('hr');   
  hrLinha.parent(divCaixa);
  
  pCorpo = createP(tabela.get(2,14));
  pCorpo.addClass('corpo');   
  pCorpo.parent(divCaixa);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}