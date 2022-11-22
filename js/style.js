/*
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
        event.preventDefault();
    }
    if(event.keyCode == 123){
        event.preventDefault();
    }
});
*/
// nav 
let humberger = document.querySelector(".humberger");
let navMenu = document.querySelector(".nav-Menu");
let closee = document.querySelector(".close");

humberger.addEventListener("click", () => {
    humberger.classList.add("activenav");
    navMenu.classList.add("activenav");
});
closee.addEventListener("click", () => {
    humberger.classList.remove("activenav");
    navMenu.classList.remove("activenav");
});


//text type
let i = 0 ;
let text = "IBRHEEM SALEM";

function typing(){
    if(i < text.length){
        document.querySelector(".hello").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }

}
typing()

let tabs = document.querySelectorAll(".tabs li");
let listArray = Array.from(tabs);
let contentDiv = document.querySelectorAll(".content > div");
let contentDivtArray = Array.from(contentDiv);
// console.log(listArray);
// console.log(contentDivtArray);

listArray.forEach((element) => {
    element.addEventListener("click", function (e) { 
    // console.log(element);
    listArray.forEach((ele) => {
        ele.classList.remove("active");  // click remove 
    });
    // console.log(listArray);
        e.currentTarget.classList.add("active"); // click li => class active (* currentTarget *)
        contentDiv.forEach((div) => {
        div.style.display = "none";
   // console.log(contentDiv);
        });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "grid";
    }); 
});

let navDow = document.querySelector("nav");
let newLink = document.querySelectorAll("nav ul li a");
//Top Page 
let toPage = document.querySelector(".up-page"); 

window.onscroll = function () {
    //Nav Page 
    if(this.scrollY >= 200){
        navDow.classList.add("nav-scrol");
        for (i = 0; i < newLink.length; i++) {
            newLink[i].classList.add("a-color");
        }
    }else{
        navDow.classList.remove("nav-scrol");
        for (i = 0; i < newLink.length; i++) {
            newLink[i].classList.remove("a-color");
        }
    }
    //Top Page 
    if(this.scrollY >= 200){
        toPage.style.marginRight = "0px";
    }else{
        toPage.style.marginRight = "-70px";
    }

}

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});

