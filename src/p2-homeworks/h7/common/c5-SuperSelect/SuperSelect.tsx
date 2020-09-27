import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: Array<string>
    onChangeOption?: (option: any) => void
    value: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        value,
        ...restProps
    }
) => {

    // const mappedOptions: any[string] = options.map((option, index) => option !== value
    //     ? <option key={index}>{option}</option>
    //     : <option selected key={index}>{option}</option>) // map options with key

    const mappedOptions: any[] = options ? options.map((o,index)=>(
        <option key={index} value={o} selected={o === value}>{o}</option>
    )) : []
    //Арчиков
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        let item = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(item)
    }

    return (
        <div><select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select></div>
    );
}

export default SuperSelect;
