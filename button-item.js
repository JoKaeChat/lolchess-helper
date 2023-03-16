let searches = [];
const SEARCH_KEY = "search";


function saveSEarches(){
    localStorage.setItem(SEARCH_KEY,JSON.stringify(searches));
}

function filterSelection(item){
    let i,j;
   
    const savedSearches =localStorage.getItem(SEARCH_KEY);
    

    if( savedSearches == null){
        console.log("비었음.")
        searches.push(item);
        console.log(searches);
    }

    else{
        const parsedSearches = JSON.parse(savedSearches);
        searches = parsedSearches;
        const index =searches.indexOf(item);
        if(index > -1){
            console.log("대상 삭제");
            searches.splice(index,1);
        }
        else{
            console.log("대상 추가");
            searches.push(item);
        }
    }
    
    const x= document.getElementsByClassName("combination");

    if(searches !== null){
      for(i=0;i<x.length;i++){
        for(j=0; j<searches.length; j++){
             if(x[i].classList.contains(searches[j])){
                x[i].classList.remove("hidden");
             } 
             else{
               x[i].classList.add("hidden");
               break;
             }
        }  
      }
    } 

    else{ 
        for(i=0;i<x.length;i++){
            x[i].classList.remove("hidden");
        }
    }

    saveSEarches();
}


const itemBtns = document.getElementsByClassName("item-button");
for(let i = 0; i<itemBtns.length; i++){
    itemBtns[i].addEventListener("click",function(){
        itemBtns[i].classList.toggle("active");
    })
}




