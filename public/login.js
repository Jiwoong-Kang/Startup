function login(){
    const nameEl = document.querySelector("#ID");
    const passEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("passWord", passEl.value);
    window.location.href = "mypage.html"
}

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
    const containerEl = document.querySelector('#quote');
    const quoteEl = document.createElement('p');
    quoteEl.classList.add('quote');
    const authorEl = document.createElement('p');
    authorEl.classList.add('author');
    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;
    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
      });
  }
  