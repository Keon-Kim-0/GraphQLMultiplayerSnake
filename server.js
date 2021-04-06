
//using commonJS instead of es6 import/export due to graphQL modules loading problems with es6 and limited time.
//planning to fix the problem if time allows. But webpack should still be able to load.

//const bodyParser = require('body-parser')
const express = require("express");
const path = require("path");

//grabbing schema with graphql type (gql) and endpoints
const schema = require('./src/schema/schema');




//declaring express app after wrapping it in created graphql middleware(grabbing schema and endpoint)
const app = express();
schema.applyMiddleware({
    app
});


app.use(express.static(path.join(__dirname, 'build')));


//redirecting react-router urls in case user refreshes, making get request to server.
app.get(['/login', '/register'], function (req, res) {
    res.redirect('/');
});

//404 handler
app.use(function (req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }
    if (req.accepts('json')) {
        res.json({ error: 'Not found' });
        return;
    }
    res.type('txt').send('Not found');
});



app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 404,
        message: { err: 'Failed to load resource: the server responded with a status of 404 (Bad Request)' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

let port = 8080
app.listen(port, () => {
    console.log("server started on port: " + port);
});

//PORT FORWARDED test before amplify ebs... note: ADDRESS AND PORT IS: http://100.2.34.50:8080/
//set up for ebs deploy...



