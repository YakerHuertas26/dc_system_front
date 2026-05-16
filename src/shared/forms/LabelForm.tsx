import {LabelHTMLAttributes} from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function LabelForm(props: Props) {
    const { children} = props;
    return (
        <label {...props} htmlFor="name" className="block uppercase font-bold">
            {children}
        </label>
    );
}
