let objPlato = {
    nombre: '',
    precio: '',
    cantidad: ''
}

let objCliente = {
    pedido: [
        objPlato = {
            nombre: 'Genaro',
            precio: '$7.00',
            cantidad: '2'
        }
    ]
}


const buttonsDiv = document.querySelectorAll('.buttonDiv');
document.addEventListener('DOMContentLoaded', () => {
    buttonsDiv.forEach(button => {
        button.addEventListener('click', cambiarBotones);
        button.addEventListener('mouseleave', resetearBotones);
    });
})

function resetearBotones(e){
    const button = e.currentTarget;
    button.classList.add('bg-white', 'cursor-pointer');
    if(button.classList.contains('activo')){
        button.classList.remove('bg-Red', 'activo');
        for (let i = 0; i < button.children.length; i++){
            if(button.children[i].classList.contains('hidden')){
                button.children[i].classList.remove('hidden');
            } else {
                button.children[i].classList.add('hidden');
            }
        }
    }
}

function cambiarResetearButton(button){
    for (let i = 0; i < button.children.length; i++){
        if(button.children[i].classList.contains('hidden')){
            button.children[i].classList.remove('hidden');
        } 
    }
}

function cambiarBotones(e){
    const button = e.currentTarget;
    button.classList.remove('bg-white', 'cursor-pointer');
    if(!button.classList.contains('activo')){
        for (let i = 0; i < button.children.length; i++){
            button.classList.add('bg-Red', 'activo');
            if(button.children[i].classList.contains('hidden')){
                button.children[i].classList.remove('hidden');
            } else {
                button.children[i].classList.add('hidden');
            }
        }
    }

    const negativo = button.querySelector('.negativo');
    const positivo = button.querySelector('.positivo');
    positivo.addEventListener('click', sumarCantidad);
    negativo.addEventListener('click', restarCantidad);

}

function sumarCantidad(e){
    const cantidad = e.currentTarget.previousElementSibling;
    cantidad.textContent = parseInt(cantidad.textContent) + 1;

    const nombre = cantidad.parentElement.nextElementSibling.nextElementSibling.textContent;
    const precio = cantidad.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent;

    actualizarObjetos(nombre, precio, cantidad.textContent);
}

function restarCantidad(e){
    const cantidad = e.currentTarget.nextElementSibling;
    if ( parseInt(cantidad.textContent) > 0 ){
        cantidad.textContent = parseInt(cantidad.textContent) - 1;
    }
}

function actualizarObjetos(nombre, precio, cantidad){
    const {pedido} = objCliente;
    console.log(pedido)
    pedido.forEach(producto => {
        console.log(producto)
    })
    objPlato.nombre = nombre;
    objPlato.precio = precio;
    objPlato.cantidad = cantidad;
}