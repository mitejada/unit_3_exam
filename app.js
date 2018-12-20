const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const researchers = require('./routes/researchers.js')
const species = require('./routes/species.js')
const animals = require('./routes/animals.js')
const habitats = require('./routes/habitats.js')
const taggings = require('./routes/taggings.js')
const sightings = require('./routes/sightings.js')



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/researchers', researchers)
app.use('/species', species)
app.use('/animals', animals)
app.use('/habitats', habitats)
app.use('/taggings', taggings)
app.use('/sightings', sightings)


app.get('/', (req, res) => {
  res.send('THIS IS THE HOMEPAGE');
})

app.listen(5000, () => {
  console.log('LISTENING!');
})
