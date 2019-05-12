import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as colors from '../../constants/colors';
import { LOGO_PROPTYPE, TILE_PROPTYPE } from '../../constants/propTypes';

const Wrapper = styled.div`
  display: inline-block;
  max-width: 600px;
  width: ${props => props.width};
`;

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Tile = styled.img.attrs({
  role: 'presentation'
})`
  display: block;
  max-width: 100%;
  transition: transform .5s ease;

  :hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  align-items: center;
  background-color: ${colors.BLACK50};
  bottom: 0;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 13% 87%;
  height: 31%;
  padding: 2.5%;
  position: absolute;
  width: 100%;
`;

const Logo = styled.img.attrs({
  role: 'presentation'
})`
  height: auto;
  max-height: 100%;
  max-width: 100%;
`;

const Title = styled.h2`
  color: ${colors.WHITE};
  overflow: hidden;
  padding-left: 3.5%;
  white-space: nowrap;

  @media (max-width: 479.5px) {
    font-size: 1.3rem;
  }

  @media (min-width: 480px) and (max-width: 767.5px) {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Card = props => {
  const { 
    className, 
    logo: { alt: logoAlt, src: logoSrc },
    tile: { alt: tileAlt, src: tileSrc }, 
    title,
    width
  } = props;

  return (
    <Wrapper className={className} width={width}>
      <Container>
        <Tile 
          alt={tileAlt}
          src={tileSrc} 
          title={tileAlt}
        />

        {title && (
          <Overlay>
            <Logo 
              alt={logoAlt} 
              src={logoSrc} 
              title={logoAlt}
            />

            <Title>
              {title}
            </Title>
          </Overlay>
        )}
      </Container>
    </Wrapper>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  logo: LOGO_PROPTYPE,
  tile: TILE_PROPTYPE.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
  logo: LOGO_PROPTYPE.default,
  title: undefined,
  width: 'auto',
};

export default Card;