import PropTypes from 'prop-types';

import logo from '../static/images/logo.png';

export const IMAGE_PROPTYPE = PropTypes.shape({
  alt: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired
})

export const TILE_PROPTYPE = IMAGE_PROPTYPE;

export const LOGO_PROPTYPE = IMAGE_PROPTYPE;
LOGO_PROPTYPE.default = {
  alt: 'Seven logo',
  src: logo
}

