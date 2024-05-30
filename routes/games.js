const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth")

const { 
    findAllGames, 
    createGame, 
    findGameById, 
    updateGame,
    deleteGame,
    checkEmptyFields, 
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists,
    checkIsVoteRequest} = require('../middlewares/games');
const { 
    sendAllGames, 
    sendGameCreated, 
    sendGameById,
    sendGameUpdated,
    sendGameDeleted
 } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
 findAllGames,
 checkEmptyFields,
 checkIsGameExists,
 checkIfCategoriesAvaliable,
 createGame,
 checkAuth,
 sendGameCreated);
 gamesRouter.get(
    "/games/:id", 
    findGameById, 
    sendGameById);
gamesRouter.put(
    "/games/:id",  
      findGameById,
      checkIsVoteRequest, 
      checkEmptyFields,
      checkIfCategoriesAvaliable,
      checkIfUsersAreSafe,
      findAllGames,
      checkIsGameExists,
      updateGame, 
      sendGameUpdated,
      checkAuth
  );
gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted,
    checkAuth // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  );

module.exports = gamesRouter;