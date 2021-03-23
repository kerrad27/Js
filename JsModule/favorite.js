let favoriteFilms = JSON.parse(localStorage.getItem('favorites'));

const printFavorites = () => {
  document.getElementById('sectionFavorite').innerHTML = '';
  favoriteFilms.forEach((item) => {
    sectionFavorite.append(createFilmTemplate(item, delFav));
  });
};
printFavorites();

function delFav(currentItem) {
  const currentFavoritesListStr = localStorage.getItem('favorites'); 
  if (currentFavoritesListStr) {
    let currentFavoritesList = JSON.parse(currentFavoritesListStr);
    const isFilmAlreadyFavorite = currentFavoritesList.some((favoriteItem) => favoriteItem.show.id === currentItem.show.id);
    if (isFilmAlreadyFavorite) {
      currentFavoritesList = currentFavoritesList.filter((favoriteItem) => favoriteItem.show.id !== currentItem.show.id);
      currentFavoritesList = JSON.stringify(currentFavoritesList);
      localStorage.setItem('favorites', currentFavoritesList);
      let box = document.getElementById(currentItem.show.id);
      box.remove();
    }
  }
}


 