import { Box, Modal, Typography } from '@mui/material';
import './ModalPopup.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import Flex from '../Flex/Flex';
import Boton from '../Boton/Boton';
import type { ModalPopupProps } from '../../types/ModalPopupProps';

const ModalPopup = ({
  title,
  open,
  width,
  icon: Icon,
  children = false,
  centered,
  onClose,
  onExecuteCallback,
  ...rest
}: ModalPopupProps) => {
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
            <Flex gap={3} sx={{ paddingBottom: '10px', marginTop: '0.5em' }} direction='row-reverse'>
              <Boton
                id="btn-aceptar"
                data-testid="btn-aceptar"
                htmlType="button"
                label="Aceptar"
                color="success"
                onClick={() => {
                  onClose();
                  onExecuteCallback();
                }}
              />
              <Boton
                data-testid="btn-cancelar"
                label="Cancelar"
                htmlType="button"
                color="error"
                onClick={() => {
                  onClose();
                }}
              />
            </Flex>
          </Box>
        </Box>
      </Modal>
    </ThemeWrapper>
  );
};

export default ModalPopup;
