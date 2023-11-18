import Router from 'express';
import authroutes from './authroutes.js';

const route = Router();

route.use('/auth', authroutes)

export default route;