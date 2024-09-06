function calcular(precio, procentajeDeDescuento){
    const descuento = (precio * procentajeDeDescuento)/100
    const precioConDescuento = precio-descuento;
    return precioConDescuento;
}

const precioOriginal = 120000;
const descuentoParaLaPrenda = 20;

const precioFinal = calcular(precioOriginal, descuentoParaLaPrenda);
console.log('el precio original es: $..' +precioOriginal);
console.log('el descuento es de $..' +descuentoParaLaPrenda +'%');
console.log('precio con descuento es: $....' +precioFinal);

