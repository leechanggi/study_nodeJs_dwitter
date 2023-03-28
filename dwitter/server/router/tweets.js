import express from 'express';
import 'express-async-errors';

const router = express.Router();

const tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? tweets.filter(tweet => tweet.username === username) : tweets;
  res.status(200).json(data);
});

// router.post('/', (req, res) => {
//   res.status(201).send('POST: /tweets');
// });

// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   res.status(200).send(`GET: /tweets/${id}`);
// });

// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   res.status(200).send(`PUT: /tweets/${id}`);
// });

// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   res.status(200).send(`DELETE: /tweets/${id}`);
// });

export default router;
