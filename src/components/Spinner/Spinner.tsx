import { Box, CircularProgress } from '@mui/material';
import './Spinner.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import type { SpinnerProps } from '../../types/SpinnerProps';

const Spinner = ({ styles, config }: SpinnerProps) => {
  return (
    <ThemeWrapper>
      <Box className="d-flex spinner" style={styles}>
        <CircularProgress sx={config} />
      </Box>
    </ThemeWrapper>
  );
};

export default Spinner;
