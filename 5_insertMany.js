var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then insert many
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.insertMany([
        {nama: 'Gilang', usia: 23},
        {nama: 'Hamid', usia: 32, job: 'PNS', kota: 'Depok'}
    ], () => {
        console.log('Data terkirim!')
        client.close()
    })
})