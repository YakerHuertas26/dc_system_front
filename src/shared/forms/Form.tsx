import { FormHTMLAttributes} from 'react'
import { cn } from '../lib/utils';

type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form(props:Props) {
    const {children, className} = props
    return (
        <form {...props} className={cn("p-4 mt-4", className)}>
            {children}
        </form>
    );
}