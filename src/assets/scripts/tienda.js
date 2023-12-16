// Clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

function generarImagenes(productos, zona) {
    productos.forEach((producto) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `Precio: ${producto.precio}€`;

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombre);
        productoDiv.appendChild(precio);

        zona.appendChild(productoDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const zonaProductosMuebles = document.querySelector(".productosMuebles");
    const zonaProductosContenedores = document.querySelector(".productosContenedores");
    const zonaProductosMenajes = document.querySelector(".productosMenajes");

    // Ejemplo de productos (reemplaza con tus datos)
    const productosMuebles = [
        new Producto("Mesa", 20, "https://www.ikea.com/es/es/images/products/lagkapten-adils-escritorio-blanco__0977229_pe813472_s5.jpg?f=xl"),
        new Producto("Silla", 12, "https://www.ikea.com/es/es/images/products/gronsta-silla-int-ext-blanco__1243689_pe920720_s5.jpg?f=xl"),
        new Producto("Escritorio", 28, "https://www.ikea.com/es/es/images/products/micke-escritorio-blanco__0736018_pe740345_s5.jpg?f=xl"),
        new Producto("Mesita de Noche", 15, "https://www.ikea.com/es/es/images/products/kullen-comoda-2-cajones-blanco__0651179_pe706791_s5.jpg?f=xl"),
        new Producto("Estantería", 28, "https://www.ikea.com/es/es/images/products/kallax-estanteria-blanco__0644757_pe702939_s5.jpg?f=xl"),
        new Producto("Taburete", 8, "https://www.ikea.com/es/es/images/products/marius-taburete-blanco__0727398_pe735650_s5.jpg?f=xl"),
    ];

    const productosContenedores = [
        new Producto("Caja de tela", 30, "https://m.media-amazon.com/images/I/81Voq-Y8vCL._AC_SL1500_.jpg"),
        new Producto("Cesto de ropa", 25, "https://m.media-amazon.com/images/I/71HE0FQCZyL._AC_SL1500_.jpg"),
        new Producto("Cesta", 8, "https://m.media-amazon.com/images/I/81T5+0-tsPL._AC_SL1500_.jpg"),
        new Producto("Papelera Grande", 9, "https://m.media-amazon.com/images/I/51KhOC4tnaL._SL1500_.jpg"),
        new Producto("Papelera Pequeña", 4.5, "https://m.media-amazon.com/images/I/71MoQrB7lxL._AC_SL1500_.jpg"),
        new Producto("Contenedor Plástico", 9, "https://m.media-amazon.com/images/I/61JSbEZ9dPL._AC_SL1400_.jpg"),
    ];

    const productosMenajes = [
        new Producto("Platos (12)", 20, "https://m.media-amazon.com/images/I/51BGfgQi4gL._AC_SL1500_.jpg"),
        new Producto("Tenedores (12)", 12, "https://m.media-amazon.com/images/I/71IOzzZoNNL._AC_SL1500_.jpg"),
        new Producto("Cucharas (12)", 12, "https://m.media-amazon.com/images/I/61WRxiW1anL._AC_SL1500_.jpg"),
        new Producto("Cuchillos (12)", 12, "https://m.media-amazon.com/images/I/51KSsirmwQL._AC_SL1383_.jpg"),
        new Producto("Vasos (6)", 12, "https://m.media-amazon.com/images/I/51sDKXAl-pL._AC_SL1200_.jpg"),
        new Producto("Bol", 2, "https://m.media-amazon.com/images/I/41MPkeRQwTL._AC_SL1500_.jpg"),
    ];

    generarImagenes(productosMuebles, zonaProductosMuebles);
    generarImagenes(productosContenedores, zonaProductosContenedores);
    generarImagenes(productosMenajes, zonaProductosMenajes);
});
