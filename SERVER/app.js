var 
    express       = require('express'),
    path          = require('path'),
    bodyParser    = require('body-parser'),
    mongoose	  = require('mongoose'),
    indexRouter   = require('./routes/index'),
    usersRouter   = require('./routes/users'),
    productsRouter = require('./routes/products'),
    banana        = require('./routes/banana'),
    app           = express();
    mongoose.connect('mongodb://localhost/auth_example_DB', ()=>
    console.log('connected to mongodb'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));``
//app.use(cors());
//app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/banana', banana);
app.use('/products', productsRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.send({status:404})
});

app.listen('3001',()=>console.log('running on port 3001'));``
// error handler



