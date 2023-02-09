import React, { useState } from 'react';
//import { NavLink } from 'react-bootstrap';
import NavLinks from './NavLinks';
import NavTabs from './NavTabs';
import pageComponents from './pages';

const pages = Object.keys(pageComponents);

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const Page = () => pageComponents[currentPage]();
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pages={pages}
      />
      <Page />
      <NavLinks/>
    </div>
  );
}
