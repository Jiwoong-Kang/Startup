async function sharing(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
        
    document.getElementById("subject2").innerHTML = show_code_parse.subject
    
    document.getElementById("new_outer2").innerHTML = show_code_parse.code
    document.getElementById("new_outer2").style.whiteSpace = "pre"

    document.getElementById("new_outer3").innerHTML = show_code_parse.explanation
    
}

function keep(){
    window.location.href = "mypage.html";
}

async function remove(){
    let show_code = localStorage.getItem("current_code");
    let show_code_parse = JSON.parse(show_code);
    let real_ID = show_code_parse.ID;
    fetch(`/api/delete?ID=${real_ID}`, {
        method: 'Delete',
    }); 
    console.log("hello");
    window.location.href = "mypage.html"; 
}

sharing()
