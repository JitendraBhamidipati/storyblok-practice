import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Web(props) {
  const { sx = {}, ...rest } = props;

  return (
    <SvgIcon
      sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 24 24"
      fontSize="small"
      {...rest}
    >
      <path d="M16.359 14.016h3.375q0.281-1.313 0.281-2.016t-0.281-2.016h-3.375q0.141 0.984 0.141 2.016t-0.141 2.016zM14.578 19.547q1.172-0.375 2.438-1.43t1.922-2.133h-2.953q-0.469 1.875-1.406 3.563zM14.344 14.016q0.141-0.984 0.141-2.016t-0.141-2.016h-4.688q-0.141 0.984-0.141 2.016t0.141 2.016h4.688zM12 19.969q1.313-1.922 1.922-3.984h-3.844q0.609 2.063 1.922 3.984zM8.016 8.016q0.563-2.016 1.406-3.563-1.172 0.375-2.461 1.43t-1.898 2.133h2.953zM5.063 15.984q0.609 1.078 1.898 2.133t2.461 1.43q-0.938-1.688-1.406-3.563h-2.953zM4.266 14.016h3.375q-0.141-0.984-0.141-2.016t0.141-2.016h-3.375q-0.281 1.313-0.281 2.016t0.281 2.016zM12 4.031q-1.313 1.922-1.922 3.984h3.844q-0.609-2.063-1.922-3.984zM18.938 8.016q-0.656-1.078-1.922-2.133t-2.438-1.43q0.844 1.547 1.406 3.563h2.953zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
    </SvgIcon>
  );
}

Web.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

export default Web;
