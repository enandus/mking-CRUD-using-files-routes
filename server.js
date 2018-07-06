<<<<<<< HEAD
import express from 'express'
import bodyParser from  'body-parser'
import router from './router.js'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/:user', router)

app.listen(3000, () => console.log('Server Started....'))
=======
import express from 'express'
import bodyParser from  'body-parser'
import router from './router.js'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/:user', router)

app.listen(3000, () => console.log('Server Started....'))
>>>>>>> 0d81f221c387b24d8ca97c45b3c1df29d17264d7
