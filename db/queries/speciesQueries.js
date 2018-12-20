const { db } = require('./index.js')

const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have received all species'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleSpecies = (req, res, next) => {
  let speciesId = parseInt(req.params.id)
  db.one('SELECT * FROM species WHERE id=$1', speciesId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'here is one species'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addSpecies = (req, res, next) => {
  db.none('INSERT INTO species(name, is_mammal) VALUES(${name}, ${is_mammal})', {
    name: req.body.name,
    is_mammal: req.body.is_mammal,
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'you have added a species!'
    })
  })
  .catch(err => {
    return next(err)
  })
}

module.exports = { getAllSpecies, getSingleSpecies, addSpecies }
