const interestsMain = document.querySelector('.interests_main');
const interests = Array.from(interestsMain.querySelector('ul').children);

interests.forEach(list => list.addEventListener('change', (event) => {
  if (event.target === list.querySelector('label input')) {
    activeSubChecks(event.target);
  } else {
    indeterminateCount(event.target);
  }
}))

function activeSubChecks(element) {
  const subCheck = Array.from(element.closest('label').nextElementSibling.querySelectorAll('input')); //нужно иначе находить сабчек
  if(subCheck) {
    if (element.checked) {
      subCheck.forEach(el => el.checked = true);
    } else {
      subCheck.forEach(el => el.checked = false);
    }
    while(subCheck) { 
      activeSubChecks(element);
      indeterminateCount(element);
    }
  }
}

function indeterminateCount(element) {
  const subChecksBlock = element.closest('.interests_active');
  const mainCheck = subChecksBlock.previousElementSibling.querySelector('input');
  const inputs = Array.from(subChecksBlock.querySelectorAll('input'));
  let countTrue = 0;
  let countFalse = 0;
  for(let check of inputs) {
    if(check.checked) {
      countTrue++;
    } else {
      countFalse++;
    }
  }
  
  if (countTrue === 0 && countFalse > 0) {
    mainCheck.indeterminate = false;
    mainCheck.checked = false;
  } else if(countTrue > 0 && countFalse === 0){
    mainCheck.indeterminate = false;
    mainCheck.checked = true;
  } else if(countFalse > 0 && countTrue > 0){
    mainCheck.indeterminate = true;
  }
  console.log(mainCheck, countTrue, countFalse)
}
