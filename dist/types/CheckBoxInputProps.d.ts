import type { FormInputProps } from './FormInputProps';
import type { JSX } from '@emotion/react/jsx-runtime';
import type { RefCallBack } from 'react-hook-form';
export interface CheckBoxInputProps extends FormInputProps {
    ref: RefCallBack;
    getLabel: () => JSX.Element;
    renderError: (name: string) => string;
    onChangeForm: (...event: any[]) => void;
    value: any;
}
