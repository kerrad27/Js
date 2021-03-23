$(".btnS").click(function () {
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});

const section = document.getElementById('section')
const filmsUrl = 'http://api.tvmaze.com/search/shows?q=';
let searchString = 'car';
const searchInp = document.getElementById('inputSearch');
let valueLeanguage = "";
let valueGenres = "";
const selectLanguage = document.getElementById('selectLanguage');
const selectGenres = document.getElementById('selectGenres');
const searcContainer = document.getElementById('searchContainer');

const requestFunc = async() =>{
  const response = await fetch(`${filmsUrl}${searchString}`)
  let filmsList = await response.json();
  if (valueLeanguage) {
    filmsList = filmsList.filter((test) => test.show.language === valueLeanguage);
  }
  if (valueGenres) {
    filmsList = filmsList.filter((test) => {
      return test.show.genres.some(genre => {
        return genre === valueGenres
      })
    });
  }
  document.getElementById("section").innerHTML = "";
  filmsList.forEach(item => {
    section.append(createFilmTemplate(item, handleFavorite));
  });
};
requestFunc();

function searchFunc(){
  searchString = (document.getElementById('inputSearch').value);
};

function dropDownActive(){
  let dropDown = document.getElementById('dropDown')
  if(dropDown.style.visibility === "visible"){
      dropDown.style.visibility = "hidden"
   } else {
      dropDown.style.visibility = "visible"
    }
}

function changeLeanguageValue(e){
  valueLeanguage = e.target.value;
}

function changeGenresValue(e){
  valueGenres = e.target.value;
}

searchContainer.addEventListener("keyup", function(e) {
  if (e.which === 13) {
      requestFunc()
  }
});

selectLanguage.addEventListener('change',changeLeanguageValue)
selectGenres.addEventListener('change',changeGenresValue)
searchInp.addEventListener('change', searchFunc); 
btnInp = document.getElementById('btnInpSearch').addEventListener('click', dropDownActive);

// localStorage
function handleFavorite(currentItem) {
  // достаем список фаворитов
  const currentFavoritesListStr = localStorage.getItem('favorites'); // строка с возможным массивом
  if (currentFavoritesListStr) {
    // если список есть, то дописываем
    let currentFavoritesList = JSON.parse(currentFavoritesListStr);
    // проверим есть этот фильм уже в фаворитах
    const isFilmAlreadyFavorite = currentFavoritesList.some(favoriteItem => favoriteItem.show.id === currentItem.show.id);
    if (isFilmAlreadyFavorite) {
      // есть, следовательно удаляем
      currentFavoritesList = currentFavoritesList.filter((favoriteItem) => favoriteItem.show.id !== currentItem.show.id);
    } else {
      // нет, следовательно добавляем
      currentFavoritesList.push(currentItem);
    }
    // записываем обновлённый список фаворитов
    currentFavoritesList = JSON.stringify(currentFavoritesList);
    localStorage.setItem('favorites', currentFavoritesList);
  } else {
    // если добавляем первого фаворита
    let currentFavoritesList = [];
    currentFavoritesList.push(currentItem);
    currentFavoritesList = JSON.stringify(currentFavoritesList);
    localStorage.setItem('favorites', currentFavoritesList);
  }
  console.log('favorites array', JSON.parse(localStorage.getItem('favorites')));
 
}

