import React from 'react';

function NavTabs({ currentPage, handlePageChange, pages }) {
  return (
    <div>
      <h1>Belen Gigante</h1>
      <ul className="nav nav-tabs">
        {pages.map(page => (
          <li key={page} className="nav-item">
            <a
              href={`#${page.toLowerCase()}`}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'nav-link active' : 'nav-link'}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
      </div>
      );
}

      export default NavTabs;
