numTicket.addEventListener('input', function(event){
    data.numTicket = event.target.value;
});

selection.addEventListener('change', function(event){
    data.selection = event.target.value;
});


numTicket.addEventListener('keyup', function(event) {
    const value = Number(event.target.value);
    if (isNaN(value)) alert ('Solo se permiten numeros');
    if (value < 0) alert ('No se permiten numeros negativos');
    if (value === 0) alert ('Seleccione la cantidad de tickets');
})


function checkError(){
   let information = false
    const value3 =
    formulario.opciones.value === 'basic' && 'Basico' ||
    formulario.opciones.value === 'complete' && 'Completo' ||
    formulario.opciones.value === 'full' && 'Full'
}
function enviar (e){
    e.preventDefault()
    checkError()
}

function overCard (card){
    card.classList.replace('border-muted', 'border-danger')   
}
function leaveCard (card) {
    card.classList.replace('border-danger', 'border-muted')  
}
function clickCard (card){
    card.ariaChecked = true
    card.classList.replace('border-danger', 'border-success') 
    card.classList.replace('border-muted', 'border-success') 
    
    
    selection.value = 
    card.id === 'card1' && 'basic' ||
    card.id === 'card2' && 'complete' ||
    card.id === 'card3' && 'full'

    for (let item of cards) {
        if(item.id !== card.id) {
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
}

function assignEvents (card){
    card.addEventListener('mouseover', () => overCard(card))
    card.addEventListener('mouseleave', () => leaveCard(card))
    card.addEventListener('click', () => clickCard(card))
}

assignEvents(cardBasic)
assignEvents(cardComplete)
assignEvents(cardFull)

function selectDo(){
    console.log(selection.value)
    selection.value === 'basic' && clickCard(cardBasic)
    selection.value === 'complete' && clickCard(cardComplete)
    selection.value === 'full' && clickCard(cardFull)
}
selection.addEventListener('change', selectDo)