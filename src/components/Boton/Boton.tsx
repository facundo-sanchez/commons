import { LoadingButton } from '@mui/lab';
import classes from './boton.module.css';
import { useComponentReady } from '../../hooks';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import type { BotonProps } from '../../types/BotonProps';

const Boton = ({
  label,
  color,
  onClick,
  disabled,
  htmlType,
  icon: Icon,
  size,
  style,
  loading,
  ...rest
}: BotonProps) => {
  const { isReady } = useComponentReady();
  const ButtonMui = () => {
    return (
      <ThemeWrapper>
        <LoadingButton
          {...rest}
          variant="contained"
          size={size || 'small'}
          type={htmlType}
          onClick={onClick}
          className={`${classes.boton}`}
          color={color}
          disabled={disabled}
          style={style}
          endIcon={Icon}
          loading={loading}
          loadingPosition={Icon ? 'end' : loading ? 'end' : undefined}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '17px',
            textTransform: 'none',
            fontSize: '14px',
            padding: loading ? '0px 0px 0px 20px' : '0px 20px 0px 20px',
            '& .MuiLoadingButton-loadingIndicator': {
              position: 'relative',
              margin: 0,
              padding: 0,
            },
          }}
        >
          {label}
        </LoadingButton>
      </ThemeWrapper>
    );
  };

  const getButton = () => {
    switch (color) {
      case 'success':
      case 'error':
      case 'warning':
        return <ButtonMui />;
      case 'primary':
      default:
        return <ButtonMui />;
    }
  };

  return isReady && getButton();
};

export default Boton;
