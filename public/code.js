function getRandomFromTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString();
    var minutes = currentTime.getMinutes().toString();
    var seconds = currentTime.getSeconds().toString();
    var milliseconds = currentTime.getMilliseconds().toString();

    var timeString = hours + minutes + seconds + milliseconds;
    
    return timeString;
}

const username = localStorage.getItem('userName'); 
const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = username;
const FeedBackUpload = "Feedback uploaded";
const CodeUpload = "Code uploaded";
let socket;
configureWebSocket();

async function code(){ 
    const subjectEl = document.querySelector("#subject")
    const codeEl = document.querySelector("#message")
    const explainEl = document.querySelector("#message2")
    const now = new Date()
    const random = getRandomFromTime()
    const owner = localStorage.getItem('userName') 
    const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    const obj = {
        user : owner, 
        subject : subjectEl.value,
        code : codeEl.value ,
        explanation : explainEl.value,
        time : formattedTime,
        feedbacks : [],
        ID : random
    };
    let current_code = localStorage.getItem("code")
    if (current_code){
        let current_code_array = JSON.parse(current_code)
        current_code_array.push(obj)
        let new_current_code = JSON.stringify(current_code_array)
        localStorage.setItem("code", new_current_code)
    }else{
        let string_code = JSON.stringify([obj])
        localStorage.setItem("code", string_code)
    }

    try { 
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }); 
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        broadcastEvent(username, CodeUpload); 
        const data = await response.json();
        console.log('Success:', data);
        window.location.href = "main_sharing.html"
    } catch(error) {
        console.error('Error:', error);
    } 
    
    

}

function clearContent() {
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("message2").value = "";
}

const textAreas = document.querySelectorAll('textarea');

textAreas.forEach(textArea => {
    textArea.addEventListener('keydown', function(e) {
        if(e.key == 'Tab') {
            e.preventDefault();

            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;

            e.target.value = e.target.value.substring(0, start)
                + '\t' + e.target.value.substring(end);

            e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
    });
});

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

function displayMsg(cls, from, msg) { // need to move to mypage, mainsharing, sharing
    const chatText = document.querySelector('#user-messages'); 
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

function broadcastEvent(from, type) {
    const event = {
      from: from,
      type: type,
    };
    socket.send(JSON.stringify(event)); 
  }