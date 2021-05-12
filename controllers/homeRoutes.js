// data for posts > either landing page or dashboard
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../util/auth');

// render homepage view with data from all posts
router.get('/', async (req, res) => {
try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
        include: [
            {
            model: User,
            attributes: ['user_name'],
            },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into homepage template
    res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

// render view-post view with data for individual posts and associated comments data
router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(
            req.params.id, {
                include: [
                    {
                        model: User,
                        attributes: ['user_name'],
                    },
                    {
                        model: Comment,
                        include: [{model: User}],
                        attributes: ['comment_content', 'user_id']
                    }
                ],
            }
        );

        if (!postData) {
            res.status(404).json({ message: 'No blog post to be found, please try again!' });
            return;
        }

        const post = postData.get({ plain: true });

        res.render(
            'view-post', {
                ...post,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

// rendering create-post view with router.get
router.get('/new-post', withAuth, async (req, res) => res.render('create-post', { logged_in: req.session.logged_in } ));

// rendering edit-post view with router.get
router.get('/edit-post/:id', withAuth, async (req, res) => {
    try {
        // find post by pk
        const postData = await Post.findByPk(req.params.id);
        
        if (!postData) {
            res.status(404).json({message: 'No blog post to be found, please try again!'});
            return;
        }

        const post = postData.get({ plain: true});

        res.render(
            'edit-post', {
                ...post,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

// rendering dashboard view with logged in user posts
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
  }
});

// rendering signup
router.get('/signup', (req, res) => { res.render('signup')});

// rendering logout view
router.get('/logout', (req, res) => { res.render('logout')});

module.exports = router;
