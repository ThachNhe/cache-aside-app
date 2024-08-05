import express from 'express';
import bodyParser from 'body-parser';
import initWebRoute from './routes/web';
import connectDB from './config/connectDB';
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app1 = express();
app1.use(bodyParser.json({ limit: '50mb' }));
app1.use(bodyParser.urlencoded({ limit: '50mb' }));
connectDB();
initWebRoute(app1);

app1.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
