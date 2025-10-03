import { type SxProps, type Theme } from '@mui/material';
import React, { type ReactNode } from 'react';
interface Props {
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
declare const Flex: ({ className, alignItems, alignContent, justifyItems, justifySelf, alignSelf, justifyContent, flex, direction, gap, style, spacing, children, sx, useFlexGap, flexWrap, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default Flex;
