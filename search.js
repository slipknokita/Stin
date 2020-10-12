const searchBar = document.getElementById ("searchBar");
const resultContainer = document.getElementById("gamesList");
const searchBtn = document.getElementById("searchBtn");
URLsearch = 'http://localhost:3000/Games'
let gamesSearch;


searchBtn.addEventListener ('click',removeSearch);

function removeSearch (e){
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
   /* function removePlaceHolder (e){
        const searchValue = searchBar.value
        searchValue = ""
    }*/
}

searchBar.addEventListener('keyup',(e)=>{
    console.log (e.target.value)
const searchValue = e.target.value.toLowerCase(); 
const filteredGames = gamesSearch.filter ((game => {
    return (
    game.name.toLowerCase().includes(searchValue) || 
    game.style.toLowerCase().includes(searchValue) || 
    game.category.toLowerCase().includes(searchValue)
    );
}));
console.log(filteredGames)
displayGamesSearch (filteredGames)
});


const getGames = async url_api => {
  try {
    const response = await fetch(url_api);
    let games = await response.json();
    pushArray(games);
   /* displayGamesSearch(games);*/
  } catch (error) {
    if(error) {
      const error = new Error('Hubo un error', url_api)
      return error
    }
  }
} 
  getGames(URLsearch)
  /*.then(response => console.log(response))
  .catch(error => console.log(error));*/

function pushArray (games) {
    gamesSearch = games;
    console.log(gamesSearch)
}

/*<div class ="newCardsResults col-xs-12 col-sm-12 col-md-6 col-lg-1 "> 
<div class="card">
  <img class="card-img-top"src="${game.imgSource}"
  <div class="card-body">
    <div class="card-title">${game.name}</div>
    <div class="card-text">${game.style}</div>
  </div>
</div>
</div>*/

const displayGamesSearch = (games) => {
  const htmlGames = games
      .map((game) => {
        if (game.publicado === true) {
          return `
          <div class ="ml-3 mr-3 newCardsResults col-xs-12 col-sm-12 col-md-6 col-lg-2 "> 
          <div class="card mb-3">
            <img class="card-img-top"src="${game.imgSource}"
            <div class="card-body">
              <div class="card-title">${game.name}</div>
              <div class="card-text">${game.style}</div>
            </div>
          </div>
          </div>
      `;
      }
    })
      .join('');
  resultContainer.innerHTML = htmlGames;
  resultContainer.addEventListener('click',redirectCards)
};

function redirectCards(e) {
    window.location.href="JuegoX.html";
}

getGames(URLsearch);


