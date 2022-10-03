const mongoose = require('mongoose');
// Allow to do the promisses here
mongoose.Promise = global.Promise;
// we have establised a connectino here
mongoose.connect('mongodb://localhost:27017/db_test', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// we have done validation here for the project
mongoose.connection
  .once('open', () => 
  console.log('Database has been connected. '))
  .on('error', err => 
  console.log('We are getting error from the database', err));
