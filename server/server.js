import express from 'express';

const app = express();
const port = 3000;

app.get('/', (res,req) => {
    res.send('server running successfully')
});

app.listen(port, () => {
    console.log(`server is running in ${port}`);
})