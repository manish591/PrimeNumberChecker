const inputNumber = document.querySelector('.inputnumberhere');
const validatePrimeNumberButton = document.querySelector('.validateprimenumber');
const output = document.querySelector('.output');

function checkPrimeNumber() {
    let userInputValue = Number(inputNumber.value);
    let isPrime = true;

    if(inputNumber.value === "") {
        return output.innerText = `Please Input!`;
    }

    setTimeout(() => {
        if(userInputValue === 1) {
            return output.innerText = `${userInputValue} Is a Co-Prime number.` 
        }
    
        for(let i = 2; i < userInputValue; i++) {
            if(userInputValue % i === 0) {
                isPrime = false;
            }
        }
        
        if(isPrime) {
            output.innerText = `${userInputValue} is a prime number.`
        } else {
            output.innerText = `${userInputValue} is not a prime number.`
        }
    }, 2000)
}

validatePrimeNumberButton.addEventListener('click', checkPrimeNumber);