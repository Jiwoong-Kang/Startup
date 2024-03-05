async function code(){ //일단 await를 위해 이걸 써놓긴 했는데 과연 맞을까?
    const subjectEl = document.querySelector("#subject")
    const codeEl = document.querySelector("#message")
    const explainEl = document.querySelector("#message2")
    const now = new Date()
    const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    const obj = {
        subject : subjectEl.value,
        code : codeEl.value ,
        explanation : explainEl.value,
        time : formattedTime,
        feedbacks : []
    };
    
    try { //try 부분 전부 새로 추가하고 위에 빗금친곳들 수정함
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        }); // 이렇게 넣는게 맞는지 물어보기, 아님 다른 방법이 있는지
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);
        window.location.href = "main_sharing.html"
    } catch(error) {
        console.error('Error:', error);
    } //일단 넣어둠 곧 고쳐야 할듯
    let current_code = localStorage.getItem("code")
    if (current_code){
        let current_code_array = JSON.parse(current_code)
        current_code_array.push(obj)
        let new_current_code = JSON.stringify(current_code_array)
        localStorage.setItem("code", new_current_code)
        //window.location.href = "main_sharing.html"
    }else{
        let string_code = JSON.stringify([obj])
        localStorage.setItem("code", string_code)
        //window.location.href = "main_sharing.html"
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