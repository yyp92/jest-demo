import React, { FC } from 'react';

interface PageProps {
  title: string;
}

const Page: FC<PageProps> = ({ title }) => (
  <div>
      <h1>{title}</h1>
      <p>Welcome to my page!</p>
  </div>
);

export default Page;