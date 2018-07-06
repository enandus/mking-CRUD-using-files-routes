<<<<<<< HEAD
import express from 'express';

const router = express.Router()

router.route('/:name').get((req, res) => {
        res.send(req.params.name + ' Logged in Successfully!')
    })

=======
import express from 'express';

const router = express.Router()

router.route('/:name').get((req, res) => {
        res.send(req.params.name + ' Logged in Successfully!')
    })

>>>>>>> 0d81f221c387b24d8ca97c45b3c1df29d17264d7
export default router