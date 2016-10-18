import express from 'express';
import sass from 'node-sass-middleware';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes';
import pug from 'pug';
import cookieSession from 'cookie-session';

var app = express();
app.use(sass({
	src:__dirname+'/views/SCSS/',
	dest:path.join(__dirname, '/static/css'),
	debug:false,
	outputStyle:'extended',
	prefix:  '/css'
}));
app.set ('/views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use (logger('dev'));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));
app.use (cookieParser());
app.use (favicon(__dirname+'/static/favicon.ico'));
app.use (cookieSession({
	name: 'ServerSession',
	keys: ['jkgfgklsadfjlsdkj']
}));
app.use('/', routes);
var options = {
	dotfiles: "ignore",
	etag: false,
	extensions: [],
	index:false,
	maxAge: '1d',
	redirect:false,
	setHeaders: function (res, path, stat){
		res.set ('x-timestamp', Date.now());
	}
}

app.use (express.static(path.join(__dirname, 'static'), options));
app.use (function (req, res, next){
	var error = new Error ('Not found');
	err.status = 404;
	next(err);
});
app.use (function(error, req, res, next){
	res.status (error.status || 500);
	res.render ('error', {
		message: error.message,
		title: 'Почини меня'
	});
});

module.exports = app;

