var router = require('express').Router()
var bodyParser = require('body-parser')
var mongc = require('mongodb').MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'
router.use(bodyParser.json())

// GET all data
router.get('/data', (req, res)=>{
    mongc.connect(url, (error, client)=>{
        console.log('Terhubung!')
        var koleksi = client.db('tokoku').collection('users')
        koleksi.find().toArray((error, data)=>{
            console.log(data)
            res.send(data)
            client.close()
        })
    })
})

// GET specific data by index data
router.get('/data/:index', (req, res)=>{
    mongc.connect(url, (error, client)=>{
        console.log('Terhubung!')
        var koleksi = client.db('tokoku').collection('users')
        koleksi.find().toArray((error, data)=>{
            console.log(data[req.params.index - 1])
            res.send(data[req.params.index - 1])
            client.close()
        })
    })
})

module.exports = router