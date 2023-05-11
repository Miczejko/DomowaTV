const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');
router.post('/verify', authMiddleware, authController.verify);
router.post('/refresh', authController.refresh);
router.post('/logout', authController.logout);

//przykładowy route z autentyfikacją

router.post('/example', authMiddleware, authController.example);

module.exports = router;