import React from "react";
import {SuperRadio, SuperRadioPropsType} from "../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio";
import {Story} from "@storybook/react/types-6-0";

export default {
    title: 'HW/SuperRadio',
    component: SuperRadio,
}


export const SuperRadioBaseExample: Story<SuperRadioPropsType> = (args) => {
    return <SuperRadio {...args}/>
}

export const RadioA = SuperRadioBaseExample.bind({})
RadioA.args = {
    name: "radio",
    options: ["a", "b", "c"],
    value: "a",
}

export const RadioB = SuperRadioBaseExample.bind({})
RadioB.args = {
    name: "radio",
    options: ["a", "b", "c"],
    value: "b",
}