const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');
const db = require("./db/db");
const jsonParser = bodyParser.json();
var cors = require('cors')

dbo.connectToServer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
  });

app.get("/pokemon", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("pokemon")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });      
  });
  app.get("/pokedex", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("pokedex")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });      
  });
  app.get("/types", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("types")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });      
  });
app.post('/pokemon/insert', jsonParser, (req, res) => {
  console.log(req.body);
    const body = req.body;
    console.log('Got body:', body);
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("pokemon")
      .insert({...body})
      .then(function (result, err) {
        if (err) {
          res.status(400).send(err.message);
        } else {
          res.json(result);
        }
      })
      .catch((err)=>res.json(err));
});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .insert({...body})
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.json(result);
      }
    })
    .catch((err)=>res.json(err));
});

app.post('/types/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("types")
    .insert({...body})
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.json(result);
      }
    })
    .catch((err)=>res.json(err));
});
app.delete('/pokemon', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .deleteOne({name:body.name})
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.json(result);
      }
    })
    .catch((err)=>res.json(err));    
})
app.delete('/pokedex', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .deleteOne({...body})
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.json(result);
      }
    })
    .catch((err)=>res.json(err));
})

app.delete('/types', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("types")
    .deleteOne({...body})
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.json(result);
      }
    })
    .catch((err)=>res.json(err));  
})

app.post('/pokemon/update', jsonParser,(req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect.collection("pokemon").updateOne(
    { name: body.name },
    { 
      $set: { 
        name: body.newname,
        type1:{id:body.type1.id,
          name:body.type1.name},
        type2:{ id:body.type2.id,
           name:body.type2.name}
      },
    }
  ).then(function(result, err){
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.json(result);
    }
  })
  .catch((err)=>res.json(err));
})
app.post('/pokedex/update', jsonParser,(req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect.collection("pokedex").updateOne(
    { name: body.name },
    {
      $set: { 
        name: body.newname,
        type1:{id:body.type1.id,
               name:body.type1.name},
        type2:{ id:body.type2.id,
                name:body.type2.name}
      },
    }
  ).then(function(result, err){
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.json(result);
    }
  })
  .catch((err)=>res.json(err));
})

app.post('/types/update', jsonParser,(req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect.collection("types").updateOne(
    { name: body.name },
    {
      $set: { 
        newname: body.newname,
       },
    }
  ).then(function(result, err){
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.json(result);
    }
  })
  .catch((err)=>res.json(err));
})
app.get("/starter", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("pokemon")
    .find({name:{$in:["bulbasaur","charmander","squirtle"]}}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });      
});