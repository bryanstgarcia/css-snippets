import React from 'react';
import { Footer } from './components/layout';
import { SnippetsView } from './views';

function Layout() {
  return (
    <React.Fragment>
      <SnippetsView />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
