
// querySelector : css 방식으로 first elements를 찾을 수 있다.
// querySelectorAll : 모든 elements를 가져온다.
const h1 = document.querySelector(".hello h1"); 


function handleTitleClick(){
    const clickedClass = "clicked";
    // if(h1.className === clickedClass) {
    //     h1.className = "";
    // }else{
    //     h1.className = clickedClass;
    // }

    // classList 기존에 가지고있는 class를 유지한체로 추가가 가능.
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }

    // toggle ->  classList에서 있으면 제거, 없으면 추가 해줌. like switch on off
    h1.classList.toggle(clickedClass);
}

h1.onclick = handleTitleClick;
