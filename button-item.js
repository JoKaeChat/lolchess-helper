let searches = [];
const SEARCH_KEY = "search";
const x= document.getElementsByClassName("combination");

const itemBtn = document.getElementsByClassName("item-button");

function V(event){
    event.preventDefault();
    const parent = event.currentTarget;
    const div = document.createElement("div");
    const span = document.createElement("span");
    const svg = document.createElement("svg");

    div.className = "checkBoxBg";
    span.className = 'checkCircleGreen';
    div.appendChild(span);
    span.appendChild(svg);
    svg.xmls = 'http://www.w3.org/2000/svg';
    svg.viewBox = '0 0 14 15';
    svg.width ='100%';
    svg.height = '100%';
    


    if(parent.classList.length === 1){
        /*console.log(parent.children);*/
         parent.appendChild(div);
         
         parent.classList.add('checked');
         
    }
    else{
        /*console.log(parent.children);*/
        parent.classList.remove('checked');
        parent.children[2].remove();
        
    }
    
}


for(let i=0;i<itemBtn.length;i++){
    itemBtn[i].addEventListener('click',V);
}

function saveSEarches(){
    localStorage.setItem(SEARCH_KEY,JSON.stringify(searches));
}

function filterSelection(item){

    let i,j;

    // 검색
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




