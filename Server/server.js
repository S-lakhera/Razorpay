import express from 'express'

const app = express()

function startServer() {
    app.listen(3000, () => {
        console.log(`Server is running at 3000`);
    })
}

startServer();