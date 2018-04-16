const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://todoapp:ePm2P5Ce1HZwRZNS@cluster0-shard-00-00-a6srg.mongodb.net:27017,cluster0-shard-00-01-a6srg.mongodb.net:27017,cluster0-shard-00-02-a6srg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

//module.exports = mongoose.connect('mongodb://localhost/todo')
module.exports = mongoose.connect(url, {
    useMongoClient: true
})