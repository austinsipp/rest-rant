const router = require('express').Router()
const places = require('../models/places.js')

// we are now at GET /places
router.get('/', (req, res) => {  
    res.render('places/index', {places})
})


router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/show', {place: places[id], id})
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })
  
  

router.post('/', (req, res) => {
    console.log(req)
    console.log(req.body)
    if (!req.body.pic) {
        //default image
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        //default image
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        //default image
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  


module.exports = router