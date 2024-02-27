function feedback2(){
    window.location.href = "feedback.html"
}

function sharing(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    
    document.getElementById("subject2").innerHTML = show_code_parse.subject
    
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"

    document.getElementById("outer3_text").innerHTML = show_code_parse.explanation
    document.getElementById("outer3_text").style.whiteSpace = "pre"


    document.getElementById("feedback2").innerHTML = show_code_parse.feedbacks.join("<br>")
    document.getElementById("feedback2").style.whiteSpace = "pre"

    
}

setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> left ${score}</div>` +
      chatText.innerHTML;
  }, 5000);


sharing()
setInterval()
