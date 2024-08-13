import express from 'express';
import { user } from '../Model/Users.js';

const route = express.Router();

route.use(express.json());


route.get('/user', async (req, res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


route.get('/user/:id', async (req, res) => {
    try {
        const data = await user.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


route.post('/user', async (req, res) => {
    try {
        const users = req.body;
        const savedUsers = await user.insertMany(users); 
        res.status(200).json(savedUsers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default route;
