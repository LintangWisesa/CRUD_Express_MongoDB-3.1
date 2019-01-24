var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then delete a data by id
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.deleteOne({
        '_id': new mongo.ObjectId('5c4932d11baf152afc9f39f2')
    }, ()=>{
        console.log('Data terhapus')
        client.close()
    })
})