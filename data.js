const ticketValue = 200;

const toComplete = document.getElementById('toComplete');
const numTicket = document.getElementById('numTicket');
const selection = document.getElementById('seleccion');
const data = {
   numTicket: 0,
   selection: ' '
};
const totalToPay = document.getElementById('totalToPay');

const btnDelete = document.getElementById('boton1');
const btnResumen = document.getElementById('boton2');

const basic = document.getElementById('basic');
const complete = document.getElementById('complete');
const full = document.getElementById('full');

const cards = document.getElementsByClassName('card')
const cardBasic = document.getElementById('card1')
const cardComplete = document.getElementById('card2')
const cardFull = document.getElementById('card3')

const descBasic = 0.85
const descComplete = 0.5
const descFull = 0.2

const form = document.querySelector('.formulario');
