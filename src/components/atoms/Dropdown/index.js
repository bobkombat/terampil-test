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
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path
              d="M8.00003 8.00003C7.76638 8.00049 7.53994 7.91911 7.36003 7.77003L1.36003 2.77003C1.15581 2.60029 1.02739 2.35638 1.00301 2.09196C0.978631 1.82753 1.06029 1.56425 1.23003 1.36003C1.39977 1.15581 1.64368 1.02739 1.90811 1.00301C2.17253 0.978631 2.43581 1.06029 2.64003 1.23003L8.00003 5.71003L13.36 1.39003C13.4623 1.30697 13.58 1.24493 13.7064 1.2075C13.8327 1.17007 13.9652 1.15798 14.0962 1.17192C14.2272 1.18586 14.3542 1.22555 14.4699 1.28873C14.5855 1.3519 14.6875 1.4373 14.77 1.54003C14.8616 1.64285 14.931 1.76348 14.9738 1.89435C15.0166 2.02523 15.0319 2.16353 15.0187 2.30059C15.0056 2.43765 14.9643 2.57053 14.8974 2.69088C14.8305 2.81124 14.7395 2.91649 14.63 3.00003L8.63003 7.83003C8.44495 7.95555 8.22313 8.0154 8.00003 8.00003Z"
              fill="#25DDBC"
            />
          </svg>
        </div>
        <div className="dropdown-content">
          <div className="first-content">
            <p className="dropdown-content-1 mb">Entrepreneurship</p>
            <p className="dropdown-content-1 mb">Marketing &amp; Sales</p>
            <p className="dropdown-content-1 mb">Communication</p>
            <p className="dropdown-content-1 mb">IT &amp; Software Development</p>
            <p className="dropdown-content-1 mb">Personal Development</p>
            <p className="dropdown-content-1 mb">Design Graphic &amp; Video Editor</p>
          </div>
          <div className="second-content">
            <p className="dropdown-content-2 mb">Semua Kelas</p>
            <p className="dropdown-content-2 mb">Rekomendasi</p>
            <p className="dropdown-content-2 mb">Semua Kelas</p>
            <p className="dropdown-content-2 mb">Semua Kelas</p>
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
