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

setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> left ${score}</div>` +
      chatText.innerHTML;
  }, 5000);


sharing()
setInterval()
