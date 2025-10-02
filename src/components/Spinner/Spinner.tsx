import { Box, CircularProgress } from '@mui/material';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import '../../index.css'
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
