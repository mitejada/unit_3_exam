const express = require('express')
const router = express.Router()
const { getAllTaggings, getSingleTagging, getAllTaggingsFromResearcher, getAllTaggingsOnAnimals, addTagging } = require('../db/queries/taggingsQueries.js')

router.get('/', getAllTaggings)
router.get('/:id', getSingleTagging)
router.get('/researchers/:id', getAllTaggingsFromResearcher)
router.get('/animals/:id', getAllTaggingsOnAnimals)
router.post('/', addTagging)




module.exports = router
