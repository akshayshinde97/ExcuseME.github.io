
const card = document.querySelector(".card");
const cardstyle =["card-1","card-2","card-3","card-4","card-5"];
const excusecontent = document.querySelector("#ct");
console.log(card);
function randomstyle(){
    let indx = Math.floor(Math.random()*5);
    return indx;
};

console.log(randomstyle());
function createcardstyle(){
    let indx = randomstyle();
    card.classList.add(cardstyle[indx]);
}
createcardstyle();

function fetchexcuse(){
    let indx = randomstyle()+1;
    fetch('https://run.mocky.io/v3/42bb8ed8-a5c3-4049-8550-b37aab456d45')
  .then(response => response.json())
  .then(data => excusecontent.textContent = data[indx][0]);
  
}
fetchexcuse();