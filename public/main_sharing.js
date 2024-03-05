function upload(){
    window.location.href = "code.html"
}
async function getting_title(){
    // let titles = [];
    // const titlesText = localStorage.getItem("code");
    // if (titlesText){
    //     titles = JSON.parse(titlesText);
    // }
    try{
        const response = await fetch('/api/load_all'); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const titles = await response.json();
        const tableBodyEl = document.querySelector("#title");
        tableBodyEl.innerHTML = '';

        if (titles.length){
            for (const [i, title] of titles.entries()){
                const positionTdEl = document.createElement('td');
                const titleTdEl = document.createElement('td');
                const dateTdEl = document.createElement('td');

                positionTdEl.textContent = i + 1;
                titleTdEl.textContent = title.subject;
                titleTdEl.addEventListener("click", function(){
                        localStorage.setItem("current_code",JSON.stringify(title));
                        window.location.href = "sharing.html";
                    }); 
                dateTdEl.textContent = title.time;

                const rowEl = document.createElement('tr');
                rowEl.appendChild(positionTdEl);
                rowEl.appendChild(titleTdEl);
                rowEl.appendChild(dateTdEl);

                tableBodyEl.appendChild(rowEl);
            }
        }else{
                tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to upload</td></tr>';
            }
    }catch(error) {
        console.error('Error:', error);
    }
    }
    

getting_title()