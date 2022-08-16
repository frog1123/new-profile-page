import { NextPage } from 'next';

import { ErrorPage } from '@components/ErrorPage';

const Error: NextPage = () => {
  return <ErrorPage title='error' message='something went wrong...' />;
};

export default Error;
