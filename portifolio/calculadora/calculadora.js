function insert(num){
let nume = document.getElementById('resu').innerHTML 
document.getElementById('resu').innerHTML = nume + num;

}
function clean(){
    document.getElementById('resu').innerHTML = '';
}
function back(){
    let resultado = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    let calcu = document.getElementById('resu').innerHTML;
    if(calcu){
        document.getElementById('resu').innerHTML = eval(calcu)
    }
    else{
        document.getElementById('resu').innerHTML = 'nada a calcular'
    }
}
