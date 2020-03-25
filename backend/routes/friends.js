const router = require('express').Router();
let Friend = require('../models/friend.model');

router.route('/').get((req, res) => { // to get the existing friends we go to postman and make a get request of http://localhost:5000/friends/
    Friend.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error ' + err));

});

router.route('/add').post((req, res) => { // to add a new friend we go to postman and make a post request of http://localhost:5000/friends/add
    const firstname = req.body.firstname; // to the body of the request we put this data in json format
    const lastname = req.body.lastname;
    const age = Number(req.body.age);

    const newFriend = new Friend({ firstname, lastname, age });
    newFriend.save() // it saves the new exercise to the database
        .then(() => res.json('Friend added!'))
        .catch(err => res.status(400).json('Error ' + err))
});

router.route('/:id').get((req, res) => { // to get an exercise based on its id we go to postman and make a get request of http://localhost:5000/exercises/1234566
    Friend.findById(req.params.id)
        .then(friend => res.json(friend))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => { // to delete an exercise we go to postman and make a delete request of http://localhost:5000/exercises/1234566
    Friend.findByIdAndDelete(req.params.id)
        .then(() => res.json("Friend deleted"))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => { // to update an exercise we go to postman and make a post request of http://localhost:5000/exercises/update/1234566
    const firstname = req.body.firstname; // to the body of the request we put this data in json format
    const lastname = req.body.lastname;
    const age = Number(req.body.age);

    Friend.findById(req.params.id)
        .then(friend => { // currently we have to provide all these info to update an exercise, otherwise it will give an error but this can be changed
            friend.firstname = firstname;
            friend.lastname = lastname;
            friend.age = age;

            friend.save().then(() => res.json('Friend updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })

});

module.exports = router;