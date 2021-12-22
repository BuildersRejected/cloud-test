const { Client, Intents } = require('discord.js');
//const { token } = require('./config.json');
//const { token } = process.env.Dtoken

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const mongoose = require('mongoose');

//const dbUrl = process.env.mongoURL;
const dbUrl = 'mongodb+srv://BRejected:f1re0fG0d@cluster0.dpr9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error);

mongoose.connection.on('connected', () => {
    console.log("Mongoose Connected")
});


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
//client.login(token);
client.login('');
