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
    const index = codes.findIndex(item => item.code === data.code);
    
    if (index !== -1) {
        codes[index] = data;
    } else {
        codes.push(data);
    }
    res.json({message: "Successfully saved data"})
});

apiRouter.post('/upDateFeedbacks',(req, res) => {
    let obj = req.body
    let feedback = obj.feedbacks
    let code = obj.code

})



apiRouter.get('/load', (req, res) => {
    const code = req.params.code;
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