import Authentication from '../controllers/authentication';
import docs from './docs'

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send({
        status: 'API connected',
        docs
    });
})

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.post('/userProfile', Authentication.updateProfile)

export default router;