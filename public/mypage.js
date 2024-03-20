async function getting_title(){
  
  try{ 
    const response = await fetch('/api/load_all'); 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userName = localStorage.getItem('userName'); 
    const titles = await response.json(); 

    const tableBodyEl = document.querySelector("#title");

    if (titles.length){
        for (const [i, title] of titles.entries()){
          if (userName === titles[i].user){
            const positionTdEl = document.createElement('td');
            const titleTdEl = document.createElement('td');
            const timeTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            titleTdEl.textContent = title.subject;
            titleTdEl.addEventListener("click", function(){
              localStorage.setItem("current_code",JSON.stringify(title));
              window.location.href = "sharing.html"; 
            }); 
            timeTdEl.textContent = title.time;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(titleTdEl);
            rowEl.appendChild(timeTdEl);

            tableBodyEl.appendChild(rowEl);
          }
        }
    }else{
            tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to upload</td></tr>';
        }
      }catch(error) {
        console.error('Error:', error);
    }
  }

function logout() {
  localStorage.removeItem('userName'); 
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = 'index.html'));
}
  

getting_title()