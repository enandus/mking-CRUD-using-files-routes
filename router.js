import express from 'express';

const router = express.Router()

router.route('/:name').get((req, res) => {
        res.send(req.params.name + ' Logged in Successfully!')
    })

export default router