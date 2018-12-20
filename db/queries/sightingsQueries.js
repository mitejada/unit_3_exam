const { db } = require('./index.js')

const getAllSightings = (req, res, next) => {
  db.any('SELECT * FROM sightings')
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have recieved all sightings'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllSightingsForSpecies = (req, res, next) => {
  let speciesId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE species_id=$1', speciesId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all sighthings for this species'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllSightingsForResearcher = (req, res, next) => {
  let researchersId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE researcher_id=$1', researchersId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all sightings for this researcher'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllSightingsForHabitats = (req, res, next) => {
  let habitatsId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE habitat_id=$1', habitatsId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all the sightings for this habitat'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addSighting = (req, res, next) => {
  db.none('INSERT INTO sightings(researcher_id, species_id, habitat_id) VALUES(${researcher_id}, ${species_id}, ${habitat_id})', {
    researcher_id: req.body.researcher_id,
    species_id: req.body.species_id,
    habitat_id: req.body.habitat_id
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a sighting'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteSighting = (req, res, next) => {
  let sighthingsId = parseInt(req.params.id)
  db.none('DELETE FROM sightings WHERE id=$1', sighthingsId)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have deleted a sighthing'
      })
    })
    .catch(err => {
      return next(err )
    })
}

module.exports = { getAllSightings, getAllSightingsForSpecies, getAllSightingsForResearcher, getAllSightingsForHabitats, addSighting, deleteSighting }
