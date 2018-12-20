const { db } = require('./index.js')

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have received all animals'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id)
  db.one('SELECT * FROM animals WHERE id=$1', animalId)
    .then(data => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'this is one animal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addAnimal = (req, res, next) => {
  db.none('INSERT INTO animals(species_id, nickname) VALUES(${species_id}, ${nickname})', {
    species_id: req.body.species_id,
    nickname: req.body.nickname
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added an animal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const updateSingleAnimal = (req, res, next) => {
  db.none('UPDATE animals SET species_id=${species_id}, nickname=${nickname} WHERE id=${id}', {
    species_id: req.body.species_id,
    nickname: req.body.nickname,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have updated an animal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id)
  db.none('DELETE FROM animals WHERE id=$1', animalId)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have deleted an animal'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllAnimals, getSingleAnimal, addAnimal, updateSingleAnimal, deleteAnimal }
