import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Table } from '@mantine/core';
import Rows from '../components/Rows';

const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean[]>([false, false, false]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="John Doe" />
        <title>Document Table</title>
      </Head>
      <Table
        striped
        highlightOnHover
        horizontalSpacing="xs"
        onClick={() => setOpen(() => [false, false, false])}
      >
        <thead>
          <tr>
            <th>Salary</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>{<Rows open={open} setOpen={setOpen} />}</tbody>
      </Table>
    </>
  );
};

export default Home;
