
// querySelector : css 방식으로 first elements를 찾을 수 있다.
// querySelectorAll : 모든 elements를 가져온다.
const h1 = document.querySelector(".hello h1"); 

function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color="blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here!"

}

function handleMouseLeave( ){
    h1.innerText = "mouse is gone!"
}

function handleWindowResize(){
    document.body.style.background = "coral";
}

function handleWindowCopy(){
    alert("copier!!")
}

function handleWindowOffline(){
    alert("SOS no WIFI!")
}


function handleWindowOnline(){
    alert("ALL GOOOOOD")
}

// 2가지 형식으로 함수를 실행 시킬수 있다.
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);


window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);