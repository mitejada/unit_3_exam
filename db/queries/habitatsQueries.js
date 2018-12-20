const { db } = require('./index.js')

const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitats')
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have received all habitats'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id)
  db.one('SELECT * FROM habitats WHERE id=$1', habitatId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have one habitat here'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addHabitat = (req, res, next) => {
  db.none('INSERT INTO habitats(category) VALUES(${category})', {
    category: req.body.category
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a habitat'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllHabitats, getSingleHabitat, addHabitat }
