const express = require('express')
const gameRouter = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// Get all games
gameRouter.get('/', async (req, res) => {
    try {
        const games = await prisma.games.findMany({
            include: {
                category: true,
            },
        });
        res.send(games);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Get single game
gameRouter.get('/:id', async (req, res) => {
    try {
        const game = await prisma.games.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                category: true,
            },
        });
        res.send(game);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Add new game
gameRouter.post('/', async (req, res) => {
    try {
        const game = await prisma.games.create({
            data: req.body
        });
        res.send(game);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
});

//Delete game 
gameRouter.delete('/:id', async (req, res) => {
    try {
        const deleteGame = await prisma.games.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(deleteGame);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    
})

//Update a game
gameRouter.put('/:id', async (req, res) => {
    try {
        const updateGame = await prisma.games.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.send(updateGame)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})


module.exports = gameRouter;