import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const VisibilityOff = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M11.859 9h0.141q1.219 0 2.109 0.891t0.891 2.109v0.188zM7.547 9.797q-0.563 1.125-0.563 2.203 0 2.063 1.477 3.539t3.539 1.477q1.078 0 2.203-0.563l-1.547-1.547q-0.375 0.094-0.656 0.094-1.219 0-2.109-0.891t-0.891-2.109q0-0.281 0.094-0.656zM2.016 4.266l1.266-1.266 17.719 17.719-1.266 1.266q-0.234-0.234-1.477-1.453t-1.898-1.875q-2.016 0.844-4.359 0.844-3.703 0-6.703-2.063t-4.313-5.438q0.516-1.219 1.617-2.695t2.133-2.273q-0.563-0.563-1.57-1.594t-1.148-1.172zM12 6.984q-0.938 0-1.828 0.375l-2.156-2.156q1.828-0.703 3.984-0.703 3.703 0 6.68 2.063t4.289 5.438q-1.125 2.766-3.422 4.734l-2.906-2.906q0.375-0.891 0.375-1.828 0-2.063-1.477-3.539t-3.539-1.477z"></path>
    </SvgIcon>
  );
};

VisibilityOff.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default VisibilityOff;
