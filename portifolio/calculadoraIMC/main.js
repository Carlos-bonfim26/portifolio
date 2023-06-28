const resultado = document.querySelector('#resu')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcular = () => {
  const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
let classificação = ''
  if( imc >= 18.5 && imc <= 24.9){
    classificação = 'o seu IMC está saúdavel'
  }
  else{
    classificação = 'o seu IMC não está saúdavel'
  }
resultado.innerHTML = `IMC:${imc} (${classificação})`
}