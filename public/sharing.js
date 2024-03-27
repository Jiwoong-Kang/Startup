function feedback2(){
    window.location.href = "feedback.html"
}
function deleting(){
    const userName = localStorage.getItem('userName'); 
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    if (userName === show_code_parse.user){
        window.location.href = "deleting.html"
    }
}

async function sharing(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
        
    document.getElementById("subject2").innerHTML = show_code_parse.subject
    
    document.getElementById("new_outer2").innerHTML = show_code_parse.code
    document.getElementById("new_outer2").style.whiteSpace = "pre"

    document.getElementById("new_outer3").innerHTML = show_code_parse.explanation


    document.getElementById("feedback2").innerHTML = show_code_parse.feedbacks.join("<br>")
    document.getElementById("feedback2").style.whiteSpace = "pre"

    
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

sharing()
