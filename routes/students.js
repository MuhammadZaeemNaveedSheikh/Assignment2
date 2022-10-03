const express = require('express');
const router = express.Router();

const Students = require('../models/students');


router.get('/', async (req, res) => {
  try {
    const students = await Students.find({});
    res.send({ students })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newStudent = await Students.create({ name: req.body.name, email: req.body.email, enrollnumber: req.body.enrollnumber });
     res.send({ newStudent });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});


router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The student has been updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
     res.send({ message: 'The student has been removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;