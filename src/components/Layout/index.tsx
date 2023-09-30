// packages below
import React, { Fragment } from 'react';

// components below
import Head from '@/components/Head';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';

// types below
import { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = props => {
  const { title, children } = props;

  return (
    <Fragment>
      <Head title={title} />
      <main id='layout' className='flex flex-col w-full h-full min-h-screen bg-white' data-testid='layout'>
        <Topbar />
        <section>{children}</section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
