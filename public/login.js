(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

// async function createUser() {
//   loginOrCreate(`/api/auth/create`);
// }

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    window.location.href = 'mypage.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
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

displayQuote()
  