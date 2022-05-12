
// querySelector : css 방식으로 first elements를 찾을 수 있다.
// querySelectorAll : 모든 elements를 가져온다.
const title = document.querySelector(".hello h1"); 

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}


title.addEventListener("click", handleTitleClick);
