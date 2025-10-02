import { Box, CircularProgress } from '@mui/material';
import './Spinner.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';

interface Props {
  styles?: React.CSSProperties;
  config?: object;
}
const Spinner = ({ styles, config }: Props) => {
  return (
    <ThemeWrapper>
      <Box className="d-flex spinner" style={styles}>
        <CircularProgress sx={config} />
      </Box>
    </ThemeWrapper>
  );
};

export default Spinner;
