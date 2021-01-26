btnAlimentar = document.querySelector('#alimentar');
btnAlimentar.addEventListener('click', alimentar);

let request = new XMLHttpRequest();

function alimentar() {
    btnAlimentar.disabled = true;
    btnAlimentar.classList.toggle('is-loading');
    let url = 'https://api.thingspeak.com/update?api_key=CHVW2UGHP02V77G8&field1=1';
    request.open('GET', url);
    request.send();
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            setTimeout(function() {
                url = 'https://api.thingspeak.com/update?api_key=CHVW2UGHP02V77G8&field1=0';
                request.open('GET', url);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        btnAlimentar.classList.toggle('is-loading');
                        btnAlimentar.disabled = false;
                    }
                }
            }, 15000);
        }
    }
}