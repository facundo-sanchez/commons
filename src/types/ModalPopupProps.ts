import type { ReactElement } from 'react';

export interface ModalPopupProps {
  title: string;
  open: boolean;
  width?: number;
  icon?: ReactElement;
  centered?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onExecuteCallback: () => void;
  [key: string]: unknown;
}
