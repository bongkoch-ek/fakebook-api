const prisma = require("../models")

const postController = {}

postController.getAllPost = async (req, res, next) => {
    try {
        const rs = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: { firstName: true, lastName: true, profileImage: true }
                }
            }
        })
        res.json({ posts: rs })
    } catch (error) {
        next(error)
    }
}

postController.createPost = async (req, res, next) => {
    try {
        const { message } = req.body
        const rs = await prisma.post.create({
            data: { message, userId: req.user.id }
        })
        res.json({ result: rs })
    } catch (error) {
        next(error)
    }
}
postController.editPost = async (req, res, next) => {
    try {
        const { id } = req.params
        res.json("edit post controller")
    } catch (error) {
        next(error)
    }
}

postController.deletePost = async (req, res, next) => {
    try {
        const { id } = req.params
        res.json("delete post controller")
    } catch (error) {
        next(error)
    }
}

module.exports = postController