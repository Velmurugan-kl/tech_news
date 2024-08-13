import mongoose,{ Schema } from 'mongoose';


// Define the related article schema
const RelatedArticleSchema = new Schema({
  title: String,
  url: String
});

// Define the article schema
const ArticleSchema = new Schema({
    id:Number,
  title: String,
  author: {
    name: String,
    bio: String,
    avatar: String
  },
  date: String,
  image: String,
  content: String,
  tags: [String],
  relatedArticles: [RelatedArticleSchema]
});

// Create and export the model
const Article = mongoose.model('Article', ArticleSchema);
export default Article;
