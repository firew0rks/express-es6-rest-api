import http from 'http';
import express from 'express';
import morgan from 'morgan';
import api from './api';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

	// api router
	app.use('/api', api);

	app.server.listen(process.env.PORT || 8000, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});

export default app;
