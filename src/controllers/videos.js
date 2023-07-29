//capturar las peticiones, manejarlas y resolverlas, no deben contener logica de negocios
//no deben conectarse a bases de datos ni hacer consultas
//toma lo que viene de parametros y lo envia a un servicio, es alli en el servicio donde se hace la logica de negocios
const { getAllVideos } = require("../services/videos.js");
const getList = (req, res) => {
  res.send({ data: getAllVideos() });
};

const getDetail = (req, res) => {
  res.send({ data: "Detalle" });
};

const updateItem = (req, res) => {
  res.send({ data: "Actualizando" });
};

const createItem = (req, res) => {
  res.send({ data: "Creando" });
};

const deleteItem = (req, res) => {
  res.send({ data: "Eliminando" });
};

module.exports = {
  getList,
  getDetail,
  updateItem,
  createItem,
  deleteItem,
};
