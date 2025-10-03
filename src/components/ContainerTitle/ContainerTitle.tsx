import { useComponentReady } from '../../hooks';
import ThemeWrapper from '../Wrapper/ThemeWrapper';
import './ContainerTitle.style.css';

interface Props {
  title: string;
  subTitle?: string;
}

const ContainerTitle = ({ title, subTitle }: Props) => {
  const { isReady } = useComponentReady();

  return (
    <ThemeWrapper>
      <div className={`container-title `}>
        <div className={`title`}>
          <span
            style={{ color: !isReady ? 'transparent' : 'rgba(0, 0, 0, 0.88)' }}
          >
            {subTitle ? `${title?.trim()}:` : title?.trim()}
            {subTitle}
          </span>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default ContainerTitle;
