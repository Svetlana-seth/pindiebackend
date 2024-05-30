const usersRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth")  

const { 
  findAllUsers, 
  createUser, 
  findUserById, 
  updateUser,
  deleteUser, 
  checkIsUserExists,
  hashPassword,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail} = require('../middlewares/users');
const { 
  sendAllUsers, 
  sendUserCreated, 
  sendUserById, 
  sendUserUpdated,
  sendUserDeleted } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
  // routes/users.js
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated,
    checkIsUserExists,
    hashPassword,
    checkAuth,
    checkEmptyNameAndEmailAndPassword
  );
usersRouter.get(
  "/user/:id",
  findUserById,
  sendUserById)
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser, 
  sendUserUpdated,
  checkAuth
);
usersRouter.delete(
  "/users/:id", 
  deleteUser,
  sendUserDeleted,
  checkAuth
);
usersRouter.get("/me", checkAuth);

module.exports = usersRouter;