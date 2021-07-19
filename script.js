const resultDOM = document.getElementById('result');
const copybtnDOM = document.getElementById('copy');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('passwordGeneratorForm');

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
 const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
 const NUMBER_CODES = arrayFromLowToHigh(48, 57);
 const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
   .concat(arrayFromLowToHigh(58, 64))
   .concat(arrayFromLowToHigh(91, 96))
   .concat(arrayFromLowToHigh(123, 126));
 

 form.addEventListener('submit', (e) => {
   e.preventDefault();
   const characterAmount = lengthDOM.value;
   const includeUppercase = uppercaseDOM.checked;
   const includeNumbers = numbersDOM.checked;
   const includeSymbols = symbolsDOM.checked;
   const password = generatePassword(
     characterAmount,
     includeUppercase,
     includeNumbers,
     includeSymbols
   );
   resultDOM.innerText = password;
 });