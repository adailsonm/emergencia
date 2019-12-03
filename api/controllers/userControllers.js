const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

exports.login = async function(req, res) {
  const user = await User.findOne({
    email: req.body.email
  });
  if (await user.validatePassword(req.body.password)) {
    let token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  } else {
    res.status(401).send({ message: "Usuário ou senha inválida" });
  }
};
// TODO: listar pontos de interesse da BD
exports.list = function(req, res) {
  res.send({ type: "GET" });
};

// adicionar novo ponto de interesse
exports.create = async function(req, res) {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      telephone: req.body.telephone,
      type: req.body.type
    });
  } catch ($e) {
    return $e;
  }

  res.send({ message: "Usuário cadastrado com sucesso!" });
};
// TODO: atualizar ponto de interesse
exports.update = function(req, res) {
  res.send({ type: "PUT" });
};
// TODO: apagar ponto de interesse
exports.delete = function(req, res) {
  res.send({ type: "DELETE" });
};
