'use server';


import { Client } from 'pg';

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "ka271700",
    database: "postgres"
})

export default client;

