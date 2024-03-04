function login(){
    const nameEl = document.querySelector("#ID");
    const passEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("passWord", passEl.value);
    window.location.href = "mypage.html"
}