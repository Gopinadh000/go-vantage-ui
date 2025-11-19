import type { Meta, StoryObj} from "@storybook/react";
// import {fn } from "@storybook/test";
import type { ComponentProps } from "react";
import Button from "../components/button/Button";




type StoryProps = ComponentProps<typeof Button> &{
    buttonText : string
}


const meta : Meta<StoryProps> = {
    component : Button,
    tags : ['autodocs'],
    title : "Components/Button",
    argTypes : {
        size :{
            options : ['sm', 'md', 'lg'],
            control : { type : 'select' }
        },
        variant : {
            options : ['primary', 'secondary', 'tertiary'],
            control : { type : 'inline-radio' }
        },
        onClick : { action : 'clicked' },
        iconName : { control : 'text' },
    },
    args :{
        onClick : ()=> alert("hello app")
    }
}  satisfies Meta<typeof Button>;


export default meta;


type Story = StoryObj<typeof meta>;

export const Primary :Story ={
    args :{
        buttonText : "Primary Button Hello How are you ooams",
        variant : 'primary',
        size : "lg",
        onClick : () => alert('Primary Button Clicked'),
        iconName : '🚀'
    },
    render : ({buttonText , ...args}) => <Button {...args}>{buttonText}</Button>
}

export const Secondary : Story ={
    args : {
        variant : 'secondary',
        size : 'md',
        children : 'Secondary Button',
        iconName : '🔥'
    }
}

export const Tertiary : Story ={
    args : {
        variant : 'tertiary',
        size : 'md',
        children : 'Tertiary Button',
        iconName : '✨'
    }
}

// export const Small :Story ={
//     args : {
//         variant : 'primary',
//         size : 'sm',
//         children : 'Small Button',
//         onClick : () => alert('Small Button Clicked'),
//         iconName : '🚀'
//     }
// }

// export const Medium :Story ={
//     args : {
//         variant : 'primary',
//         size : 'md',
//         children : 'Medium Button',
//         onClick : () => alert('Medium Button Clicked'),
//         iconName : '🚀'
//     }
// }

// export const Large :Story ={
//     args : {
//         variant : 'primary',
//         size : 'lg',
//         children : 'Large Button',
//         onClick : () => alert('Large Button Clicked'),
//         iconName : '🚀'
//     }
// }       