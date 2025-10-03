import { type ReactElement } from 'react';
import './ModalPopup.css';
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
declare const ModalPopup: ({ title, open, width, icon: Icon, children, centered, onClose, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default ModalPopup;
