import React from 'react';
import PropTypes from 'prop-types';
import StyledDropwdown from './Dropdown.styled';

function Dropdown({ children, ...rest }) {
  return (
    <StyledDropwdown {...rest}>
      <div className="dropdown">
        <div className="kategori">
          {children}
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path
              d="M7.00028 8.00003C6.76662 8.00049 6.54019 7.91911 6.36028 7.77003L0.360276 2.77003C0.156059 2.60029 0.0276347 2.35638 0.00325494 2.09196C-0.0211248 1.82753 0.0605371 1.56425 0.230276 1.36003C0.400014 1.15581 0.643926 1.02739 0.908352 1.00301C1.17278 0.978631 1.43606 1.06029 1.64028 1.23003L7.00028 5.71003L12.3603 1.39003C12.4626 1.30697 12.5803 1.24493 12.7066 1.2075C12.8329 1.17007 12.9654 1.15798 13.0965 1.17192C13.2275 1.18586 13.3545 1.22555 13.4701 1.28873C13.5857 1.3519 13.6878 1.4373 13.7703 1.54003C13.8619 1.64285 13.9312 1.76348 13.974 1.89435C14.0168 2.02523 14.0321 2.16353 14.019 2.30059C14.0058 2.43765 13.9645 2.57053 13.8976 2.69088C13.8307 2.81124 13.7397 2.91649 13.6303 3.00003L7.63028 7.83003C7.44519 7.95555 7.22338 8.0154 7.00028 8.00003Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="dropdown-content">
          <div className="first-content">
            <div align="left" className="dropdown-header mb">
              Kategori
            </div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
            <div className="dropdown-content-1 mb">Komunikasi</div>
          </div>
          <div className="separator"></div>
          <div className="second-content">
            <div className="dropdown-content-2 mb">Semua Kelas</div>
            <div className="dropdown-content-2 mb">Rekomendasi</div>
            <div className="dropdown-content-2 mb">Semua Kelas</div>
            <div className="dropdown-content-2 mb">Semua Kelas</div>
          </div>
        </div>
      </div>
    </StyledDropwdown>
  );
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.element,
  ]),
};

export default Dropdown;
