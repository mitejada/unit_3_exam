const { db } = require('./index.js')

const getAllResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have received all researchers'
      })
    })
    .catch(err => {
      return next(err)
    })
};

const getSingleResearcher = (req, res, next) => {
  let researchersId = parseInt(req.params.id)
  db.one('SELECT * FROM researchers WHERE id=$1', researchersId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have one researcher'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addResearcher = (req, res, next) => {
  db.none('INSERT INTO researchers(name, job_title) VALUES(${name}, ${job_title})', {
    name: req.body.name,
    job_title: req.body.job_title
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a researcher'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const updateResearcher = (req, res, next) => {
  db.none('UPDATE researchers SET name=${name}, job_title=${job_title} WHERE id=${id}', {
    name: req.body.name,
    job_title: req.body.job_title,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have updated a researcher'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteResearcher = (req, res, next) => {
  let researchersId = parseInt(req.params.id)
  db.none('DELETE FROM researchers WHERE id=$1', researchersId)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have removed a wack researcher'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllResearchers, getSingleResearcher, addResearcher, updateResearcher, deleteResearcher }
