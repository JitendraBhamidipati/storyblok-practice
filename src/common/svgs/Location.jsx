import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Date(props) {
  const { sx, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fontSize="small"
      {...rest}
    >
      <g filter="url(#filter0_d_783_6532)">
        <path
          d="M28.6849 11.6225C28.6849 15.9201 20.9079 28.4801 20.9079 28.4801C20.9079 28.4801 13.1309 15.9201 13.1309 11.6225C13.1309 9.55847 13.9502 7.57898 15.4087 6.1195C16.8672 4.66002 18.8453 3.84009 20.9079 3.84009C22.9704 3.84009 24.9486 4.66002 26.407 6.1195C27.8655 7.57898 28.6849 9.55847 28.6849 11.6225V11.6225Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
        <path
          d="M20.9074 13.4592C22.4139 13.4592 23.6351 12.2371 23.6351 10.7296C23.6351 9.22208 22.4139 8 20.9074 8C19.4009 8 18.1797 9.22208 18.1797 10.7296C18.1797 12.2371 19.4009 13.4592 20.9074 13.4592Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_783_6532"
          x="0.945312"
          y="0"
          width="39.9785"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.23 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_783_6532"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_783_6532"
            result="shape"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
}

Date.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

Date.defaultProps = { sx: {} };

export default Date;
