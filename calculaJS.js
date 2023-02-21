const h1 = document.querySelector('h1');
const form= document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

                  //nombre  /   Nombre 
                //de la accion/ de la funcion
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    event.preventDefault();
    const sumaInputs=+input1.value + +input2.value; //!para hacer que sume como numero y no como string se aumenta el "+"
    pResult.innerText="Resultado: " + sumaInputs;
}

//! o puedes hacerlo de esta forma, para hacer la conversion a numeros
/*
function btnOnClick(){
    console.log(Number(input1.value) + parseInt(input2.value));
    //! Usando "Number" o "parseInt" convierte el string el numero, para poder realizar la suma
}*/