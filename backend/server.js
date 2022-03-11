const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send("api is running...");
})

// fetch all notes
app.get('/api/notes', (req,res) => {
    res.send(notes);
})

app.get('/api/notes/:id', (req,res) => {
    const found = notes.some(note => parseInt(note._id) === parseInt(req.params.id));

    if(found){
        const note = notes.filter(note => note._id === parseInt(req.params.id));
        res.send(note);
    }
    else{
        res.send(`Note with id ${req.params.id} does not exist`);
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`server started on port ${PORT}...`)});

