import React from "react";
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    dots?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        max, min, step, disable, dots
    }
) => {

    const onChangeSlideRange = (e: Array<number>) => {
        onChangeRange && onChangeRange(e)
        console.log('Class: , Function: onChangeSlideRange, Line: 21 e(Array<number>):', e);
        console.log('Class: , Function: onChangeSlideRange, Line: 22 value([number,number]):', value);
    }
    return (
        <div className={s.sliderWrapper}>
            <Range
                trackStyle={[{backgroundColor: "#f1c40f"}, {backgroundColor: "#f1c40f"}]}
                railStyle={{backgroundColor: "#16a085"}}
                handleStyle={[{
                    backgroundColor: "#f1c40f",
                    border: "2px dotted #e74c3c"
                }, {
                    backgroundColor: "#f1c40f",
                    border: "2px dotted #e74c3c"
                }]}
                dotStyle={{backgroundColor: "#16a085",
                border: "none"}}
                activeDotStyle={{backgroundColor: "#f1c40f"}}
                dots={dots} disabled={disable} min={min} max={max} step={step} value={value}
                onChange={onChangeSlideRange}/>
        </div>
    );
}

export default SuperDoubleRange;
