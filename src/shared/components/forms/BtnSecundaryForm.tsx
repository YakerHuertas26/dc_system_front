import {InputHTMLAttributes} from 'react';
import { cn } from '@src/shared/utils/cn.utils';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function BtnSecundaryForm(props: Props) {
    const {className} = props;
    return (
        <input  {...props} type="submit"  
            className={cn("w-full font-bold py-2 rounded-md text-white border border-pink-400 transition-colors hover:border-pink-600 cursor-pointer", className)}
        />
    );
}