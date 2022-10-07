var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete(":id", deleteUser);

function getAllUsers (req, res, next) {
  res.send('respond with a resource in route /');
};

/*router.get('/a', function(req, res, next) {
  res.send('respond with a resource in route /a');
});

*/
/*router.get('/:id', function(req, res, next) {
  console.log("El usuario que se está intentando buscar es el que tiene el id: ", req.params.id )
  //res.send(`respond with a resource in route ${req.params.id}`);
});*/

function getUserById(req, res, next) {
//  router.get('/:type/:id', function(req, res, next) {
    /*  if(!req.params.type){
    res.status(400).send("Type not found");
  }*/
  console.log("El usuario que se está intentando buscar es el que tiene el id: ", req.params.id );
  res.send(`respond with a resource in route ${req.params.id}`);
};

function createUser(req, res, next){
  console.log("Create user: ", req.body );
  //TO DO: create User
  const user = req.body;
  res.send(`User created: ${user.email}`);
}

function deleteUser(req, res, next){
  console.log("Delete user with id: ", req.params.id );
  //TO DO: delete User

  if(!req.params.id){
    res.status(500).send("The param id is not defined");

  }
  res.send("User deleted: ", req.params.id );
}

function updateUser(req, res, next){
  console.log("Update user by id: ", req.params.id  );
  //TO DO: create User
  const user = req.body;
  res.send(`User updated: ${user.email}`);
}

module.exports = router;
