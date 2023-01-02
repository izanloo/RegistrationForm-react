import { BiErrorCircle } from "react-icons/bi";

export const LabelError = (props) => {
    return (
        <>
            <label className="text-red-700 text-xs pt-1 flex items-center"><BiErrorCircle />{props.msg}</label>
        </>
    )
}
export const LabelInput = (props) => {
    return (
        <label htmlFor={props.htmlFor} className="block text-grey-darker text-sm font-bold mb-2">{props.name}</label>
    )
}