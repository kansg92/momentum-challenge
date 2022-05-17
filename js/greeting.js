// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 코드를 아래와 같이 줄일수 있다.
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// String만 포함된 변수는 관습적으로 대문자로 정의한다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // JS에서 String을 작성하는 2가지 방법.
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show the greeting
    paintGreeting(savedUsername);

}
