'use server';


const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "passwort",
    database: "postgres"
})

module.exports = client
