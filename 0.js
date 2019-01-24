var mongc = require('mongodb').MongoClient
var url = 'mongodb://lintang:1234@localhost:27017/tokoku'

// connect
mongc.connect(url, (error, client)=>{
    console.log('Terhubung!')
    client.close()
})