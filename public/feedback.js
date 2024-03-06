async function sharing(){ //일단 await를 위해
    try{
        //let show_code = localStorage.getItem("current_code")
        //console.log(show_code)
        //let show_code_parse = JSON.parse(show_code)
        const response = await fetch('/api/load')// 여기부터
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); //여기까지 새롭게 추가됨
        document.getElementById("outer2_text").innerHTML = data
        document.getElementById("outer2_text").style.whiteSpace = "pre"
        localStorage.setItem("current_code", JSON.stringify(data)); //일단 추가한 파트
    } catch (error) {
        console.error('Error:', error);
    }
}
async function feedback(){
    
    try { //그냥 try 안에 있는 것들은 다 새로 추가됨
        const responseLoad = await fetch('/api/load');
        if (!responseLoad.ok) {
            throw new Error(`HTTP error! status: ${responseLoad.status}`);
        }
        const data = await responseLoad.json();

        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Success:', result);
        window.location.href = "sharing.html";
    } catch (error) {
        console.error('Error:', error);
    }

}
sharing()