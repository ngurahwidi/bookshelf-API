const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookHandler,
  deleteBookHandler,
} = require("./handler.js");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },

  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },

  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },

  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookHandler,
  },

  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
