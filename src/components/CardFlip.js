import React, { useState } from 'react';
import styled from 'styled-components';
import './CardFlip.css';


const Container = styled('div')(() => ({
    display: 'inlineBlock',
    flexDirection: 'row',
    justifyContent: 'center',
    float: "left",
}));

const Card = styled.div`
position: relative;
flex-basis: 100%;
width: 21.4rem;`
    ;

const CardTemplate = styled('div')(() => ({
    width: '100%',
    backfaceVisibility: 'hidden',
    height: '28.6rem',
    borderRadius: '6px',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s cubic-bezier(0.2, 0.3, 0.2, 0.2)',
}));

const CardFront = styled(CardTemplate)(({ flip, image }) => ({
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: flip ? 'rotateY(-180deg)' : 'rotateY(0deg)',
}));

const CardBack = styled(CardTemplate)(({ flip }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "#5de6de",
    backgroundImage: "linear-gradient(315deg, #5de6de 0%, #b58ecc 74%)",
    transform: flip ? 'rotateY(0deg)' : 'rotateY(180deg)',
}));

const CardContent = styled('div')(() => ({
    top: '80%',
    position: 'relative',
    left: 0,
    width: '100%',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(70px) scale(0.90)'
}))
const BackCardContent = styled('div')(() => ({
    top: '25%',
    position: 'absolute',
    left: 0,
    width: '100%',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(70px) scale(0.90)'
}))

const BGFade = styled('div')(() => ({
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: "16rem",
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(45,85,255,.2) 80%)'
}));

const CardFlip = ({ banner, title, comment, info, image, link }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className='CardFlip'>
            <h1 className="thingsbuilt">{banner}</h1>
            <Container>
                <Card
                    onMouseEnter={() => setFlip(true)}
                    onMouseLeave={() => setFlip(false)}
                >
                    <CardFront flip={flip} image={image} >

                        <CardContent>
                            <h1 className="headercard">{title}</h1>
                            <footer className="footercard">{comment}</footer>
                            <BGFade />
                        </CardContent>
                    </CardFront>
                    <CardBack flip={flip}>
                        <BackCardContent>
                            <h1>{info}</h1>
                            <button> <a target='_blank' href={link}> Visit it here </a> </button>
                        </BackCardContent>
                    </CardBack>
                </Card>
            </Container>
        </div>
    )
}

export default CardFlip;


