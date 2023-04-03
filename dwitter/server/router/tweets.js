import express from 'express';
import 'express-async-errors';
import * as tweetCont from '../controller/tweet.js';

const router = express.Router();

router.get('/', tweetCont.getTweets);
router.post('/', tweetCont.createTweets);

router.get('/:id', tweetCont.getTweet);
router.put('/:id', tweetCont.updateTweet);
router.delete('/:id', tweetCont.deleteTweet);

export default router;
