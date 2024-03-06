async function sharing(){ //일단 await를 위해
    try{
        //let show_code = localStorage.getItem("current_code")
        //console.log(show_code)
        //let show_code_parse = JSON.parse(show_code)
        const response = await fetch('/api/load/')// 여기부터
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

// async function getData() {
//     try { 
//         const response = await fetch(`/api/getData`); //it cannot connect to server
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Success:', data);
//         return data;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// getData().then(data => {
//     feedback(data);
// });

async function feedback(){
    
    try { 
        const response1 = await fetch(`/api/getData`); //it cannot connect to server
        if (!response1.ok) {
            throw new Error(`HTTP error! status: ${response1.status}`);
        }
        const data = await response1.json();
        const response2 = await fetch('/api/upDateFeedbacks', { //이걸 부르면 먼저 저기 index로 가서 정보를 업데이트하는거 아님?
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
