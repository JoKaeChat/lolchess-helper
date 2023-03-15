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
     const triangle = document.querySelector(".locale-rotate");

     event.preventDefault();
     if(localeList.classList.contains("hidden")){
          localeList.classList.remove("hidden");
          triangle.style.transform = 'rotate(180deg)';
          console.dir(triangle);
     }

     else{
          localeList.classList.add("hidden");  
          triangle.style.transform = 'rotate(0deg)';
     }
}


function filterButtonClick(event){
     const triangle = document.querySelector(".filter-rotate");

     event.preventDefault();
     if(filterList.classList.contains("hidden")){
          filterList.classList.remove("hidden");
          triangle.style.transform = 'rotate(180deg)';
          console.dir(triangle);
     }

     else{
          filterList.classList.add("hidden");  
          triangle.style.transform = 'rotate(0deg)';
     }

}

function searchButtonClick(event){
     event.preventDefault(event);
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

