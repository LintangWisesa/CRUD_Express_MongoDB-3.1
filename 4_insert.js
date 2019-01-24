var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then insert a data
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.insertOne({
        nama: 'Fafa',
        email: 'fafa@fafa.com',
        kota: 'Jakarta'
    }, () => {
        console.log('Data terkirim!')
        client.close()
    })
})