
import Router from 'koa-router';
const router = new Router();
import { testA, testB, testC, testD } from '../controller/test'

router.get('/a', testA);
router.post('/a', testB);
router.delete('/a', testC);
router.put('/a', testD);

module.exports = router.routes();