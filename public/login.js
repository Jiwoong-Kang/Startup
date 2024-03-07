function login(){
    const nameEl = document.querySelector("#ID");
    const passEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("passWord", passEl.value);
    window.location.href = "mypage.html"
}

function display3rd(data){
    fetch()
    .then((response)=>response.json())
    .then((data) => {

    });
} // 3rd party 정확히 어떻게 쓰는지 물어보기