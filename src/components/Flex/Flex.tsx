import { Stack } from '@mui/material';
import type { FlexProps } from '../../types/FlexProps';

const Flex = ({
  className,
  alignItems,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  justifyContent,
  flex,
  direction,
  gap,
  style,
  spacing,
  children,
  sx,
  useFlexGap,
  flexWrap,
  ...rest
}: FlexProps) => {
  return (
    <Stack
      flexWrap={flexWrap}
      className={className}
      alignItems={alignItems}
      direction={direction || 'row'}
      alignContent={alignContent || 'flex-start'}
      justifyItems={justifyItems || 'initial'}
      justifySelf={justifySelf || 'initial'}
      alignSelf={alignSelf || 'initial'}
      gap={gap || 0}
      justifyContent={justifyContent || 'initial'}
      spacing={spacing}
      style={style}
      sx={sx}
      flex={flex}
      useFlexGap={useFlexGap}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default Flex;
