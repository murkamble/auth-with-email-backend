const router = require('express').Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')
const authAdminMiddleware = require('../middleware/authAdmin.middleware')

router.post('/register', userController.register)
router.post('/activation', userController.activateEmail)
router.post('/login', userController.login)
router.post('/refresh_token', userController.getAccessToken)
router.post('/forgot', userController.forgotPassword)
router.post('/reset', authMiddleware, userController.resetPassword)
router.get('/infor', authMiddleware, userController.getUserInfor)
router.get('/all_infor', authMiddleware, authAdminMiddleware, userController.getUsersAllInfor)
router.get('/logout', userController.logout)
router.patch('/update', authMiddleware, userController.updateUser)
router.patch('/update_role/:id', authMiddleware, authAdminMiddleware, userController.updateUsersRole)
router.delete('/delete/:id', authMiddleware, authAdminMiddleware, userController.deleteUser)

module.exports = router