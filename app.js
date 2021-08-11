const express = require('express');
const app = express();

// usando recursos dinamicos
const path = require('path');
// usando recursos estaticos
app.use(express.static('public'));

//Ruta     /home
app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen (3030, () => console.log('Server running at port 3030'));
