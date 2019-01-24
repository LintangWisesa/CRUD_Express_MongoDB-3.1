var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then delete a data
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.deleteOne({nama: 'Gilang'}, ()=>{
        console.log('Data terhapus')
        client.close()
    })
})