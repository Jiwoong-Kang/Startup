const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000; 

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

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
    const code = req.query.code;
    const feedbacks = req.body.feedback;

    const index = codes.findIndex(item => item.code === code);

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

apiRouter.get('/get_code/:code', (req, res) => {
    const code = req.params.code;
    const result = codes.find(item => item.code === code);
    if (result) {
        res.json(result);
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