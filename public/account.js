  async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#ID')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
      
    if (response.ok) {
      //localStorage.setItem('userName', userName);
      window.location.href = 'index.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }