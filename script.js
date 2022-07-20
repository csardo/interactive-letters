var listOfBLocks = document.querySelector('.container');

let letterCStack = [];
let letterSStack = [];

const letterCNum = document.getElementsByClassName('letter-c').length;
const letterSNum = document.getElementsByClassName('letter-s').length;

listOfBLocks.addEventListener('click', function(event) {
    let target = event.target;
  
    /* Select if not yet selected */
    if (target.classList.contains('box')) {
      target.classList.add('selected');
      
      if (target.classList.contains('letter-c')) {
        letterCStack.push(target); 
        
        if (letterCStack.length === letterCNum) {
          clearLetter(letterCStack);
        }
      } else if (target.classList.contains('letter-s')) {
        letterSStack.push(target);
        
        if (letterSStack.length === letterSNum) {
          clearLetter(letterSStack);
        }
      }
    }
});

const clearLetter = function(stack) {
  for (let i = 0; i < stack.length; i++) {
    stack[i].classList.remove('selected');
  }
  
  // Have to set the length to 0 instead of 
  // stack = [], because stack is a ref, not 
  // the array itself, so setting stack to 
  // empty just changes where the ref is pointing
  stack.length = 0;
};