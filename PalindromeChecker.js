const CheckBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const checkPalindrome =()=>{
    const text = textInput.value;
    const reverseText = text.split('').reverse().join('');
    if(text === null){
        result.textContent = "Please input a value"
    }
    
}