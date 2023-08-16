const { Comment } = require('../../models')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body, 
        // user_id: req.session.user_id
    });
        if (!newComment) {
            res.status(404).json({ message: "cannot create new post" })
        }
        res.status(200).json({ newComment })
    } catch (err) {
        res.status(500).json(err);
    }

});



module.exports = router