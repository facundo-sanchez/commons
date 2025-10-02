import { type ReactNode } from 'react';
import './ContainerComponent.style.css';
import ThemeWrapper from '../Wrapper/ThemeWrapper';

interface Props {
  children: ReactNode;
  [key: string]: any;
}

const ContainerComponent = ({ children, ...rest }: Props) => {
  return (
       <ThemeWrapper>
      <div className="container" {...rest}>
        {children}
      </div>
       </ThemeWrapper>
  );
};

export default ContainerComponent;
