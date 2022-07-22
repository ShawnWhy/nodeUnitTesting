
var phonenumbers= document.querySelectorAll(".location-component-container .field-phone-number a")


phonenumbers.forEach(element=>{

if(element.innerText=="202-877-1760"){

element.innerText = "202-877-1123 "
element.href="tel:+12028771123 "

}

})