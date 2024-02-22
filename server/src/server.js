import express from 'express';
import bodyParser from 'body-parser';
import initWebRoute from './routes/web';
import connectDB from './config/connectDB';
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb' }));
connectDB();
initWebRoute(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
