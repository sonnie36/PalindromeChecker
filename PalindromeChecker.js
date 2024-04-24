const CheckBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');



const checkPalindrome =()=>{

    if (textInput.value === ""){
        alert("Please input a value");
        return
    }
    const text = textInput.value;
    const reverseText = text.split('').reverse().join('');
    if(text===reverseText){
        result.textContent = `${text} is a palindrome`;
    }
    else{
        result.textContent = `${text} is not a palindrome`;
    }
}
CheckBtn.addEventListener('click', checkPalindrome);