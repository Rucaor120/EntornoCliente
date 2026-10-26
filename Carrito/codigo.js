function comprarProducto() {
    // 1. Recogemos lo que el usuario ha escrito en las cajas de texto
    let cant = document.getElementById("cantidad").value;
    let desc = document.getElementById("descripcion").value;

    // Comprobamos que no estén vacíos
    if (cant === "" || desc === "") {
        console.log("Por favor, rellena la cantidad y la descripción.");
        return;
    }

    // 2. Guardamos el producto en una cookie
    document.cookie = desc + "=" + cant + "; path=/";

    console.log("Añadido al carrito: " + cant + " " + desc);

    // 3. Limpiamos las cajas de texto para el siguiente producto
    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
}

function verCarrito() {
    console.log("--- CONTENIDO DEL CARRITO ---");

    // Si no hay cookies, avisamos y salimos
    if (document.cookie === "") {
        console.log("El carrito está vacío.");
        return;
    }

    // Separamos cada cookie con .split("; ")
    let listaProductos = document.cookie.split("; ");
    let totalProductos = 0;

    // Recorremos la lista de productos uno por uno
    for (let i = 0; i < listaProductos.length; i++) {
        // Separamos descripción y cantidad usando el signo "="
        let datos = listaProductos[i].split("=");
        
        let descripcion = datos[0];
        let cantidad = parseInt(datos[1]); // Pasamos de texto a número

        // Comprobamos que la cantidad sea un número válido
        if (!isNaN(cantidad)) {
            console.log("- " + cantidad + " " + descripcion);
            totalProductos = totalProductos + cantidad;
        }
    }

    console.log("TOTAL DE PRODUCTOS: " + totalProductos);
    console.log("-----------------------------");
}