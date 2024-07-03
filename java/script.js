let guests = ['marco', 'fabrizio'];
let check_guest = false
document.getElementById('check-guest').addEventListener('click', function () {

    let name = document.getElementById('name').value;
    for (let i = 0; i < guests.length; i++) {
        if (guests[i], toLowerCase() === name.toLowerCase()) {
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


let numbers = [];

for (let i = 0; i < 6; i++) {



}
