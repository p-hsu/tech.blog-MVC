// data to create, update, delete Comments
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../util/auth');

//creating new comment 
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_content: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update comment
router.put('/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        }
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'Hmm..not sure that comment exists' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// delete comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'Hmm..not sure that comment exists' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
