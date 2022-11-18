var five = $('#5-perc');
var ten = $('#10-perc');
var twentyFive = $('#25-perc');
var amount = 0;

function update()
{
    amount = $('#amount').value;

    if (twentyFive.checked = true) {
        total = amount + checked();
    } else {
        total = amount * checked();
    }
    
    if (amount != 0) {
        $('total').innerHTML = "£" + total;
    } else {
        $('total').innerHTML = "£xx.xx"
    }
}

function checked() {
    if (five.checked == true) {
        return 1.05;
    } else if (ten.checked == true) {
        return 1.1;
    } else if (twentyFive.checked){
        return 1.25;
    } else {
        if (amount*1.25 < 2 + amount.value*twentyFive.value) {
            return 2 + amount.value * twentyFive.value;
        } else {
            return 1.25;
        }
    }
}