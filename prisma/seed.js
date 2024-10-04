const bcrypt = require('bcryptjs')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const hashedPassword = bcrypt.hashSync('123456', 10)
const userData = [
    { firstName: 'Andy', lastName: 'CodeCamp', password: hashedPassword, email: 'andy@ggg.mail', profileImage: 'https://www.svgrepo.com/show/420343/avatar-joker-squad.svg' },
    { firstName: 'Bobby', lastName: 'CodeCamp', password: hashedPassword, email: 'bobby@ggg.mail', profileImage: 'https://www.svgrepo.com/show/420317/artist-avatar-marilyn.svg' },
    { firstName: 'Candy', lastName: 'CodeCamp', password: hashedPassword, mobile: '1111111111', profileImage: 'https://www.svgrepo.com/show/420329/anime-away-face.svg' },
    { firstName: 'Danny', lastName: 'CodeCamp', password: hashedPassword, mobile: '2222222222', profileImage: 'https://www.svgrepo.com/show/420316/indian-man-sikh.svg' },
]

console.log('DB seed...')

async function run() {
    await prisma.user.createMany({ data: userData })
}

run()