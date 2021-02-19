// setTimeout(() => {
//     console.log('Acabaram os 2 segundos')
// }, 2000);


// const names = ['Vitor', 'tino', 'Rafael', 'Joel'];
// const shortnames = names.filter((name) => {
//     return name.length <= 4;
// });

// console.log(shortnames);

// const geocode = (city, callback) => {
//     setTimeout(() => {
        
    
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }

//     callback(data);
// }, 2000);
// }

// geocode('porto', (data) => {
// console.log(data);
// });

// const add = (a, b, callback) => {

//     setTimeout(() => {
//         callback(a + b);
     
//     }, 2000);
// }
// add(1, 4, (sum) => {
//     console.log(sum);
// });


// const str = ' olá mundo, eu sou o Rafa';

// console.log(str.trim());

// console.log(str.replaceAll(' ', ''));

// console.log(str.indexOf(','));

// console.log(str.substring(0, str.indexOf(',')));

// console.log(str.substring(str.indexOf(',') + 1));

// console.log(str.slice(-4));

// console.log(str.substr(-4));

const concat = (palavra1, palavra2, callback) => {

    setTimeout(() => {
     
        callback(palavra1 + " " + palavra2);

      }, 1000);
}

concat('olá', 'Mundo', (result) => {
    console.log(result);
});


const bigger = ( [array, callback) => {

    setTimeout(() => {

        let maxIndex = 0;
        for(let i = 1; i < array.length; i++){
            maxIndex = array[i].length >array[maxIndex]. length ? i : maxIndex;
        }
        callback(array[maxIndex]);
        
    }, 2000);
}


bigger(['Vitor', 'tino', 'Rafael', 'Joel']), (name) => {
    console.log(name);
}

