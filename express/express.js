const express = require('express')
const app = express()
// midleware para parsear a json req body
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from Express server')
})

app.get('/user', (req, res) => {
    let name = req.query.name;
    res.send(`Tu nombre es: ${name}`);
});

app.post('/user', (req, res) => {

    let user = {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    }
    console.log(user);
    res.json (user)
})

app.listen(4000);

