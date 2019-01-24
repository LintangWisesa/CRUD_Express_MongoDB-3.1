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

// POST data
router.post('/data', (req, res)=>{
    mongc.connect(url, (error, client)=>{
        console.log('Terhubung!')
        var koleksi = client.db('tokoku').collection('users')
        koleksi.insertOne({
            nama: req.body.name,
            email: req.body.surel,
            kota: req.body.city
        }, () => {
            console.log('Data terkirim!')
            res.send({
                nama: req.body.name,
                email: req.body.surel,
                kota: req.body.city,
                status: 'Data terkirim!'
            })
            client.close()
        })
    })
})

// DELETE data by index
router.delete('/data/:index', (req, res)=>{
    mongc.connect(url, (error, client)=>{
        console.log('Terhubung!')
        var koleksi = client.db('tokoku').collection('users')
        koleksi.find().toArray((error, data)=>{
            koleksi.deleteOne({nama: data[req.params.index - 1].nama}, ()=>{
                console.log('Data terhapus')
                res.send('Data terhapus')
                client.close()
            })  
        })
    })
})

// PUT update datA BY INDEX ARRAY
router.put('/data/:index', (req, res)=>{
    mongc.connect(url, (error, client)=>{
        console.log('Terhubung!')
        var koleksi = client.db('tokoku').collection('users')
        koleksi.find().toArray((error, data)=>{
            koleksi.updateOne({
                nama: data[req.params.index - 1].nama
            }, {
                $set: {
                    nama: req.body.name,
                    email: req.body.surel,
                    kota: req.body.city
                }
            }, () => {
                console.log('Data terupdate')
                res.send('Data terupdate')
                client.close()
            })  
        })
    })
})

module.exports = router