function sharing(){  
    let show_code = localStorage.getItem("current_code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}


async function feedback(){
    let show_code = localStorage.getItem("current_code") //여기 2있었는데 일단 뺌
    let show_code_parse = JSON.parse(show_code)
    let real_code = show_code_parse.code
    try { 
        const response1 = await fetch(`/api/getData?code=${real_code}`); 
        if (!response1.ok) {
            throw new Error(`HTTP error! status: ${response1.status}`);
        }
        const data = await response1.json();
        let feedback = document.getElementById("message").value
        const response2 = await fetch(`/api/upDateFeedbacks?code=${real_code}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({feedback:feedback}),
        });
        if (!response2.ok) {
            throw new Error(`HTTP error! status: ${response2.status}`);
        }
        const result = await response2.json();
        console.log('Success:', result);
        window.location.href = "sharing.html";
    } catch (error) {
        console.error('Error:', error);
    }


}
sharing()
