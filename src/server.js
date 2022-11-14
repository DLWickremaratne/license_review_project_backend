import express from "express";




//create new express app

const app = express();
app.use(express.json());


// app.post('/hello', (req, res) =>{
//     res.send(`hello ${req.body.name}`
//     );
// });


// app.get('/hello/:name/goodbye/:otherName', (req, res) => {
//     const { name } = req.params;
//     res.send(`Hello ${name}!!`);
// });


app.put('/api/drivers/:fullName/review', (req, res) => {
    const { fullName } = req.params;
    //logic
    const driver = driversInfo.find(a => a.fullName === fullName);
    if (driver) {
        driver.review += 1;
        res.send(`The driver ${fullName} now has ${driver.review} reviews`);
    }else {
        res.send('That driver doesn\'t exist');
    }
    

});

app.post('/api/drivers/:fullName/comments', (req, res) => {
    const { fullName } = req.params;
    const { postBy, text}  = req.body;
    //logic
    const driver = driversInfo.find(a => a.fullName === fullName);
    if (driver) {
        driver.comments.push({ postBy, text });
        res.send(driver.comments);
    }else {
        res.send('That driver doesn\'t exist');
    }
    

});



app.listen(8000, () =>{
    console.log('server is listening on port 8000');
});

