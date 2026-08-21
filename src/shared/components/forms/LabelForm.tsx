import {LabelHTMLAttributes} from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function LabelForm(props: Props) {
    const { children} = props;
    return (
        <label {...props} className="font-bold text-sm text-dc-sky-blue-800 ">
            {children}
        </label>
    );
}
