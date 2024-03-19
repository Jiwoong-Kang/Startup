const cookieParser = require('cookie-parser'); // New
const bcrypt = require('bcrypt'); // New
const express = require('express');
const app = express();
const DB = require('./database.js'); // New

const authCookieName = 'token'; // new

const port = process.argv.length > 2 ? process.argv[2] : 4000; 

app.use(express.json());

app.use(cookieParser()); // Use the cookie parser middleware for tracking authentication tokens

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreatAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  }); 

  // GetAuth token for the provided credentials
  apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
  
  // DeleteAuth token if stored in cookie
  apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
    const user = await DB.getUser(req.params.email);
    if (user) {
      const token = req?.cookies.token;
      res.send({ email: user.email, authenticated: token === user.token });
      return;
    }
    res.status(404).send({ msg: 'Unknown' });
  });
  
  // secureApiRouter verifies credentials for endpoints
  var secureApiRouter = express.Router();
  apiRouter.use(secureApiRouter);
  
  secureApiRouter.use(async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  });
  

let codes = []

apiRouter.post('/save',(req, res) => {
    const data = req.body;
    codes.push(data);
    res.json({message: "Successfully saved data"})
});

apiRouter.get('/getData', (req, res) => { 
    const ID = req.query.ID;
    const index = codes.findIndex(item => item.ID === ID);
    
    if (index !== -1) {
        res.json(codes[index].feedbacks);
    } else {
        res.status(404).json({message: "Code not found"});
    }
    });

apiRouter.post('/upDateFeedbacks',(req, res) => {
    const ID = req.query.ID;
    const feedbacks = req.body.feedback;

    const index = codes.findIndex(item => item.ID === ID);

    if (index !== -1) {
        codes[index].feedbacks.push(feedbacks);
        res.json({message: "Successfully updated feedback"});
    } else {
        res.status(404).json({message: "Code not found"});
    }
    
})


apiRouter.get('/load', (req, res) => {
    const code = req.query.code;
    const data = codes.find(item => item.code === code);

    if (data) {
        res.json(data); 
    } else {
        res.status(404).send('No code found.');
    }
});

apiRouter.get('/load_all', (req, res) => { 
    if (codes.length > 0) {
        res.json(codes); 
    } else {
        res.status(404).send('No code found.');
    }
});


app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

dict = {}