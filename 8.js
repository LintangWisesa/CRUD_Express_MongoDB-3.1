var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then update a data
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.updateOne({
        nama: 'Fafa'
    }, {
        $set: {nama: 'Fina'}
    }, () => {
        console.log('Data terupdate')
        client.close()
    })
})