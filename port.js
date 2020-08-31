const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".hobby-gallery").children;

 for(Let i=0; i<filterButtons.length; i++){
     filterButtons[i].addEventListener("click",function(){
        for(Let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active") 
        }
        this.classList.add("active"); 
        const targer=this.getAttribute("data-target")

        for(Let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            if(target=="all"){
                items[k].style.display="block";
            }
        }
        
    })
}

//header fixing

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innewidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}