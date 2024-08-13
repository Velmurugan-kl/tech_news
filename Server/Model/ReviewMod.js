import mongoose from 'mongoose';

const SpecificationSchema = new mongoose.Schema({
    category: String,
    detail: String,
});

const reviewSchema = new mongoose.Schema({
    user: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

const ReviewSchema = new mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    heroText: String,
    heroDescription: String,
    specifications: [SpecificationSchema],
    pros: [String],
    cons: [String],
    performanceReview: String,
    designReview: String,
    conclusion: String,


});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
