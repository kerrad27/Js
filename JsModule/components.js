const createFilmTemplate = (oneItem, handleFavoriteClick) => {
  // сохраняем обьект в переменную для дальнейшей, возможной, записи в фавориты
  const currentItem = oneItem; // {...oneItem} - для копирования обьекта, а не ссылки
  // создаем контейнер для фильма
  const container = document.createElement('div');

  // задаем уникальный айди элемента
  container.setAttribute('id', currentItem.show.id);
  container.setAttribute('class', 'box');

  // создаем контейнер для картинки
  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'image');

  // вешаем обработчик
  imgContainer.addEventListener('click', () => openFilmDescription(oneItem));

  const imgSrc = oneItem.show.image ? oneItem.show.image.medium : 'img/error2.jpg';
  const filmImg = document.createElement('img');
  filmImg.setAttribute('src', imgSrc);
  filmImg.setAttribute('alt', '');

  imgContainer.append(filmImg);

  // добавляем картинку в конец контейнера
  container.append(imgContainer);

  const filmNameContainer = document.createElement('div');
  filmNameContainer.setAttribute('class', 'name-film name-film-favorite');

  const filmName = document.createElement('span');
  filmName.setAttribute('class', 'nSpan');
  filmName.innerText = oneItem.show.name;

  // добавляем название в конец контейнера
  filmNameContainer.append(filmName);
  container.append(filmNameContainer);

  // кнопка фeйворит
  const btnFavorite = document.createElement('button');
  let Iconbtn = document.createElement('i');
  btnFavorite.setAttribute('class', 'btnFavorite');
  Iconbtn.setAttribute('class', "fas fa-heart");
  Iconbtn.setAttribute('id', 'iconBtn');
  btnFavorite.addEventListener('click', () => handleFavoriteClick(currentItem));
  container.append(btnFavorite);
  btnFavorite.append(Iconbtn)

  return container;
};

/*-------Modal-------*/

const filmModal = document.getElementById("myModal");

// клик на открытие модалки
function openFilmDescription(oneItem) {
  filmModal.innerHTML = '';
  filmModal.append(createModal(oneItem));
  filmModal.style.visibility = 'visible';
}

// клик на закрытине модалки
window.onclick = function(event) {
  if (event.target == filmModal) {
    filmModal.style.visibility = "hidden";
  }
}

function createModal(oneItem) {
  // создаем контейнер для контента модального окна
  const modalContainer = document.createElement('div');
  modalContainer.setAttribute('class', 'modal-content');

  //контейнер на 2 блока
  const modalSection = document.createElement('div');
  modalSection.setAttribute('class', 'modalSection');
  
  // создаем контейнер для img
  const imgContainer = document.createElement('div');
  const modalImgSrc =`${oneItem.show.image ? oneItem.show.image.original : 'img/error2.jpg'}`;
  const modalImg = document.createElement('img');
  modalImg.innerText = `${modalImgSrc}`;
  imgContainer.append(modalImg);
  
  imgContainer.setAttribute('class', 'imgContainer');
  modalImg.setAttribute('class', 'modalImg');
  modalImg.setAttribute('src', modalImgSrc);
  modalImg.setAttribute('alt', '');
  imgContainer.append(modalImg);

  // создаем контейнер для текста score
  const scoreContainer = document.createElement('div');
  const score = document.createElement('span');
  score.innerText = `★ Score: ${oneItem.show.rating.average}`;

  scoreContainer.append(score);

  let genres = [];
  if (oneItem.show.genres.length) {
    genres = oneItem.show.genres.reduce((acc, item) => {
      return acc + ', ' + item;
    });
  } else {
    genres = 'unknown';
  }
  // создаем контейнер для текста genres
  const genresContainer = document.createElement('div');
  const genresContent = document.createElement('span');
  genresContent.innerText = `★ Genres: ${genres}`;

  genresContainer.append(genresContent);

  // создаем контейнер для текста language
  const languageContainer = document.createElement('div');
  const language = document.createElement('span');
  language.innerText = `★ Language: ${oneItem.show.language}`;

  languageContainer.append(language);

  // создаем контейнер для текста description
  const descriptionContainer = document.createElement('div');
  const description = document.createElement('span');
  description.innerText = `★ Description: ${oneItem.show.summary}`;

  descriptionContainer.append(description);

  // добавляем созданные блоки с описаниями в модальное окно
  modalContainer.prepend(modalSection);
  modalSection.append(scoreContainer);
  modalSection.append(genresContainer);
  modalSection.append(languageContainer);
  modalSection.append(descriptionContainer);
  modalContainer.prepend(imgContainer);

  return modalContainer;
}

