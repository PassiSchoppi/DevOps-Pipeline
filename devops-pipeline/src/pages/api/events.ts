'use server';

import type { NextApiRequest, NextApiResponse } from 'next';

import client from '../../app/lib/database';

type ResponseData = {
  message: string
}

interface Event {
  id: number;
  title: string;
  start_date: string;
  start_time: string;
}

interface QueryResult {
  rows: Event[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Event[]>
) {
  if (req.method === 'POST') {
    const { title, start_date, start_time } = req.body;

    const insertQuery = `insert into events(title, start_date, start_time) 
                         values('${title}', '${start_date}', '${start_time}')`;

    client.query(insertQuery, (err: Error) => {
      if (!err) {
        res.status(201).send({ message: 'Insertion was successful' });
      } else {
        console.log(err.message);
        res.status(500).send({ message: 'Insertion failed' });
      }
    });
  } else if (req.method === 'GET') {
    client.query(`Select * from events`, (err: Error, result: QueryResult) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.log(err.message);
        res.status(500).send({ message: 'Fetching events failed' });
      }
    });
  } else {
    res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
  }
}

client.connect();