let analise=document.querySelector("#analise");

function digOne(CPF){
let u = 10;
let valor = 0;
for(let i = 0;i<9;i++){
let char =CPF.slice(i,i+1)
  valor=char*u+valor;
  u-=1;}
let div= valor/11;
let int= parseInt(div);
let teste= (div-int).toFixed(2)*10;
let resultado=Math.ceil(teste);
if (resultado <=1){
  resultado=0
  return resultado}
else{resultado=11-resultado;
     return resultado}}

function digTwo(CPF){
let u=11;
let valor=0;
for(let i = 0;i<10;i++){
  let char =CPF.slice(i,i+1);
  valor=char*u+valor;
  u-=1}
let div=valor/11;
let int=parseInt(div);
let teste=(div-int).toFixed(2)*10;
let resultado=Math.ceil(teste);
if(resultado<=1){
  resultado=0;
  return resultado}
else{resultado=11-resultado;
    return resultado}}


function anali(){
  let CPF=document.querySelector("#CPF").value;
  primeiroNumero=digOne(CPF);
  let analise1=CPF.slice(0,9);
  analise1=analise1+primeiroNumero;
  segundoNumero=digTwo(analise1);
  let analise2=analise1+segundoNumero;
  alert(analise2)
  alert(CPF)
  if(CPF==analise2){
    alert("CPF validado");
    let val= document.querySelector("#val");
    let inv= document.querySelector("#inv");
    
    val.style.display="inline";
    inv.style.display="none";

  }
    else{ let val= document.querySelector("#val");
    let inv= document.querySelector("#inv");
    
    val.style.display="none";
    inv.style.display="inline";}
  
  
}


analise.addEventListener("click",anali)

