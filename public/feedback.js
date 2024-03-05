async function sharing(){ //일단 await를 위해
    try{
        //let show_code = localStorage.getItem("current_code")
        //console.log(show_code)
        //let show_code_parse = JSON.parse(show_code)
        const response = await fetch('/api/load')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        document.getElementById("outer2_text").innerHTML = show_code_parse.code
        document.getElementById("outer2_text").style.whiteSpace = "pre"
        localStorage.setItem("current_code", JSON.stringify(data)); //일단 추가한 파트
    } catch (error) {
        console.error('Error:', error);
    }
}
async function feedback(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    const codeEl = document.querySelector("#message")
    show_code_parse.feedbacks.push(codeEl.value)
    // localStorage.setItem("current_code", JSON.stringify(show_code_parse))
    // let codes = JSON.parse(localStorage.getItem("code"))
    // for (let i = 0; i < codes.length; i++){
    //     if (codes[i].code === show_code_parse.code){
    //         codes[i] = show_code_parse
    //         break
    //     }
    // }
    // localStorage.setItem("code", JSON.stringify(codes))
    // window.location.href = "sharing.html"
    try {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(show_code_parse),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Success:', data);
        window.location.href = "sharing.html";
    } catch (error) {
        console.error('Error:', error);
    }

}
sharing()