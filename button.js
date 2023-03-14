//locale button
const localeButton = document.querySelector(".locale-button");
const locale = document.querySelector(".screen-header__gnb__locale");
const localeList = document.querySelector(".locale-list");
//filter button
const downTriangle = document.querySelector(".fa-caret-down");
const filter = document.querySelector(".screen-header__middle__filter");
const filterList =document.querySelector(".screen-header__middle__filter__list");
//search button
const searchButton = document.querySelector(".search-button");
const searchCancel = document.querySelector(".search-country__header__cancel"); 
const searchCountry = document.querySelector(".search-country");



function localeButtonClick(event){
     event.preventDefault();
     localeList.classList.toggle("hidden");
}


function filterButtonClick(event){
     event.preventDefault();
     filterList.classList.toggle("hidden");
}

function searchButtonClick(event){
     event.preventDefault(event);
     console.log("버튼 작동!!")
     searchCountry.classList.toggle("hidden");
}

function cancelButtonClick(event){
     event.preventDefault(event);
     searchCountry.classList.toggle("hidden");
}

localeButton.addEventListener("click",localeButtonClick);
filter.addEventListener("click",filterButtonClick);
searchButton.addEventListener("click",searchButtonClick);
searchCancel.addEventListener("click",cancelButtonClick);

