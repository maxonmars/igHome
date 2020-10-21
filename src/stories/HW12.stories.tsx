import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// import { Button, ButtonProps } from './Button';
import HW12 from '../p2-homeworks/h12/HW12'
import {hw12ProviderDecorator} from "./decorators/hw12Decorator";


export default {
    title: 'HW/HW12',
    component: HW12,
    decorators: [hw12ProviderDecorator],
}

export const HW12BaseExample = () => {
    return <HW12/>;
}