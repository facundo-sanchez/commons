import { Box, Modal, Typography } from '@mui/material';
import { type ReactElement } from 'react';
import './ModalPopup.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';

interface Props {
  title: string;
  open: boolean;
  width?: number;
  icon?: ReactElement;
  centered?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  [key: string]: unknown;
}

const ModalPopup = ({
  title,
  open,
  width,
  icon: Icon,
  children = false,
  centered,
  onClose,
  ...rest
}: Props) => {
  return (
    <ThemeWrapper>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...rest}
      >
        <Box
          className="modal-alertas"
          sx={{
            position: 'absolute',
            top: centered ? '50%' : '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: width ?? 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            padding: 0,
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            mb={2}
            className="modal-alertas-header"
          >
            {Icon != null && <div className="item-modal">{Icon}</div>}
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              className="modal-alertas-title"
            >
              {title}
            </Typography>
          </Box>
          <Box id="modal-description" className="modal-description">
            {children}
          </Box>
        </Box>
      </Modal>
    </ThemeWrapper>
  );
};

export default ModalPopup;
