btnResumen.addEventListener('click', function(event){
    event.preventDefault();
    const {numTicket, selection} = data;
    let result = ' ';    
    let indice = 0;
    indice = totalToPay.textContent.indexOf('$');
    totalToPay.textContent = totalToPay.textContent.substring(0, indice+1);
    
    if (selection === 'basic'){
        result = (ticketValue*numTicket)*descBasic
        console.log("El plan seleccionado es:" + selection);
    }else if(selection === 'complete'){
        result = (ticketValue*numTicket)*descComplete
        console.log("El plan seleccionado es: ", selection);
    }else if(selection === 'full') {
        result = (ticketValue*numTicket)*descFull
        console.log("El plan seleccionado es: ", selection);
    }else {
        alert('Seleccione su plan');
        console.log ("No selecciono su plan");
    }

    totalToPay.textContent = "Total a pagar $" + result;
    return;
});

btnDelete.addEventListener('click', function(event){
    event.preventDefault();
    let indice = 0;
    indice = totalToPay.textContent.indexOf('$');
    totalToPay.textContent = totalToPay.textContent.substring(0, indice+1);
    form.reset();

    for (let item of cards) {
        item.classList.replace('border-success', 'border-muted')
}
    return;
});