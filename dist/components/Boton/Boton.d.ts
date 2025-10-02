import { type MouseEventHandler, type ReactElement } from 'react';
import '../../index.css';
interface Props {
    label: string;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disabled?: boolean;
    onClick?: MouseEventHandler;
    htmlType: 'button' | 'reset' | 'submit';
    icon?: ReactElement;
    style?: React.CSSProperties;
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    [key: string]: unknown;
}
declare const Boton: ({ label, color, onClick, disabled, htmlType, icon: Icon, size, style, loading, ...rest }: Props) => false | import("react/jsx-runtime").JSX.Element;
export default Boton;
