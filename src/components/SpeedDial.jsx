import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { StoryblokComponent } from '@storyblok/react';
import { WhatsAppIcon } from '@/svgs';
// import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function BasicSpeedDial({ blok }) {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        onClick={() => window.open(blok.link.url)}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 50, right: 50 }}
        icon={<WhatsAppIcon width={'100%'} height={'100%'} />}
      ></SpeedDial>
    </Box>
  );
}
