import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';
import type { ReactNode } from 'react';
export interface FlexProps {
    className?: string;
    alignItems?: React.CSSProperties['alignItems'];
    flex?: React.CSSProperties['flex'];
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignContent?: React.CSSProperties['alignContent'];
    justifyItems?: React.CSSProperties['justifyItems'];
    justifySelf?: React.CSSProperties['justifySelf'];
    alignSelf?: React.CSSProperties['alignSelf'];
    justifyContent?: React.CSSProperties['justifyContent'];
    flexWrap?: React.CSSProperties['flexWrap'];
    gap?: number;
    style?: React.CSSProperties;
    spacing?: any;
    useFlexGap?: boolean;
    sx?: SxProps<Theme>;
    children: ReactNode;
}
