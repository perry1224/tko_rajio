const express = require ('express')
const app = express()

//set the app view engine
app.set('view engine', 'ejs')

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my book club!');
});
// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});