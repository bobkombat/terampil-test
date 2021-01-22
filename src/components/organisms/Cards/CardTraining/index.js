import React, {useState} from 'react';
import {CardTrainingStyled} from "./CardTraining.styled";
import image from '../../../../assets/png/Rectangle 4.png'
import star from '../../../../assets/png/star.png'
import bookmark from '../../../../assets/png/bookmark.png'
import bookmarked from '../../../../assets/png/bookmarked.png'
import share from '../../../../assets/png/share.png'

export const CardTraining = ({}) => {
  const [isBookmarked, setBookmark] = useState(true)
  return (
    <CardTrainingStyled>

      <div className='cover-container'>
        <span className='flag'>Collaboration with Telkom</span>
          <div className='bookmark-container'>
            <img className='bookmark' src={isBookmarked ? bookmarked : bookmark} alt='Button Bookmark' />
          </div>
        <img className='cover' src={image} alt={'Image Trainnig'}/>
      </div>

      <div className='row'>
        <span>1000 penonton</span>
        <div className='circle' />
        <span>1 j 4 m</span>
        <img className='share' src={share} alt='Button Share'/>
      </div>
      <h1>Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..</h1>
      <h2>Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing</h2>
      <div className='row'>
        <img className='tinyIcon' src={star} alt={'Star Icon'}/>
        <span>5 (500 penilaian)</span>
      </div>
    </CardTrainingStyled>
  )
}
