import React, { useState } from 'react';
import { Answer, Question, Container } from './styled';

const Accordion = ({ data: { question, answer } }) => {
  const [isOpened, setOpened] = useState(false);

  function opened(e) {
    setOpened(!isOpened);
  }

  return (
    <Container>
      <Question className={`${isOpened ? 'opened' : null}`} onClick={opened}>
        {question}
        <svg
          width="16"
          height="7"
          viewBox="0 0 16 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`icon-faq ${isOpened ? 'icon-faq-active' : null}`}
        >
          <path
            d="M7.99997 0.49988C8.23362 0.499481 8.46006 0.570684 8.63997 0.70113L14.64 5.07613C14.8442 5.22465 14.9726 5.43807 14.997 5.66945C15.0214 5.90082 14.9397 6.13119 14.77 6.30988C14.6002 6.48857 14.3563 6.60094 14.0919 6.62227C13.8275 6.64361 13.5642 6.57215 13.36 6.42363L7.99997 2.50363L2.63997 6.28363C2.53768 6.35631 2.41998 6.41059 2.29364 6.44334C2.16731 6.4761 2.03481 6.48668 1.90379 6.47448C1.77276 6.46229 1.64578 6.42755 1.53014 6.37227C1.4145 6.317 1.31249 6.24227 1.22997 6.15238C1.13839 6.06241 1.06903 5.95686 1.02624 5.84235C0.983444 5.72784 0.968142 5.60682 0.981284 5.48689C0.994427 5.36696 1.03573 5.2507 1.10262 5.14539C1.1695 5.04007 1.26052 4.94798 1.36997 4.87488L7.36997 0.648631C7.55505 0.538804 7.77687 0.486431 7.99997 0.49988Z"
            fill="white"
          />
        </svg>
      </Question>
      <Answer className={`${isOpened ? 'active opened' : null}`}>{answer}</Answer>
    </Container>
  );
};

export default Accordion;
