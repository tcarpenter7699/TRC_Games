const express = require('express')
const reviewRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

reviewRouter.use(express.json())

reviewRouter.get('/', async (req, res) => {
    try {
        const reviews = await prisma.reviews.findMany({
            include: {
                game: true,
                user: true,
            },
            orderBy: {
                rating: 'desc'
            }
        })
        res.send(reviews);
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

reviewRouter.get('/:id', async (req, res) => {
    try {
        const reviews = await prisma.reviews.findMany({
            where: {
                gameId: parseInt(req.params.id)
            },
            include: {
                game: true,
                user: true,
            },
            orderBy: {
                id: 'desc'
            }
        })
        res.send(reviews);
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

reviewRouter.get('/topThree/3', async (req, res) => {
    try {
        const reviews = await prisma.reviews.findMany({
            include: {
                game: true,
                user: true,
            },
            orderBy: {
                rating: 'desc'
            }
        })
        res.send([reviews[0],reviews[1],reviews[2]]);
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

reviewRouter.post('/add', async (req, res) => {
    try {
        const { content, rating, userId, gameId } = req.body;
        console.log(req.body)
        const addReview = await prisma.reviews.create({
            data: {
                content,
                rating, 
                userId,
                gameId
            }
        })
        res.send(addReview);
        console.log("Review added!")
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

reviewRouter.delete('/delete/:id', async (req, res) => {
    try {
        const deleteReview = await prisma.reviews.delete({
            where: {
                id: parseInt(req.params.id),
            }
        })
        res.send(deleteReview);
        console.log("Review deleted!")
    } catch(err){
        console.log(err);
        res.sendStatus(500)
    }
});

module.exports = reviewRouter;