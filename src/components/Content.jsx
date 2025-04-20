import { renderRichText } from '@storyblok/react';
import { Grid } from '@mui/material';

function Content({ blok }) {
  const renderedRichText = renderRichText(blok.text);
  return <Grid dangerouslySetInnerHTML={{ __html: renderedRichText }} />;
}

export default Content;
