var price= document.querySelector("#price");

var realPrice= document.querySelector('.rp');

var realPriceS= document.querySelector('.sym');

var XHR = new XMLHttpRequest();

var currency= "USD";

var symbols = { "USD" : "$", "INR": "₹"};

setInterval( function() {
    
    XHR.onload= function(){
        
        realPrice.style.opacity=0;
        var prc = JSON.parse(XHR.responseText)[currency].last;
        var prcn= realPrice.innerText;
        console.log("Prnc"+prcn.match(/[+-]?\d+(\.\d+)?/g));
        if( prc!= prcn.match(/[+-]?\d+(\.\d+)?/g))
        {
            console.log("Change");
        setTimeout(function(){
        realPrice.style.opacity=1;
        realPrice.innerHTML = symbols[currency]+prc;
        },1000);
        }   
        else
            realPrice.style.opacity=1;
        console.log(prc);
    }
    
    XHR.open("GET","https://blockchain.info/ticker");
    XHR.send();
}, 2000);

var usd= document.getElementById("usd");

usd.addEventListener('click', function(){
    currency="USD";
});

var inr= document.getElementById("inr");

inr.addEventListener('click', function(){
    currency="INR";
});

