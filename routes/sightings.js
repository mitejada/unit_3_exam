const express = require('express')
const router = express.Router()
const { getAllSightings, getAllSightingsForSpecies, getAllSightingsForResearcher, getAllSightingsForHabitats, addSighting, deleteSighting } = require('../db/queries/sightingsQueries.js')

router.get('/', getAllSightings)
router.get('/species/:id', getAllSightingsForSpecies)
router.get('/researchers/:id', getAllSightingsForResearcher)
router.get('/habitats/:id', getAllSightingsForHabitats)
router.post('/', addSighting)
router.delete('/:id', deleteSighting)






module.exports = router
