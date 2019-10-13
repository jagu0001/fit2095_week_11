const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();

app.listen(8000);

app.use("/", express.static(path.join(__dirname, "dist/Week11Ang")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connected Successfully');
});

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.delete("/actors/delete/filter/15", actors.deleteYoung);
app.delete("/actors/includeMovies/:id", actors.deleteActorAndMovies);
app.delete("/actors/:actorID/:movieID", actors.removeMovie);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
app.get("/actors/get/atLeastTwo", actors.getInTwoMovies);
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);

//Movie RESTFul endpoints
app.delete("/movies/delete/:deleteYear/deleteBefore", movies.deleteBeforeYear);
app.delete("/movies/:movieID/:actorID", movies.removeActor)
app.post("/movies/:id/actors", movies.addActor);
app.get("/movies/:year1/:year2", movies.getYearMovie);
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete("/movies/:id", movies.deleteOne);