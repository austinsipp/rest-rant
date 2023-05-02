//const router = require('express').Router()
//const places = require('../models/places.js')





const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places})
  })
  .catch( err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('error:', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place})
  })
  .catch(err => {
    console.log('error',err)
    res.render('error404')
  })
})


router.get('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/comment', { place})
  })
  .catch(err => {
    console.log('error',err)
    res.render('error404')
  })
})


router.post('/:id/comment', (req, res) => {
  console.log("got here")
  console.log(req.body)
  console.log(req.params.id)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.send(err)
          //res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router





/*
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

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id], id })
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


  router.put('/:id', (req, res) => {
    console.log(req.body)
    console.log(req.baseUrl)
    console.log(req)
    let id = Number(req.params.id)
    console.log(places[id])
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
  


module.exports = router*/