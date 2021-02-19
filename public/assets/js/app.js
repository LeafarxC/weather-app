console.log('Javascript do front carregou');

const form = documen.querySelector('form');
const cityinput = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const sucessMessage = document.querySelector('.sucess');


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const city = cityinput.value;

    errorMessage.textContent = "A carregar...";

    fetch('http://localhost:3000/weather?city=' + city ).then((response) => {
        response.json().then((data) => {
            if(data.error){
                errorMessage.textContent = data.error;
            }else{
                errorMessage.textContent = '';
                sucessMessage.innerHTML = data.forecast;
            }
        });
    });
});