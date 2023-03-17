//locale button
const localeButton = document.querySelector(".locale-button");
//filter button
const downTriangle = document.querySelector(".fa-caret-down");
const filter = document.querySelector(".screen-header__middle__filter");
const filterList =document.querySelector(".screen-header__middle__filter__list");
//search button
const searchButton = document.querySelector(".search-button");
const searchCancel = document.querySelector(".search-country__header__cancel"); 
const searchCountry = document.querySelector(".search-country");



function dropdownClick(event){
    
     event.preventDefault();
     const parent = event.currentTarget.parentElement; //locale
     const children= event.currentTarget.children; 

     let i,triangle,dropdownList;
     
     for(i = 0; i<children.length;i++){
          if(children[i].classList.contains("fa-caret-down")){
               triangle = children[i];
               break;
          }
     }

     console.log(parent.children);

     for(i=0;i<parent.children.length;i++){
          if(parent.children[i].classList.contains("dropdown-list")){
               dropdownList = parent.children[i];
               break;
          }
     }

     console.log(dropdownList);


     if(dropdownList.classList.contains("hidden")){
          dropdownList.classList.remove("hidden");
          triangle.style.transform = 'rotate(180deg)';
     }

     else{
          dropdownList.classList.add("hidden");  
          triangle.style.transform = 'rotate(0deg)';
     }
}


function searchButtonClick(event){
     event.preventDefault(event);
     searchCountry.classList.toggle("hidden");
}


localeButton.addEventListener("click",dropdownClick);
filter.addEventListener("click",dropdownClick);
searchButton.addEventListener("click",searchButtonClick);
searchCancel.addEventListener("click",searchButtonClick);

