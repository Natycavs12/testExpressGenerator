const mongoose = require('mongoose');

/*main()
.then{(res) => console.log("Conex exitosa")}
.catch{(err) => console.log(err)};*/

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
