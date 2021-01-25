import React from 'react';
import {AdsTrainerStyled, Line, Section} from './AdsTrainer.styled';
import logo from '../../../assets/png/terampil-transparent 2.png'
import Button from "../../atoms/Button";

export function AdsTrainer() {
    return (
        <Section>
            <Line />
            <AdsTrainerStyled>
                <div className='first'>
                    <img className='imgFirst' src={logo} alt='logo terampil'/>
                    <h1>Mari Berkolaborasi</h1>
                    <p>Cari tahu bagaimana Terampil dapat memberikan solusi pengembangan karir untuk perusahaan Anda.</p>
                    <Button className='button' outline rounded={true} medium>Lebih Lanjut</Button>
                </div>
                <div className='second'>
                    <img className='imgSecond' src={logo} alt='logo terampil'/>
                    <h1>Menjadi Trainer</h1>
                    <p>Anda memiliki kualifikasi khusus dan ingin membagikan ilmu yang Anda miliki?</p>
                    <Button className='button' outline rounded={true} medium>Lebih Lanjut</Button>
                </div>
            </AdsTrainerStyled>
        </Section>

    )
}
