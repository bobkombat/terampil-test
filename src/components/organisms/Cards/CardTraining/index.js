import React, {useState} from 'react';
import {CardTrainingStyled, Flag} from "./CardTraining.styled";
import star from '../../../../assets/png/star.png'
import bookmark from '../../../../assets/png/bookmark.png'
import bookmarked from '../../../../assets/png/bookmarked.png'
import share from '../../../../assets/png/share.png'

export const CardTraining = (props) => {
  const { training } = props
  const [isBookmarked, setBookmark] = useState(false)
  return (
    <CardTrainingStyled>

      <div className='cover-container'>
        <Flag collab>Collaboration with Telkom</Flag>
          <div className='bookmark-container'>
            <img className='bookmark' src={isBookmarked ? bookmarked : bookmark} alt='Button Bookmark' />
          </div>
        <img className='cover' src={training.cover} alt={'Image Trainnig'}/>
      </div>

      <div className='row'>
        <span>1000 penonton</span>
        <div className='circle' />
        <span>1 j 4 m</span>
        <img className='share' src={share} alt='Button Share'/>
      </div>
      <h1>{training.title}</h1>
      <h2>{training.trainer.name}</h2>
      <div className='row'>
        <img className='tinyIcon' src={star} alt={'Star Icon'}/>
        <span>5 (500 penilaian)</span>
      </div>
    </CardTrainingStyled>
  )
}
