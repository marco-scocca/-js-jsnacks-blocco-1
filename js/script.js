let guests = ['marco', 'fabrizio'];
let check_guest = false
document.getElementById('check-guest').addEventListener('click', function () {

    let name = document.getElementById('name').value;
    for (let i = 0; i < guests.length; i++) {
        if (guests[i].toLowerCase() === name.toLowerCase()) {
            check_guest = true
        }
    }
    if (check_guest) {
        console.log('Benvenuto ${name}, si sieda');
    }
    else {
        console.log('non siete in lista');
    }
});


// let numbers = [];

//    for (let i = 1; i <= 6; i++) {
//    let num = prompt('inserisci numero');
//    if (num % 2 != 0) {
//        numbers.push(num)
//    }


//    }
//    console.log(numbers);


document.getElementById('send-number').addEventListener('click', function () {
    let num = document.getElementById('number').value;

    if (num.length === 4) {
        let somma = 0;

        for (let i = 0; i < num.length; i++) {
            console.log(num[i]);
            somma += parseInt(num[i]);

        }
        console.log(somma);
    }
})