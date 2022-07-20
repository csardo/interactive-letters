var listOfBLocks = document.querySelector('.container');

let stack = [];
listOfBLocks.addEventListener('click', function(event) {
    let target = event.target;
  
    /* Select if not yet selected */
    if (target.className === 'box') {
      target.classList.add('selected');
      stack.push(target);
    }
  
    /* Unselect if all in letter are selected */
});

var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
  for (let i = 0; i < stack.length; i++) {
    stack[i].classList.remove('selected');
  }
});