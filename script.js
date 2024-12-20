


 const introMore= document.getElementById("intro-more")
 const intro=document.getElementById("intro2")
//  console.log(intro)
//  console.log(intro)
//  console.log(introMore)

// function displayPara(){
//     
//     intro.style.visibility="visible";
//     console.log(intro);



// }

const dynamicBtn=document.createElement("button")
dynamicBtn.innerText="See Less"
dynamicBtn.classList.add("lessbutton")
dynamicBtn.id="dynBtn"
intro.append(dynamicBtn)

const dynBtn= document.getElementById("dynBtn")


console.log(dynBtn)



introMore.addEventListener("click",()=>{


if(intro.style.visibility=="hidden"){

    intro.style.visibility="visible"
    introMore.style.visibility="hidden"
}

 else {

    intro.style.visibility="hidden"

  
}

})


dynBtn.addEventListener("click", ()=>{
   
    
  
    if(intro.style.visibility=="visible"){
        intro.style.visibility="hidden"
        introMore.style.visibility="visible"
    }
    
    else{
     dynBtn.style.visibility="hidden"
    }
    
})
