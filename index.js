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
      console.log(req.body)
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

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });
  
// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
  // setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}
  

let codes = []

secureApiRouter.post('/save',async (req, res) => {
    const data = req.body;
    await DB.addcodes(data);
    res.json({message: "Successfully saved data"})
});

secureApiRouter.get('/getData', async(req, res) => { 
    const ID = req.query.ID;
    const new_code = await DB.getcodes(ID);
    res.send(new_code);
    });

secureApiRouter.post('/upDateFeedbacks',async(req, res) => {
    const ID = req.query.ID;
    const feedbacks = req.body.feedback;

    const new_code = await DB.getcodes(ID);

    if (new_code) {
        await DB.update(ID, feedbacks)
        res.json({message: "Successfully updated feedback"});
    } else {
        res.status(404).json({message: "Code not found"});
    }
    
})


secureApiRouter.delete('/delete', async(req, res) => { // prototype
    const ID = req.query.ID;
    await delete_item(ID)
});

secureApiRouter.get('/load_all', async(req, res) => { 
    const all_code = await DB.get_all();
    res.send(all_code);
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

dict = {}