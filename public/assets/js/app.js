console.log('Javascript do front carregou');

const form = document.querySelector('form');
const cityinput = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const successMessage = document.querySelector('.success');


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const city = cityinput.value;

    errorMessage.textContent = "A carregar...";

    fetch('/weather?city=' + city ).then((response) => {
        response.json().then((data) => {
            if(data.error){
                errorMessage.textContent = data.error;
            }else{
                errorMessage.textContent = '';
                successMessage.innerHTML = data.forecast;
            }
        });
    });
});