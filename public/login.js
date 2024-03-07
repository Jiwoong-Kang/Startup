function login(){
    const nameEl = document.querySelector("#ID");
    const passEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("passWord", passEl.value);
    window.location.href = "mypage.html"
}

function display3rd(data){
    fetch("https://foodish-api.com/images/burger/")
    .then((response)=>response.json())
    .then((data) => {
        const containerEl = document.querySelector('#food');
        const foodEl = document.createElement('img');
        foodEl.classList.add('food');       
        foodEl.src = data.image;    
        containerEl.appendChild(foodEl);
    });
} 