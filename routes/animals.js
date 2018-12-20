const express = require('express')
const router = express.Router()
const { getAllAnimals, getSingleAnimal, addAnimal, updateSingleAnimal, deleteAnimal } = require('../db/queries/animalsQueries.js')

router.get('/', getAllAnimals)
router.get('/:id', getSingleAnimal)
router.post('/', addAnimal)
router.patch('/:id', updateSingleAnimal)
router.delete('/:id', deleteAnimal)


module.exports = router
