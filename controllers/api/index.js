const router = require('express').Rounter();
const userRoutes = require('./userRoutes');
const postRoutes  = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;