import React from 'react';
import {Container, Content} from "./BannerAds.styled";
import logo from '../../../assets/png/terampil.png'
import Button from "../../atoms/Button";

export const BannerAds = () => {
    return (
        <Container>
            <div className='side'>
                <img src={logo} alt={'Logo Terampil'}/>
            </div>
            <Content>
                <div className='text'>
                    <h1 className='title'>Dapatkan akses gratis untuk semua kelas</h1>
                    <h2 className='subtitle'>Free selama 7 hari</h2>
                </div>
                <div className='button'>
                    <Button white large>START FREE TRAIL</Button>
                </div>
            </Content>
            <div className='side'>
                <img className='small' src={logo} alt={'Logo Terampil'}/>
            </div>
        </Container>
    )
}
