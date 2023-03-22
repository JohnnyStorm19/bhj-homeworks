const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('change', (event) => { //вешаем обработчик на главный блок
  let target = event.target;
  if (target.classList.contains('interest__check')) { //если нажали на чекбокс
    if (target.closest('label').nextElementSibling) { //если нажали на "родительский" чекбокс
      childrenCheck(target);
    } else if (target.closest('.interests_active')) { //если нажали на "дочерний" чекбокс
      parentCheck(target);
    }
  }
})

//функция для установки состояния "дочерних" чекбосков по нажатию на "родительский" чекбокс
function childrenCheck(element) {
  const inputs = [...element.closest('label').nextElementSibling.querySelectorAll('input')];
  element.checked ? inputs.forEach(el => el.checked = true) : inputs.forEach(el => el.checked = false);
  parentCheck(element); //проверяем "родительские" чекбоксы на наличие у них "родителей"
}
//функция для установки состояния "родительских" чекбоксов по нажатию на "дочерний" чекбокс
function parentCheck(element) {
  if (!element.closest('.interests_active')) { //базовый случай, когда завершим функцию: если выбрали самый крайний элемент ("родителя" всех и вся)
    return;
  }
  const subChecksBlock = element.closest('.interests_active'); //находим блок для "дочерних" элементов (ul)
  const inputs = [...subChecksBlock.querySelectorAll('input')]; //у найденного блока находим все чекбоксы
  const parent = subChecksBlock.closest('.interest').querySelector('input'); //находим "родителя" для "дочернего" чекбокса

  if (inputs.every(el => el.checked)) { 
    parent.checked = true;
    parent.indeterminate = false;
  } else if (inputs.every(el => el.checked === false)) {
    parent.checked = false;
    parent.indeterminate = false;
  } else { 
    parent.indeterminate = true; 
  }
  parentCheck(parent); //рекурсивно проходимся по "родителям" на наличие у них "родителей". Если достигаем самого крайнего - базовый случай
}