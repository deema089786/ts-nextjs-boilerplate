import React from 'react';
import { NextPage } from 'next';
import MainPage from '../../components/pages/Main';

interface Props {
  test: number;
}

const MainPageContainer: NextPage<Props> = ({ test }: Props) => <MainPage />;

MainPageContainer.getInitialProps = async () => ({ test: 12 });

export default MainPageContainer;
