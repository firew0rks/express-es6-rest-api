import { version } from '../../package.json';
import { Router } from 'express';

let api = Router();

api.get('/', (req, res) => {
	res.json({ version });
});

export default api;