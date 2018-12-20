const { db } = require('./index.js')

const getAllTaggings = (req, res, next) => {
  db.any('SELECT * FROM taggings')
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have received all taggings'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleTagging = (req, res, next) => {
  let taggingId = parseInt(req.params.id)
  db.one('SELECT * FROM taggings WHERE id=$1', taggingId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have one tagging'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllTaggingsFromResearcher = (req, res, next) => {
    let taggingId = parseInt(req.params.id)
    db.any('SELECT * FROM taggings WHERE researchers_id=$1', taggingId)
      .then(data => {
        res.status(200).json({
          status: 'success',
          data: data,
          message: 'you have all the tags for this researcher'
        })
      })
      .catch(err => {
        return next(err)
      })
}

const getAllTaggingsOnAnimals = (req, res, next) => {
  let taggingId = parseInt(req.params.id)
  db.any('SELECT * FROM taggings WHERE animal_id=$1', taggingId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all the tags for this animal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addTagging = (req, res, next) => {
  db.none('INSERT INTO taggings(animal_id, researchers_id) VALUES(${animal_id}, ${researchers_id})', {
    animal_id: req.body.animal_id,
    researchers_id: req.body.researchers_id,
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a tag'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllTaggings, getSingleTagging, getAllTaggingsFromResearcher, getAllTaggingsOnAnimals, addTagging }
