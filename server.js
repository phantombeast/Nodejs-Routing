// const express = require('express');
//
// const app = express();
// const routes = {
//     pages: require('./routing/pages'),
//     api: require('./routing/api')
// }
// app.set('view engine', 'hbs')
//
// app.use(express.json())
// app.use(express.urlencoded({extended: true}));
//
//
// app.use('/api', routes.api)
// app.use('/', routes.pages)
//
// app.listen(5454, function () {
//     console.log("Server started on http://localhost:5454");
// });

const express = require('express');

const app = express();
const routes = {
    pages: require('./routing/pages'),
    api: require('./routing/api')
}
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', routes.api)
app.use('/', routes.pages)

app.listen(5454, function () {
    console.log("Server started on http://localhost:5454");
});