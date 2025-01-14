const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
    res.json(friends);
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
    const email = req.params.email;
    if (friends[email]) {
        res.json(friends[email]);
    } else {
        res.status(404).send('Friend not found');
    }
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
    const newFriend = req.body;
    if (newFriend && newFriend.email && !friends[newFriend.email]) {
        friends[newFriend.email] = {
            "fristName": newFriend.firstName,
            "lastName": newFriend.lastName,
            "DOB": newFriend.DOB
        };
        res.status(201).json(friends[newFriend.email]);
    } else {
        res.status(400).send('Invalid request format, email missing or user already exists');
    }
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
    const email = req.params.email;
    const updatedFriend = req.body;
  
    if (friends[email]) {
        const updated = {
             ...friends[email],
             ...updatedFriend
            }
            friends[email] = updated;
          res.status(200).json(friends[email]);
  
    } else {
      res.status(404).send('Friend not found');
    }
  });


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
    const email = req.params.email;
    if (friends[email]) {
        delete friends[email];

        res.status(200).send('Friend deleted.');
    } else {
        res.status(400).send('Friend not found');
    }
});

module.exports=router;
