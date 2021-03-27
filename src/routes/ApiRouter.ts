import { Request, Response, Router } from 'express';
import {  StatusCodes } from 'http-status-codes';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

// router.get('/', async (req: Request, res: Response) => {
//     return res.status(StatusCodes.NOT_IMPLEMENTED).end();
// });


// router.get('/', async (req: Request, res: Response) => {
//     return res.status(StatusCodes.NOT_IMPLEMENTED).end();
// });
// Export the base-router
export const ApiRouter =  router;
