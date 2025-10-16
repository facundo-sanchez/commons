import { LoadingButton } from '@mui/lab';
import classes from './boton.module.css';
import { useComponentReady } from '../../hooks';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import type { BotonProps } from '../../types/BotonProps';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';

const Boton = ({
  label,
  type = 'primary',
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
  const ButtonMui = ({ variant = 'contained', color, icon }: any) => {
    return (
      <ThemeWrapper>
        <LoadingButton
          {...rest}
          variant={variant}
          size={size || 'small'}
          type={htmlType}
          onClick={onClick}
          className={`${classes.boton}`}
          // color={'info'}
          disabled={disabled}
          style={style}
          startIcon={icon ? icon : Icon}
          loading={loading}
          loadingPosition={Icon ? 'end' : loading ? 'end' : undefined}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
            fontSize: '14px',
            color,
            padding: loading ? '0px 0px 0px 20px' : '10px 35px 10px 35px',
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
  const ButtonGradient = ({ color, background1, background2 }: any) => (
    <ThemeWrapper>
      <LoadingButton
        {...rest}
        variant="contained"
        size={size || 'small'}
        type={htmlType}
        onClick={onClick}
        className={`${classes.boton}`}
        disabled={disabled}
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
          padding: loading ? '0px 0px 0px 20px' : '10px 35px 10px 35px',
          background: `linear-gradient(0deg, ${background1}, ${background2})`,
          color: disabled ? '#fff' : color,
          '&:hover': {
            background: `linear-gradient(0deg, ${background1}, ${background2})`,
            opacity: 0.95,
          },
          '& .MuiLoadingButton-loadingIndicator': {
            position: 'relative',
            margin: 0,
            padding: 0,
          },
          '& .Mui-disabled': {
            position: 'relative',
            margin: 0,
            padding: 0,
            color:"white"
          },

        }}
      >
        {label}
      </LoadingButton>
    </ThemeWrapper>
  );
  const getButton = () => {
    switch (type) {
      case 'primary':
        return <ButtonGradient color='#fff' background1='#16436E' background2='#3576AD' />
      case 'secondary':
        return <ButtonGradient color='#1E415B' background1='#F6F9FC' background2='#E3EDF7' />
      case 'cancel':
        return <ButtonMui variant="text" color='#18A0FB' icon={<MdOutlineCancel size={22} />} />
      case 'text':
        return <ButtonMui variant="text" color={'#000000'} icon={<IoIosArrowBack />} />
      default:
        return <ButtonGradient color='#fff' background1='#16436E' background2='#3576AD' />;
    }
  };

  return isReady && getButton();
};

export default Boton;
