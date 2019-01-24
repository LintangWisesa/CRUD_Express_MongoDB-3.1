var mongc = require('mongodb').MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then get all data
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.find().toArray((error, data)=>{
        console.log(data)
        client.close()
    })
})