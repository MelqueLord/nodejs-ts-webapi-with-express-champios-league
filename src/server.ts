import createApp from "./app"


const app = createApp();


//tem que apontar oarquivo .env no config
const port = process.env.PORT;

app.listen(port, () => {
    console.log( `Server runing at port:${port}` );
});
