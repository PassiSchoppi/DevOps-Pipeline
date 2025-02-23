'use server';

import type { NextApiRequest, NextApiResponse } from 'next';

const client = require('../../app/lib/database');

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { title, start_date, start_time } = req.body;

    let insertQuery = `insert into events(title, start_date, start_time) 
                       values('${title}', '${start_date}', '${start_time}')`;

    client.query(insertQuery, (err: any, result: any) => {
      if (!err) {
        res.status(201).send({ message: 'Insertion was successful' });
      } else {
        console.log(err.message);
        res.status(500).send({ message: 'Insertion failed' });
      }
    });
    client.end;
  } else if (req.method === 'GET') {
    client.query(`Select * from events`, (err: any, result: any) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.log(err.message);
        res.status(500).send({ message: 'Fetching events failed' });
      }
    });
    client.end;
  } else {
    res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
  }
}

client.connect();