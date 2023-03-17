let searches = [];
const SEARCH_KEY = "search";
const x= document.getElementsByClassName("combination");




function saveSEarches(){
    localStorage.setItem(SEARCH_KEY,JSON.stringify(searches));
}

function filterSelection(item){

    let i,j;

    if( searches === null){
        searches.push(item);
    }

    else{
        
        const index =searches.indexOf(item);
        if(index > -1){
            searches.splice(index,1);
        }
        else{
            searches.push(item);
        }
    }
    console.log(searches);

    if(searches.length ===0){
        clearSearch();
    }

    if(searches.length !== 0){
      for(i=0;i<x.length;i++){
        for(j=0; j<searches.length; j++){
             if(x[i].classList.contains(searches[j])){
                x[i].classList.add("active");
             } 
             else{
               x[i].classList.remove("active");
               break;
             }
        }  
      }
    } 
}

function clearSearch(){
    searches.length = 0;
    for(i=0;i<x.length;i++){
        x[i].classList.add("active");
    }
}

const clear = document.querySelector(".clear");
clear.addEventListener("click",clearSearch);