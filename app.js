const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <h1>DevOps Project Successful</h1>
    <h2>Jenkins + GitHub + Kubernetes</h2>
    `)
})

app.listen(3000, () => {
    console.log('Application running on port 3000')
})
