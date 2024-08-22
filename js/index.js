const cart = document.querySelector('#cart')
const template = document.querySelector('#template').content
const templateFooter = document.querySelector('#templateFooter').content
const footer = document.querySelector('#footer')
const fragment = document.createDocumentFragment()
let cartArray = [] //Arreglo de objetos, atributos de cada producto




document.addEventListener('click', (e) => { //la e es el evento
    //console.log('@Nint: evento: click => ', e) //Click en cualquier zona
    if(e.target.matches('.card button')){
        addCart(e)
        drawCart()
    }

     if(e.target.matches('.list-group-item .btn-success')){
        btnAdd(e)
        
    }

     if(e.target.matches('.list-group-item .btn-danger')){
        btnLess(e)
    
    }

     if(e.target.matches('.btn-outline-primary')) {
        finalizarCompra();
    }
})

const btnAdd = e => {
    cartArray =cartArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
        }
        return item
    })
    drawCart()
}

const btnLess = e => {
    cartArray = cartArray.filter((item) => { 
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 1) {
                item.cantidad--;
                return item;
            }
        } else {
            return item;
        }
    });
    drawCart();
}

const finalizarCompra = () => {
    cartArray = []; // Reinicia el array del carrito
    drawCart(); // Redibuja el carrito, que ahora estará vacío
    footer.textContent = ''; // Limpia el footer
}


const addCart = e => { //Mas de un parametro va entre parentesis
    const product = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
        
        
    }
    const index = cartArray.findIndex((item) => item.id === product.id) //Funcion de callback
    if(index === -1){
        cartArray.push(product)
    } else {
        cartArray[index].cantidad++
    }
    console.log('@Nint producto =>', product) //Click en boton
}

const drawCart = () => {
    cart.textContent = ''
    cartArray.forEach((item) => {
        const clone = template.cloneNode(true)
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.rounded-pill').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
        clone.querySelector('.btn-success').dataset.id = item.id
        clone.querySelector('.btn-danger').dataset.id = item.id

        fragment.appendChild(clone)

    })

    cart.appendChild(fragment)
    drawFooter()
}

const drawFooter = () => {
    footer.textContent = ''
    const total = cartArray.reduce((acc, current,) => acc + current.precio * current.cantidad, 0)
    const clone = templateFooter.cloneNode(true)
    clone.querySelector('p span').textContent = total
    footer.appendChild(clone)
}
