function getRandomFromTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString();
    var minutes = currentTime.getMinutes().toString();
    var seconds = currentTime.getSeconds().toString();
    var milliseconds = currentTime.getMilliseconds().toString();

    var timeString = hours + minutes + seconds + milliseconds;
    
    return timeString;
}

async function code(){ 
    const subjectEl = document.querySelector("#subject")
    const codeEl = document.querySelector("#message")
    const explainEl = document.querySelector("#message2")
    const now = new Date()
    const random = getRandomFromTime()
    const owner = localStorage.getItem('userName') // new information
    const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    const obj = {
        user : owner, // new information
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