var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect then get specific data by id
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    var koleksi = client.db('tokoku').collection('users')
    koleksi.find({
        '_id': new mongo.ObjectID('5c4004c44c97d6b8e22b940d')
    }).toArray((error, data)=>{
        console.log(data)
        client.close()
    })
})