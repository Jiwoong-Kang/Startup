function sharing(){  
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}

const username = localStorage.getItem('userName'); 
const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = username;
const FeedBackUpload = "Feedback uploaded";
const CodeUpload = "Code uploaded";
let socket ;
configureWebSocket();

async function feedback(){
    let show_code = localStorage.getItem("current_code") 
    let show_code_parse = JSON.parse(show_code)
    let real_ID = show_code_parse.ID
    try { 
        const response1 = await fetch(`/api/getData?ID=${real_ID}`);
        if (!response1.ok) {
            throw new Error(`HTTP error! status: ${response1.status}`);
        }
        const data = await response1.json();
        let feedback = document.getElementById("message").value
        const response2 = await fetch(`/api/upDateFeedbacks?ID=${real_ID}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({feedback:feedback}),
        });
        broadcastEvent(username, FeedBackUpload, show_code); 
        if (!response2.ok) {
            throw new Error(`HTTP error! status: ${response2.status}`);
        }
        const result = await response2.json();
        console.log('Success:', result);
        window.location.href = "main_sharing.html";
    } catch (error) {
        console.error('Error:', error);
    }
}


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

function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event)); 
  }

sharing();
