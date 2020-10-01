const arrayCarousel = ['img/TerrorG.jpg','img/FantasyG.jpg','img/ShooterG.jpg','img/AccionG.jpg']
let imgContainer = document.getElementById ("img-container")
let imgCarousel = document.getElementById ("carousel-image")
/*console.log(imgCarousel)
console.log(imgContainer)*/
let btnprev = document.getElementById("btn-prev2")
let btnnext = document.getElementById("btn-next2")
let categories = document.getElementsByClassName ("category")
let categoryTerror = document.getElementById ("categoryTerror")
let categoryFantasy = document.getElementById ("categoryFantasy")
let categoryShooter = document.getElementById ("categoryShooter")
let categoryAccion = document.getElementById ("categoryAccion")
let cardsContainer = document.getElementById ("cardList")
let body = document.getElementById("bodyGame");
const URLAPI = "http://localhost:3000/Games"

btnnext.addEventListener('click', onClickEventNext);
btnprev.addEventListener('click', onClickEventPrev);
imgCarousel.addEventListener("click", addCarouselInfo);
categoryTerror.addEventListener("click",terrorCards);
categoryFantasy.addEventListener("click",fantasyCards);
categoryShooter.addEventListener("click",shooterCards);
categoryAccion.addEventListener("click",actionCards);


function onClickEventPrev(e){
     prev(e)
 }
 
 function onClickEventNext(e){
     next(e)
 }
 

 function addCarouselInfo (e){
     e.preventDefault();
 if (e.target.classList.contains('slider-img')){
     const carouselInfo = e.target.parentElement;
     readCarouselInfo(carouselInfo)
     /*console.log(carouselInfo)*/
 }
 }
 
 //Leer los datos del carousel 
 
 function readCarouselInfo(carouselInfo){
     carouselInfo = {
         image:carouselInfo.querySelector('img').src,
         /*idCarousel: carouselInfo.querySelector('img').getAttribute('id')*/
     }
     /*console.log(carouselInfo)*/
   saveCarouselInfo(carouselInfo);
   showGames(carouselInfo);
 }
 
 function showGames(cards){
    let carousels = JSON.parse(localStorage.getItem("carousels"));
    console.log(carousels)
    let imgID = carousels[carousels.length-1].image;
    console.log(imgID)
    if (imgID === "http://127.0.0.1:5500/img/TerrorG.jpg"){
        terrorCards();
    }
    if (imgID === "http://127.0.0.1:5500/img/FantasyG.jpg"){
        fantasyCards();
    }
    if (imgID === "http://127.0.0.1:5500/img/ShooterG.jpg"){
        shooterCards();
    }
    if (imgID === "http://127.0.0.1:5500/img/AccionG.jpg"){
        actionCards();
    }
 }

 function terrorCards (){
     removeAll();
    getGameByCategory ("Terror");
    /*createTerrorCards(arrayGames);*/
   }

   function fantasyCards (){
       removeAll();
    getGameByCategory ("Fantasy");
    /*createFantasyCards(arrayGames);*/
   }

  function shooterCards (){
    removeAll();
    getGameByCategory ("Shooter");
    
   }

   function actionCards (){
    removeAll();
    getGameByCategory ("Accion");
   }

    const createTerrorCards = games => {
        
       games.map((game, index) => {
           
           const cardContainer = document.createElement('div'); 
          
           cardContainer.innerHTML = `
            <div class ="newCards "> 
               <div class="card">
                 <img class="card-img-top"src="${game.imgSource}"
                 <div class="card-body">
                   <div class="card-title">${game.name}</div>
                   <div class="card-text">${game.style}</div>
                 </div>
               </div>
             </div>
         `
         cardContainer.className = 'col-xs-6 col-sm-6 col-md-2 col-lg-1';
         cardsContainer.appendChild(cardContainer);
         cardContainer.addEventListener('click',redirectCards)
       })
     }

     const createFantasyCards = games => {
        
        games.map((game, index) => {
            const cardContainer = document.createElement('div'); 
            cardContainer.innerHTML = `
             <div class ="newCards"> 
                <div class="card">
                  <img class="card-img-top"src="${game.imgSource}"
                  <div class="card-body">
                    <div class="card-title">${game.name}</div>
                    <div class="card-text">${game.style}</div>
                  </div>
                </div>
              </div>
          `
          cardContainer.className = 'col-xs-6 col-sm-6 col-md-2 col-lg-1';
          cardsContainer.appendChild(cardContainer);
          cardContainer.addEventListener('click',redirectCards)
        })
      }

      const createShooterCards = games => {
        
        games.map((game, index) => {
            const cardContainer = document.createElement('div'); 
            cardContainer.innerHTML = `
             <div class ="newCards"> 
                <div class="card">
                  <img class="card-img-top"src="${game.imgSource}"
                  <div class="card-body">
                    <div class="card-title">${game.name}</div>
                    <div class="card-text">${game.style}</div>
                  </div>
                </div>
              </div>
          `
          cardContainer.className = 'col-xs-6 col-sm-6 col-md-2 col-lg-1';
          cardsContainer.appendChild(cardContainer);
          cardContainer.addEventListener('click',redirectCards)
        })
      }

      const createActionCards = games => {
        
        games.map((game, index) => {
            const cardContainer = document.createElement('div'); 
            cardContainer.innerHTML = `
         
             <div class ="newCards"> 
                <div class="card">
                  <img class="card-img-top"src="${game.imgSource}"
                  <div class="card-body">
                    <div class="card-title">${game.name}</div>
                    <div class="card-text">${game.style}</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
          `
          cardContainer.className = 'col-xs-6 col-sm-6 col-md-2 col-lg-1';
          cardsContainer.appendChild(cardContainer);
          cardContainer.addEventListener('click',redirectCards)
        })
      }
 
