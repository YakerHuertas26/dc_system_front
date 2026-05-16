import {InputHTMLAttributes} from 'react';
import { cn } from '../lib/utils';

type Props = InputHTMLAttributes<HTMLInputElement>;
export default function BtnForm(props: Props) {
    const {className} = props;
    return (
        <input  {...props} type="submit"  
            className={cn("w-full my-4 font-bold py-2 uppercase rounded-md text-white cursor-pointer", className)}
        />
    );
}