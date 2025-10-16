import './ModalPopup.css';
import type { ModalPopupProps } from '../../types/ModalPopupProps';
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
declare const ModalPopup: ({ title, open, width, icon: Icon, children, centered, onClose, onExecuteCallback, ...rest }: ModalPopupProps) => import("react/jsx-runtime").JSX.Element;
export default ModalPopup;
