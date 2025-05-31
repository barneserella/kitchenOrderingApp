// Click group button, show only the list of ingredients for that button
// add class name to elements for hiding. to all elements that were not clicked, toggle on one clicked
const produce = document.querySelectorAll('#produce');
const pantry = document.querySelectorAll('#pantry');
const fresh = document.querySelectorAll('#fresh');
const frozen = document.querySelectorAll('#frozen');
const dairy = document.querySelectorAll('#dairy');
const seasoning = document.querySelectorAll('#seasoning');
const buttons = document.querySelectorAll('.button')

// let arrayOfElements = [produce, pantry, fresh, frozen, dairy, seasoning];

Array.from(buttons).forEach(e => e.addEventListener('click', hideGroup));

function hideGroup(event) {
  let clickedButton = event.target;
  console.log('Clicked Button: ', clickedButton);
  let liArray = [ ...clickedButton.parentNode.children];
  const li = liArray.filter(child => child !== clickedButton);
  console.log('ButtonId: ', li[0].id);
  
// NEED TO TOGGLE CLASS AFTER FIRST BUTTON CLICK

  if(li[0].id === 'produce'){
    li.forEach(e => e.classList.add('show'));
    pantry.forEach(e => e.classList.add('hidden'));
    fresh.forEach(e => e.classList.add('hidden'));
    frozen.forEach(e => e.classList.add('hidden'));
  }else if(li[0].id === 'pantry'){
    li.forEach(e => e.classList.add('show'));
    produce.forEach(e => e.classList.add('hidden'));
    fresh.forEach(e => e.classList.add('hidden'));
    frozen.forEach(e => e.classList.add('hidden'));
  }else if(li[0].id === 'fresh'){
    li.forEach(e => e.classList.add('show'));
    produce.forEach(e => e.classList.add('hidden'));
    pantry.forEach(e => e.classList.add('hidden'));
    frozen.forEach(e => e.classList.add('hidden'));
  }else if(li[0].id === 'frozen'){
    li.forEach(e => e.classList.add('show'));
    produce.forEach(e => e.classList.add('hidden'));
    fresh.forEach(e => e.classList.add('hidden'));
    pantry.forEach(e => e.classList.add('hidden'));
  }else if(li[0].id === 'dairy'){
    li.forEach(e => e.classList.add('show'));
    li.forEach(e => e.classList.toggle('hidden'));
    produce.forEach(e => e.classList.add('hidden'));
    fresh.forEach(e => e.classList.add('hidden'));
    frozen.forEach(e => e.classList.add('hidden'));
    pantry.forEach(e => e.classList.add('hidden'))
  }else if(li[0].id === 'seasoning'){
    li.forEach(e => e.classList.add('show'));
    li.forEach(e => e.classList.toggle('hidden'));
    produce.forEach(e => e.classList.add('hidden'));
    fresh.forEach(e => e.classList.add('hidden'));
    frozen.forEach(e => e.classList.add('hidden'));
    pantry.forEach(e => e.classList.add('hidden'));
  }
}

