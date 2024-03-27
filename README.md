# Code Sharing

## Specification Deliverable

### Elevator Pitch
Have you ever encountered a critical coding error while working on a project? Are you still apprehensive about using unfamiliar programming languages and uncertain about how to effectively learn and apply new languages? Code sharing can be instrumental in addressing these concerns. Users proficient in specific languages or coding can provide valuable feedback. Additionally, users can share their coding challenges, creating a collaborative environment where everyone can enhance their skills collectively by solving problems together.

### Design
![login page](https://github.com/Jiwoong-Kang/Startup/blob/main/Login.png)
![Sharing code](https://github.com/Jiwoong-Kang/Startup/blob/main/Sharing%20Code.png)
![Leave feedback](https://github.com/Jiwoong-Kang/Startup/blob/main/Leave%20feedback.png)

### Key Features
- Secure login over HTTPS
- Ability to share your code
- Get or leave the feedback from everyone
- Ability to create and delete your sharing
- Upload coding problems

### Technologies
- HTML : Uses correct HTML structure for application. Six HTML pages. One for login, one for sharing, one for leaving feedbacks one for writing your code, one for your hompage where you can see what you uploaded and one for making new account.
- CSS : All styling should be enhanced through the use of proper white space, contrasting colors, and appropriate screen sizes to ensure clarity.
- Javascript :  The application includes functionality for user login, category display, feedback presentation, result display, and backend endpoint calls.
- Service : Backend service with endpoints for:
   - login
   - feedback
   - personal code
- DB/Login : Store users, codes, and feedbacks in database. Register and login users. Credentials securely stored in database. Can't share codes and leave and read feedbacks unless authenticated.
- Websocket : As each user shares their code, it becomes visible to all other users.
- React :  Application ported to use the React web framework.


## HTML deliverable

**For this deliverable I built out the structure of my application using HTML.**

- HTML Pages : Six HTML pages for login and home page, uploading your code, shared code pages, leaving feedback page, your personal homepage and making new account page.  
- Links : Upon logging in, you are seamlessly redirected to your code page. Upon code submission, you are seamlessly directed to the shared code page, which in turn provides a convenient link to the feedback page, allowing you to easily identify and address any issues with your code.
- Text : Each submission button will be distinguished by a unique color, enhancing visual clarity and providing a distinct visual identifier for each interactive element. But in this step, I didn't change the color yet. I will put some unique color later by using CSS.
- Images : I have incorporated images related to computers on the page to provide a visual cue, ensuring that users can easily discern the purpose of this platform.
- DB / Login : Input box and submit botton for login. Feedback page will show your code and other's feedback under the code. When new account is created, that information will be saved in DB. But I just made a structure for that and I will put more code like javascript in the future.
- Websocket : The shared code pages and feedback pages will be accessible to all users upon logging in. So, if a user upload their code, then other users can see that and leave feedbacks. And all feedbacks will be opened to everyone. In this step, I just made a structure so that I can put my javascript later.
- Placeholder for 3rd party service calls : I put this part in my index.html for the future. I will update that after learning Javascript 


## CSS deliverable

**For this deliverable I designed my website by making my own CSS.**

- Header, Footer and Main content body : I used different colors to distinguish the scetion among header,main and footer. 
- Navigation elements: I dropped the underlines and changed the color for anchor elements.
- Responsive to window resizing : My website looks great on all window sizes and devices.
- Application elements : Used good contrast and whitespace. Also, I gave specific colors to each button such as blue for save and red for delete, I made those to understood by users easily. 
- Application elements(will be updated) : I didn't learn javascript yet, so I didn't put any css yet on there. Instead, I appeared those part by words. Those will be updated soon with HTML and CSS both.
- Application text content : I used consistent fonts which is sans-serif. And for the letters to show what this page is for, I made them a little bit bigger and put those on the top of the body.
- Application images : I put this image at the header so the image shows my website's identity.

## Javascript deliverable

**For this deliverable, I used JavaScript for a single user to save their data at local storage. I also added some places that uploaded code by others will show.**

- Login : When you press the login button, it will direct you to mypage where you can all the codes that you uploaded and there is an account login section where you can make a new account.
- Database : All uploaded codes are stored at local storage but they will be replaced by database data later. So far, you can only see your code which is at local storage.
- Websocket : I put a code that users can leave their reponses and it is updated automatically. Now, I made it just show "Eich left numbers". I will keep updating this part later. You may see this part if you click, codesharing and click the title. And then it will be updated automatically.
- Application's interaction logic : After you upload your code, you may see your code in different pages. For example, if you upload your code at feedback section, you can see your code in different pages like mypage or code part. Also, they are shown as lists first and when you click, all datas show only on your laptop, since I am just using local storage. Also you can leave the feedback.

## Service deliverable

**For this deliverable, I made some endpoints and update my information to server.**

- Node.js/Express HTTP service : Done. It is in index.js.
- Static middleware for frontend : Done. It is in index.js.
- Calls to third party endpoints : I brought some quote.
- Backend service endpoints : I wrote all necessary backend endpoints at index.js.
- Frontend calls service endpoints : I did this using the fetch function at all part where it needs to use HTTP.(code.js, feedback.js and so on)

## DB/Login deliverable

**For this deliverable, I created my DB and made login session so that I can distinguish people by their id and password.**

- MongoDB Atlas database created : Done!
- Stores data in MongoDB : Done!
- User registration : creates a new account in the database.
- Existing users : Store the codes list under the same user if the user already exists.
- Use MongoDb to store credentials : Store both users and their codes.
- Restricts functionality : You cannot upload your code or leave feedbacks unless you logged in. This is the restriction.

## WebSocket deliverable

**The following is an example of the required information for the Startup Websocket deliverable.

- Backend listens for WebSocket connection : Done!
- Frontend makes WebSocket connection : Done!
- Data sent over WebSocket connection : Done!
- WebSocket data displayed : Users can notice in realtime if new codes or feedbacks are updated. You can see this notification when you are writing your code, feedbacks or surfing mypage and codesharing page.