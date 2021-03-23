
const promise = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
const dataWrapper = document.querySelector('#data-wrapper')
const createTemplate = data => {
    let dataId = data.id
    console.log('s',dataId)
    return `
        <div class="data-item">
            <div onClick="setId(${data.id})" id="image" class="image">
            
                <img src="${data.image_url ? data.image_url : ''}" alt="">
            </div>
            <div class="text">
                <span>Name:</span>${data.name}
                <span>Decription:</span>${data.description}
            </div>
        </div>
    `
}

promise
    .then(response => response.json())
    .then(data => {
        if (data) {
            data.forEach(item => {
                dataWrapper.innerHTML += createTemplate(item)
            });
        }
    })


let setId = (dataId) => {
    const FavoritesList = localStorage.getItem('favorites')
    if (FavoritesList) {
      let currentList = JSON.parse(FavoritesList);
        currentList.push(dataId);
      currentList = JSON.stringify(currentList);
      localStorage.setItem('favorites', currentList);
    } else {
      let currentList = [];
      currentList.push(dataId);
      currentList = JSON.stringify(currentList);
      localStorage.setItem('favorites', currentList);
    }
}
