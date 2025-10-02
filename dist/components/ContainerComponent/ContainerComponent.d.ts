import { type ReactNode } from 'react';
import '../../index.css';
interface Props {
    children: ReactNode;
    [key: string]: any;
}
declare const ContainerComponent: ({ children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default ContainerComponent;
