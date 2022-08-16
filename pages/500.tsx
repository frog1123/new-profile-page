import { NextPage } from 'next';

import { ErrorPage } from '@components/ErrorPage';

const Page404: NextPage = () => {
  return <ErrorPage title='500' error={500} message='server error' />;
};

export default Page404;
