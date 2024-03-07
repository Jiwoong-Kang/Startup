function sharing(){  
    let show_code = localStorage.getItem("current_code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}


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
sharing()
