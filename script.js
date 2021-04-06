const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue='0';

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

//matches methodu kontrol etmek için kullanılır "if(!e.target.matches('button'))  tıklanılan eleman button değilse;"
// return =>şarttaki olay gerçekleşirse alt satırdaki kodları çalıştırmaz.
keys.addEventListener('click',function(e){
    const element = e.target;

    if(!element.matches('button')) return;  // return => eğer tıkladığımız alan buton değilse fonksiyon dönmeyecek

    if(element.classList.contains('oparator')) {
        console.log('oparator',element.value);
        return; // olay gerçekleşirse alt satırdaki kodları çalıştırmaz.
    }

    if(element.classList.contains('decimal')) {
        //console.log('decimal',element.value);
        inputDecimal();
        return; // olay gerçekleşirse alt satırdaki kodları çalıştırmaz.
    }

    if(element.classList.contains('clear')) {
        //console.log('clear',element.value);
        clear();
        updateDisplay();
        return; // olay gerçekleşirse alt satırdaki kodları çalıştırmaz.
    }
    //console.log('number',element.value);
    inputNumber(element.value);
    updateDisplay();
});

//displayValue 0 a eşit değilse , girilen rakamlar yanına eklenerek devam edicek
function inputNumber(num){
    displayValue = displayValue === '0'? num: displayValue + num;
}

//(!displayValue.includes('.')) => "includes" içermek anlamına gelir
function inputDecimal(){
    if (!displayValue.includes('.')){ // '.' operatorunu içermiyorsa dönecek olan döngü
        displayValue += '.';
    }
}

function clear(){
    displayValue = '0';
}