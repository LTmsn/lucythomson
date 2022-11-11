var five = document.getElementById("5-perc");
var ten = document.getElementById("10-perc");
var twentyFive = document.getElementById("25-perc");

document.getElementById("total").innerHTML = "£xx.xx";

var amount = 0;
amount = parseFloat(document.getElementById("amount").value);
var perc = checked().value;

var total = amount * perc;

if (amount != NaN) {
    document.getElementById("total").innerHTML = "£" + total;
}

function checked() {
    if (five.checked == true) {
        return five;
    } else if (ten.checked == true) {
        return ten;
    } else {
        return twentyFive;
    }
}