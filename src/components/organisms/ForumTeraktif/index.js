import ForumBubble from 'components/atoms/ForumBubble';
import ThumbnailCard from 'components/atoms/ThumbnailCard';
import React from 'react';
import { Container, Title, ChatContainer } from './styled';

const dummyData = [
  {
    src:
      'https://cdn-2.tstatic.net/wow/foto/bank/images/film-avatar-akan-ditayangkan-di-big-movies-gtv-edisi-selasa-3042019.jpg',
    msg: 'aoweinfoweainfoiweanf',
  },
  {
    src:
      'https://cdn-2.tstatic.net/wow/foto/bank/images/film-avatar-akan-ditayangkan-di-big-movies-gtv-edisi-selasa-3042019.jpg',
    msg:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque odio convallis enim tortor leo',
  },
  {
    src:
      'https://cdn-2.tstatic.net/wow/foto/bank/images/film-avatar-akan-ditayangkan-di-big-movies-gtv-edisi-selasa-3042019.jpg',
    msg: 'aoweinfoweainfoiweanf',
  },
  {
    src:
      'https://cdn-2.tstatic.net/wow/foto/bank/images/film-avatar-akan-ditayangkan-di-big-movies-gtv-edisi-selasa-3042019.jpg',
    msg:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque odio convallis enim tortor leo',
  },
];

const bgThumb =
  'https://images.unsplash.com/reserve/NFuTknHQTsOc0uHAA4E4_4968226460_33fb941a16_o.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80';

const ForumTeraktif = (props) => {
  return (
    <Container>
      <Title>Forum Teraktif Bulan Ini</Title>
      <div className="content">
        <ThumbnailCard src={bgThumb} />
        <ChatContainer>
          {dummyData.map((data, idx) =>
            (idx + 1) % 2 !== 0 ? (
              <ForumBubble src={data.src} msg={data.msg} key={idx} className="left" />
            ) : (
              <ForumBubble src={data.src} msg={data.msg} key={idx} className="right" />
            ),
          )}
        </ChatContainer>
      </div>
    </Container>
  );
};

export default ForumTeraktif;
