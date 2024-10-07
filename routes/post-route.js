const express = require('express')
const postController = require('../controllers/post-controller')
const authenticate = require('../middlewares/authenticate')
const postRoute = express.Router()
const upload = require('../middlewares/upload')

postRoute.get('/', postController.getAllPost)
postRoute.post('/', upload.single('image'), postController.createPost)
postRoute.put('/:id', postController.editPost)
postRoute.delete('/:id', postController.deletePost)

module.exports = postRoute