const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

    //set up GET one, PUT, and DELETE at /api/users/:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;