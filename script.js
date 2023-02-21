const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input= document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//! El innetHTML convierte todo a codigo
h1.innerHTML='Nuevo <br> Titulo';
//! El innetText convierte a texto
h1.innerText='Nuevo <br> Titulo';

console.log(h1.getAttribute('class'));

//! Modificar una clase
h1.getAttribute('class', 'rojo');

//! Agrega la clase
h1.classList.add('rojo');
//! Edita la clase
h1.classList.remove('verde');

//! aca podemos cambiar el value directamente, sin llamar a getAttribute 
input.value= "456";


//! Crear un elemento desde 0
const img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg');
console.log(img);

//!hacer que el contenedor sea igual a un objeto vacio
pid.innerHTML="";//? se cologa el "", para que sea un string vacio

//! append y appendChild agregan el contenido despues del parrafo
pid.append(img);