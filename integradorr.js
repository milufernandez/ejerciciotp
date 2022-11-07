numTicket.addEventListener('input', function(event){
    data.numTicket = event.target.value;
});

seleccion.addEventListener('change', function(event){
    data.seleccion = event.target.value;
});

btnResumen.addEventListener('click', function(event){
    event.preventDefault();
    const {numTicket, seleccion} = data;
    let resultado = 0;    
    let indice = 0;
    indice = totalToPay.textContent.indexOf('$');
    totalToPay.textContent = totalToPay.textContent.substring(0, indice+1);
    if(seleccion === 'full'){
        resultado = (valorTicket*numTicket)*descFull;
        console.log("El plan seleccionado es: ", seleccion);
    }else if(seleccion === 'complete'){
        resultado = (valorTicket*numTicket)*descComplete;
        console.log("El plan seleccionado es: ", seleccion);
    } else if (seleccion==='basic') {
        resultado = (valorTicket*numTicket)*descBasic;
        console.log("El plan seleccionado es:" + seleccion)
    } else {
        console.log ("No selecciono su plan")
    }
    totalToPay.textContent = "Total a pagar $" + resultado;
   return;
});

btnDelete.addEventListener('click', function(event){
    event.preventDefault();
    let indice = 0;
    indice = totalToPay.textContent.indexOf('$');
    totalToPay.textContent = totalToPay.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});