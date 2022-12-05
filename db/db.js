const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://TranquillouMAN:HHbgQN18u02afS4O@cluster0.lerij0e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return err;
      }
      
      //remplacer whatever par le nom de votre DB !
      dbConnection = db.db("grp2");
      console.log("Successfully connected to MongoDB.");
    });
  },

  getDb: function () {
    return dbConnection;
  },
};