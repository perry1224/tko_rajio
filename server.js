const express = require ('express')
const articleRouter = require('./routes/articles')
const app = express()

//set the app view engine
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// GET requests
app.get('/', (req, res) => {
  res.render('index', { text: hello});
});
// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});