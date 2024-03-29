const express = require('express');
const cors = require('cors');
const path = require('path')
const dbConfig = require('./config/keys');

const app = express();

const corsOptions = {
  origin: 'http://localhost:80',
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models');

const Role = db.role;

db.mongoose
  .connect(dbConfig.mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

// add routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/product.routes')(app);

// set port
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.use(express.static(path.join(__dirname, '../client/dist/client')));

app.get('/*', (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname, '..', 'client', 'dist', 'client', 'index.html'
    ),
  );
});
