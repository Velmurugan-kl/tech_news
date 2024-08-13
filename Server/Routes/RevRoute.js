import express from 'express';
import Review from '../Model/ReviewMod.js';

const route1 = express.Router();

route1.use(express.json());

// Get all reviews
route1.get('/reviews', async (req, res) => {
    try {
        const data = await Review.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a single review by ID
route1.get('/reviews/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = await Review.findOne({ id: id });
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Post a new review
route1.post('/reviews', async (req, res) => {
    try {
        // Find the review with the highest id
        const lastReview = await Review.findOne().sort({ id: -1 });

        // Set the new id to one more than the highest existing id
        const newId = lastReview ? lastReview.id + 1 : 1;

        // Create a new review with the incremented id
        const newReview = new Review({ ...req.body, id: newId });

        // Save the new review to the database
        await newReview.save();

        res.status(200).json(newReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

route1.post('/reviewbox', async (req, res) => {
    try {
      const { user, rating, comment, date } = req.body;
  
      // Create a new review instance
      const newReview = new ReviewBox({
        user,
        rating,
        comment,
        date: date || Date.now(), // Use provided date or default to now
      });
  
      // Save the review to the database
      const savedReview = await newReview.save();
  
      res.status(201).json(savedReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  route1.post('/reviewbox/:id', async (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        const { user, rating, comment, date } = req.body;
        
        // Find the review by id and push new review to it
        const updatedReview = await Review.findOneAndUpdate(
            { id: reviewId },
            { $push: { review: { user, rating, comment, date } } },
            { new: true, useFindAndModify: false }
        );

        if (updatedReview) {
            res.status(200).json(updatedReview);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default route1;
