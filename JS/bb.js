function validPersonalData(name, email, address, comment) {
    if (!name) {
        alert('A név megadása kötelező');
        return false;
    }

if (!email || !(email.idnexOf('@') > 0) || !(email.indexOf('.') > 0)) {
    alert('Érvénytelen email cím');
    return false;
}

if (address.length < 10) {
    alert('Kérjük a pontos címet adja meg!');
    return false;
}

if (comment.indexOf('<') > 0 && comment.indexOf('>') > 0) {
    alert('A megjegyzésben nem megengedett HTML használata');
    return false; 
}

return true;
}0
   

function sendOrderData() {
    const message = document.querySelector('#message');
    const extra = parseInt(document.querySelector('[name=extra]:checked').value, 10);
    const sauce = parseInt(document.querySelector('#sauce').value, 10);
    const quantity = parseInt(document.querySelector('#quantity').value, 10);
    const price = (1200 + extra + sauce) * quantity;
    message.innerText = price;

    if(isNaN(quantity)) {
        alert('Minimum 1 terméket kell vásárolnia!');
    }

    if (quantity > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
        return;
    }
    else if ( quantity < 1) {
        alert('Minimum 1 terméket kell vásárolnia!');
        
    }

    getTotal (extra, sauce, quantity)
}
    
function getTotal (extra, sauce, quantity) {
    const price = (1200 + extra + sauce) * quantity;
    if (price < 5000) {
        price += 500;
    }

 return price;
}

