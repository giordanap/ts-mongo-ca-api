import { Router } from 'express';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controller/user.controller';
import { MockRepository } from '../repository/mock.repository';
import { MongoRepository } from '../repository/mongo.repository';

const router = Router();

// Iniciar repositorio
const userRepository = new MongoRepository();

// Iniciar caso de uso
const userUseCase = new UserUseCase(userRepository);

// Iniciar user controller
const userCtrl = new UserController(userUseCase);

// Rutas
router.post('/user', userCtrl.insertCtrl);
router.get('/user', userCtrl.getCtrl);

export default router;
