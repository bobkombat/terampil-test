import React from 'react';
import { Container, Chat, Img, Text } from './styled';

const ForumBubble = ({ src, msg, className }) => {
  return (
    <Container className={className}>
      {className === 'left' ? (
        <>
          <Img src={src} />
          <Chat>
            <Text>{msg}</Text>
          </Chat>
        </>
      ) : (
        <>
          <Img src={src} className={className} />
          <Chat className={className}>
            <Text className={className}>{msg}</Text>
          </Chat>
        </>
      )}
    </Container>
  );
};

export default ForumBubble;
