const placeList=document.querySelector('.places__list');

// @todo: Темплейт карточки
const userTemplate=document.querySelector('#card-template').content;

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(element,deleteCard){
    
    const userElement=userTemplate.querySelector('.card').cloneNode(true);
    userElement.querySelector('.card__image').src=element.link;
    userElement.querySelector('.card__image').alt=element.name;
    userElement.querySelector('.card__title').textContent=element.name;
    const deleteButton=userElement.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', ()=> deleteCard(userElement));
    return userElement;
  }


function deleteCard(cardElement) {
    cardElement.remove();
  }

// @todo: Вывести карточки на страницу
initialCards.forEach((item)=>{
    const newCard = createCard(item,deleteCard);
    placeList.append(newCard);
    });
