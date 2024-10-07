const prisma = require("../models")
const cloudinary = require('../config/cloundinary')
const path = require('path')
const fs = require('fs/promises')

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
        const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path,
                {
                    overwrite: true,
                    // public_id: req.file.fileName
                    public_id: path.parse(req.file.path).name
                })
        }
        fs.unlink(req.file.path)
        const data = {
            message ,
            image : uploadResult.secure_url || "",
            userId : req.user.id
        }
        const rs = await prisma.post.create({data})
        res.json({ rs })
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