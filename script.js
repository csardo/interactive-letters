var listOfBLocks = document.querySelector('#block-list');

listOfBLocks.addEventListener('click', function(event) {
    event.target.classList.add('selected');
});