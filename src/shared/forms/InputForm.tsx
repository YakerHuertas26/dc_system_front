import {InputHTMLAttributes} from 'react';
import { cn } from '../lib/utils';

type Props = InputHTMLAttributes<HTMLInputElement>
    
export default function InputForm(props: Props) {
    const {className} = props;
    return (
        <input {...props} className={cn("w-full border rounded-md p-2 mt-2 ",className)}
        />
    );
}