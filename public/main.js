// Click group button, show only the list of ingredients for that button
// add class name to elements for hiding. to all elements that were not clicked, toggle on one clicked
// const produce = document.querySelectorAll('#produce');
// const pantry = document.querySelectorAll('#pantry');
// const fresh = document.querySelectorAll('#fresh');
// const frozen = document.querySelectorAll('#frozen');
// const dairy = document.querySelectorAll('#dairy');
// const seasoning = document.querySelectorAll('#seasoning');
const buttons = document.querySelectorAll('.button');
const lists = document.querySelectorAll('.group-list');

// let arrayOfElements = [produce, pantry, fresh, frozen, dairy, seasoning];

// Array.from(buttons).forEach(e => e.addEventListener('click', hideGroup));
buttons.forEach(button => button.addEventListener('click', hideGroup));

// const groupToShow = button.dataset.group;

function hideGroup(event) {
  let clickedButton = event.target.dataset;
  console.log('Clicked Button: ', clickedButton);
  
  // Toggle each list by class
  
  lists.forEach(list => {
    // console.log(list.classList.contains(clickedButton.group))

    if (list.classList.contains(clickedButton.group)) {
    list.classList.toggle('show');
    list.classList.toggle('hidden');
  }
  })
};
