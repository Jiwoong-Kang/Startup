async function getting_title(){
  
  try{ 
    const response = await fetch('/api/load_all'); 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userName = localStorage.getItem('userName'); 
    const titles = await response.json(); 

    const tableBodyEl = document.querySelector("#title");

    if (titles.length){
        for (const [i, title] of titles.entries()){
          if (userName === titles[i].user){
            const positionTdEl = document.createElement('td');
            const titleTdEl = document.createElement('td');
            const timeTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            titleTdEl.textContent = title.subject;
            titleTdEl.addEventListener("click", function(){
              localStorage.setItem("current_code",JSON.stringify(title));
              window.location.href = "sharing.html"; 
            }); 
            timeTdEl.textContent = title.time;
            

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(titleTdEl);
            rowEl.appendChild(timeTdEl);

            tableBodyEl.appendChild(rowEl);
          }
        }
    }else{
            tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to upload</td></tr>';
        }
      }catch(error) {
        console.error('Error:', error);
    }
  }

function logout() {
  localStorage.removeItem('userName'); 
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = 'index.html'));
}

function show(){
  const userName = localStorage.getItem('userName');
  let name = document.querySelector('h2');
  name.textContent = userName;
}

const username = localStorage.getItem('userName'); 
const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = username;
const FeedBackUpload = "Feedback uploaded";
const CodeUpload = "Code uploaded";
let socket;
configureWebSocket();

function configureWebSocket(){ 
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'server', 'connected'); 
    };
    socket.onclose = (event) => {
      displayMsg('system', 'server', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === FeedBackUpload) {
        displayMsg('user', msg.from, `uploaded a feedback on ${msg.value.subject}`);
      } else if (msg.type === CodeUpload) {
        displayMsg('user', msg.from, `uploaded a new code`); 
      }
    };
}

function displayMsg(cls, from, msg) { 
    const chatText = document.querySelector('#user-messages'); 
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  

getting_title()
show()