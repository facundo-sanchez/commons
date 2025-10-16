import { Box, Modal, Typography } from '@mui/material';
import './ModalPopup.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import Flex from '../Flex/Flex';
import Boton from '../Boton/Boton';
import type { ModalPopupProps } from '../../types/ModalPopupProps';
import { IoCloseOutline } from 'react-icons/io5';

/**
 * Componente para abrir un modal
 * @props @ModalPopupProps
 * @example
 * <ModalPopup 
    centered 
    title='Esta seguro que desea enviar' 
    open={open} 
    onClose={()=>setOpen(false)} 
    onExecuteCallback={()=>{}}>
      <p>Puede escribir sus comentarios</p>
      <div>text</div>
    </ModalPopup>
 */
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
            width: width ?? 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderTopLeftRadius:11,
            borderTopRightRadius:11,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            padding: 0,
          }}
        >
          <div className='top-modal-bar'>
            <div className="top-gradient-bar" />
          </div>
          <div className='btn-cancel-content'>
            <div className='btn-cancel' onClick={onClose}>
              <IoCloseOutline color='#0E3E61' size={25} />
            </div>
          </div>
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
              fontWeight={800}
            >
              {title}
            </Typography>
          </Box>
          <Box id="modal-description" className="modal-description">
            {children}
            <Flex gap={3} sx={{ paddingBottom: '10px', marginTop: '1em',marginBottom:'1em' }} direction='row-reverse'>
              <Boton
                id="btn-aceptar"
                data-testid="btn-aceptar"
                htmlType="button"
                label="Aceptar"
                variant="outlined"
                onClick={() => {
                  onClose();
                  onExecuteCallback();
                }}
              />
              <Boton
                data-testid="btn-cancelar"
                label="Cancelar"
                htmlType="button"
                type="secondary"
                variant="contained"
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
