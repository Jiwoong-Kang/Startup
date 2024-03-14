# Personal Note
## History of the web
 - Tim Berners-Lee : first developer of HTML, HTTP, URL (structure)
 - Hakno Wium Lie : CSS (Designing)
 - Brendan Eich : Javascript (interactive)
   
## Console
- Navigate your disk
- Run console applications
  
## Commandline for Console

- echo - Output the parameters of the command (printf has the same power, printf can be used like C, such as %s and %d)
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file (# press `q` to exit less)
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up (control +z = stop)
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
- "|" - Take the output from the command on the left and pipe, or pass, it to the command on the right
- ">" - Redirect output to a file. Overwrites the file if it exists
- ">>" - Redirect output to a file. Appends if the file exists


## Editior
### Visual Studio Code
- Live server
- GitLens
-  :wq 하면 쓰고 나갈 수 있음 (쓸때는 i 사용)

### HTML
- <!DOCTYPE= HTML> 을 제일 위에 쓰면 안전하게 html 로 인식하게 할 수 있다.
- more tool -> developer tool -> edit(locally, only for my monitor) -> 옆에 조그만한 점 세개 누르고 edit 하면 된다.
- if you want to upload the wideo, you need to download that specific video.
- whenever you want to set the default color, you need to use hexidecimal number.

### CSS
- head에 body{background-color:black color= red} p{background-color=white, color=green} 하면 body에 있는 배경은 검은색 글씨는 빨강, paragraph에서는 배경이 흰색 글자는 초록이 된다. 하지만 각 한줄에 더 쓰여졌있다면 제일 먼저 그걸 따라간다. 예시로 <p "color=blue">로 쓰여졌있으면 그 p에서는 글자가 파랑으로 나온다.
- styles.css 형식으로 새로운 파일을 만들어야한다.
- styles.css에 모든 style을 넣고 <link rel="stylesheet" href="styles.css" />를 head에 넣으면 그대로 적용된다.
-  #id를 넣고 {}안에 스타일을 넣으면 그 아이디를 가지고 있는 친구들이 변한다.
-  id 가 class 보다 더 먼저 적용되는 친구라고 생각하면 쉽다.
- style.css 파일을 만들고 html 파일안에 <link href="" rel=>를 헤드부분에 넣어두면 거기서 가져올 수 있다.
- style.css 에서 @import url(여기안에 font 주소를 가져오면 된다.) 그 후 p{} or body{} 등 쓰면 된다. 3.4 파워포인트 6,7 페이지를 살펴보면 예시들이 나와있다.
- fonts google 에 들어가서 마음에 드는 font에 select를 누르고 import 를 누르면 그대로 가져올 수 있다.

## Unicode and UTF-8
- 이 utf를 사용하면 어떤 캐릭터는 그대로 사용할 수 있다. 예시로 한국어는 원래 인식이 안됐지만 이제 유니코드를 이용해서 그대로 나타낼 수 있게 됐다.

## Animation
p {
 text-align: center;
 font-size: 20vh;

 animation-name: demo;
 animation-duration: 3s;
} 처럼 사용하면 애니메이션을 만들 수 있다.

@keyframes demo {
 from { //아예 없는 곳에서
   font-size: 0vh;
 }

 95% { // 여기 95퍼가 아니라 원하는 대로 쓸 수 있다. 그냥 여기부터 잠깐 글자가 커진다
    color : purple; // 이렇게 쓰면 처음엔는 보라색이었다가
    font-size: 21vh;
 }

 to {
    color : blue; // 파란색으로 바뀌게 된다.
    font-size: 20vh;
 }
} 로 선언해줘야 애니메이션이 일어난다
- 자세한 내용은 3.4 파워포인트의 15페이지를 보도록 하자

## Responsive Design
- 화면을 줄였을때 특정한 것들만 나오게 하는 것이다.
- <meta> 라고 들어가 있는 것들을 의미한다.
- float : right 로 옛날에는 썻지만 지금은 float: inline-end로 사용한다. 왼쪽은 inline-start로 표현한다. 아랍어같은 거 때문에.

## Grid
- 3.5 파워포인트 11 페이지를 보면 코드가 나와있는데, 이 grid는 children에게만 영향을 미친다.
.container {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
- 위에 있는 1fr 을 쓰면 한 화면을 저 크기(300픽셀)로 잘 나눈다는 뜻이다

## Flex
- flex: 0 80px; -> 줄일때 항상 80픽셀을 유지한다는 뜻이다. (페이지 18 in 3.5) 0은 건들지 말라는 뜻
- 만약 두군데로 나누고 싶으면 하나는 flex:1 하나는 flex:3으로 나누어 놓으면 1대 3 비율로 항상유지할 수 있게 된다. (이 예시는 3.5의 19페이지 예시코드의 section.controls, section.contents 를 보자.)

## CSS Framework
- 이미 만들어져 있는 디자인을 가져온다고 생각하면 된다.
- head에 <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  />를 넣고
  - body에 <button type="button" class="btn btn-primary">Bootstrap</button>
  - <button type="button">Plain</button> 로 넣으면 그곳의 스타일을 가져올 수 있다.

### JavaScript
- main.js 로 하면 만들수 있다.
- 자바스크립트를 가져오려면 링크를 이용해야 한다.
- 파워포인트 4.1을 보면 자세하게 나와있다. (예시1 : script tag를 붙인다.)
- <script src="index.js"></script> 를 헤드에 넣어준다. 그리고 순서가 굉장히 중요한데 나중에 선언돼있는 친구를 머저 가져오려고 할 경우 에러가 발생한다. 예를 들어 아직 선언돼지 않은 button을 먼저 사용하고 있을 경우 에러가 발생한다. 이걸 방지 하고 싶으면 <script defer>을 사용하면 된다.
- let y = 1; 같이 let을 사용해라. 이유는 나중에 업데이트 한다.
- 서로 주소를 비교하기 때문에 array 안에 같은 내용이여도, false가 나온다.
- falsy = (false,0,-0,'', NaN, null, undefined)
- truthy = !falsy
- c언어와 같은 while, for, switch case,
- 예시 페이지에서 start(contents) contents는 찾고 싶은 걸 넣으면 된다. 그러면 그 자리로 가서 실행하기 시작한다.
- No return 이면 undefined 로 출력된다. 
- f = function(a,b,c='rat'){return[a,b,c]}
- console.log(f(1)) == 1,undefined, 'rat' 으로 나오게 된다.

## ArrowFunction
- const arrow() = () => 1; 언제든 1이 나오게 하는 함수이다.
- const arrowWithBlock = (a) => {a;} -> undefined 로 나오게 된다.
- const arrowWithReturn = (a) => {return a;}
- console.log(arrow(), arrowWithBlock(2), arrowWithReturn(3)) -> 1, undefined, 3
- you cannot name the arrowfunction, arrow is just the name of ()

## Strings
- casefold : string.toUPppercase(), string.toLowercas()
- split : string.split(' ')
- endswith : string.endsWith('') , or startsWith('')
- replace : string.replace('Dogs', 'Puppies')
- slice : string.slice(3, 7) 4번째 알파벳부터 6번째 알파벳까지
- Regex : const objRegex = new Regex('cat.?', 'i') // cat, cats, catz
- const literalRegex = /cat.?/i  console.log(text.match(literalRegex)) == find all things that contain cat.

## Array
- add: push, subtract: pop, numbers.pop() = last element, and that will be deleted from the array
- slice : numbers.slice, length : numbers.length
- for (let entry of numbers) = for loop

## ArrayOperation
- numbers = [1,2,3,4,5,6,7,8,9]
- map : numbers.map((n) => n * 100) [100, 200, 300, 400 ..., 900]
- reduce : numbers.reduce((a,c) => a+c) 45 (a:원래있던 것 c:새롭게 들어온 것) , 만약 a에 다른 것 넣지 않으면 a는 제일 처음의 요소로 저장되고 c는 그 다음의 것으로 저장된다. 시작점을 정하고 싶으면 a+c, start로 뒤에 넣어주면 된다.
- forEach : numbers.forEach((n) => console.log(n%2)) no output, sideffect
- filter : numbers.filter((n) => n%2) build new array [1,3,5,7,9]
- some : numbers.some((n) => n > 5) 이 하나라도 이 조건에 맞으면 true를 반환한다.

## Exceptions
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}

## SpecialOperators
- let x = null || 5; -> true
- console.log('logical or: ', x); 5가 나온다
- x = x || 10;
- console.log('logical or: ', x); 5가 나온다
- console.log(0?? 'coalescing') ?? = null 인지를 판단하고 아니라면 0을 표현해준다.
- shortcut, let z, z??(z=x); console.log('short circuit: ', z);
- y??=30 뜻은 y가 null 이 아니면 y에 30을 넣으라는 소리이다.

## Object
- Dictionary of JS

## Spread
- let input = [1,2,3];
- input = [...input,4,5,6] -> [1,2,3,4,5,6]
- you can use this with object too
- const sumAndMutiply(multiplier, ...number) 이라고 하면 제일 처음 숫자를 제외하곤 나머지는 다 뒤에 저장된다.

## Document Object Model
- html + css to my data structure
- 직접적으로 코드를 바꾸는게 아니라 그 코드가 있는 위치에 새로운 정보를 넣어주어서 거기서만 내용이게 바뀌게 한다.
- const el = document.querySelector('#t');
- el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
- 이런 코드가 있으면 t 아이디를 가지고 있는 친구들을 찾아서 dom에서만 hello 로 나오게 한다.
- 그런데 위에 애는 너무 위험하니까 4.4 에 10 번째 페이지에 있는 코드를 사용하자

## Promises
- Eveything must be asynchronous
- call stack: 밑에 친구는 돌아가고 있는 와중에 이 친구는 혼자 독립적으로 돌아간다.
- web API : 이미 돌아가고 있는 함수가 답을 낼때까지 여기서 놀다가 다 되면 위로 보낸다
- pending, fulfilled, rejected
- 근복적으로 이 promise는 결과와 조건을 정해놓고 그것이 맞는 결과를 가져오게 한다.
- 예시는 4.5 파워포인트를 보면된다.(p18, 19)

## Fetch

- const r = await fetch('https://api.quotable.io/random')
- const j = await r.json()
- console.log(j.content)
- 위에 이런 식으로 사용한다.
- fetch returns promises when the promises are accomplished and make it work.
- 아마 이걸로 3rd party를 가져오는 것 같다.


## Debugging
- chrome : frontend, node.js: backend
- frontend에 있는 코드를 고치면 그냥 새로고침하면 적용되지만, backend에 있는건 아예 껏다켜야한다.
- debugging할떄 backend에 있는 친구는 그냥 vs code에 있는 디버깅을 사용하도록 하자.
- backend code 는 frontend에 나타나지 않는 걸 알아야 한다.

## Daemons
- keeps your node service running
- 현재는 내가 할 필요는 없다. 왜냐하면 deployService를 사용하면 되니까.

## Web services
**How to upload file on your website(using server)**
- mkdir file && cd file
- npm init -y
- npm install express
- npm install multer
- code .
- put html, frontend.js
- start working on backend part
- copy and paste in 5.6.1 page 6 and 9

**Using MangoDB**
- Network Access : anyone can see my work 0.0.0.0/0
- Database Access : Remember your user name, 비밀번호 잊어버리면 바꿀 수 있지만 그면 데이터가 날라갈 수 있기 때문에 반드시 기억하도록 하자.
- Database Deployment : 여기에서 내  데이터베이스를 볼 수 있다.
- mkdir testmongo
- npm init -y
- npm install mongodb
- code . 
- create file .gitignore
- create file index.js
- database에 가서 "connect" 누르면 내 이름, 비밀번호, 그리고 hostname이 나온다.
- username, password, hostname 을 const로 놔두고 저 위에서 얻은 정보를 넣는다.