function redirectCards(e) {
    window.location.href="JuegoX.html";
}

/*
const getData = url_api => {
    return new Promise((resolve, reject) => {
      fetch(url_api)
      .then(response => {
        if(response.status === 200) {
          resolve(response.json())
          console.log(response);
        } else {
          const error = new Error('Hubo error', url_api)
          reject(error);
        }
      })
    })
  } */


  
  const getGameByCategory = async (category) => {
    const url = `http://localhost:3000/Games?category=${category}`;
    try {
      const request = await fetch(url);
      let games = await request.json(); //transformamos response en json 
      console.log(games);
      if (url === "http://localhost:3000/Games?category=Terror"){
        createTerrorCards(games);
      }
      if (url === "http://localhost:3000/Games?category=Fantasy"){
        createFantasyCards(games);
    }
    if (url === "http://localhost:3000/Games?category=Shooter"){
        createShooterCards(games);
    }
    if (url === "http://localhost:3000/Games?category=Accion"){
        createActionCards(games);
    }
    } catch (error) {
      console.log(error);
    }
  }

 
 /* getData(URLAPI)
  .then(response => {
    console.log(response) 
  })
  .catch(error => {
    console.log(error);
  })*/

 


 function removeAll() {
    //Usamos un while para recorrer todos los hijos y quitar el elemento que seleccionemos
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
   removeAllFromLS();
    return false;
  }
  //Borrar todos los elementos
  function removeAllFromLS() {
    localStorage.clear();
  }

  function  saveCarouselInfo (element) {
    let carousels;
    carousels = getCarouselsfromLS();
    carousels.push(element);
    localStorage.setItem('carousels', JSON.stringify(carousels));
    }
    
    function getCarouselsfromLS(){
    let carousels;
    if (localStorage.getItem('carousels') === null) {
        carousels = [];
    } else {
        carousels = JSON.parse(localStorage.getItem('carousels'));
    }
    return carousels;
    }


    let counter2 = 0;

    function next(e) {
        e.preventDefault();
        if(counter2 >= 3) {
            counter2 = -1;
        }else{
        counter2++;
        return setImg ();
        }
    }
    
    function prev(e) {
        e.preventDefault();
        if (counter2 <= 0 ) {
            counter2 = 4;
        }else{
        counter2--;
        return setImg ();
        }
    }
    
    function setImg () {
        document.getElementById("carousel-image").src=  arrayCarousel[counter2];
        }