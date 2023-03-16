function filterSelection(item){
   
    let x, i;
    x= document.getElementsByClassName("combination");
    for(i=0;i<x.length;i++){
        if(x[i].classList.contains(item)){
            x[i].classList.add("show");
            console.log("open");
        } 

        else{
            x[i].classList.remove("show");
            console.log("hidden");
        }

    }
}