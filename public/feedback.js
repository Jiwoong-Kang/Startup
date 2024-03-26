function sharing(){  
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}

const username = localStorage.getItem('userName'); // put username
const FeedBackUpload = "Feedback uploaded";

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
        this.broadcastEvent(username, FeedBackUpload, show_code); // add event
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


configureWebSocket(){ //what does this error mean?
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'upload', 'connected'); // game -> upload
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'upload', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === FeedBackUpload) {
        this.displayMsg('player', msg.from, `uploaded a feedback on ${msg.value.subject}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  displayMsg(cls, from, msg) { // need to move to mypage, mainsharing, sharing
    const chatText = document.querySelector('#player-messages'); // need to put this id in above html
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

sharing()
