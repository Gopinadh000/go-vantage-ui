import Stack from "../components/stack/Stack";
import type {ComponentProps } from 'react';
import type { Meta} from "@storybook/react"



type StoryProps = ComponentProps<typeof Stack> &{
    noOfChildren? : number,
    cardWidth? : string | number
    cardHeight? : string | number
}


const meta : Meta<StoryProps> = {
    component : Stack,
    tags : ['autodocs'],
    argTypes : {
        spacing :{
            options : [2,4,6,8,10],
            control : { type : 'inline-radio' }
        },
        noOfChildren : {
            control : { type : 'number' , min : 1 , max : 10 , step : 1 }
        },
        cardWidth : {
            control : { type : 'text' }
        },
        cardHeight : {
            control : { type : 'text' } 
        }
    }
}

export default meta;


type Story = StoryObj<typeof meta>;

export const Row : Story ={
    args :{
        direction : "row",
        noOfChildren: 2,
        cardWidth: "500px",
        cardHeight: "400px"
    },

    render : ({noOfChildren , ...args}) => <Stack  {...args}>{createNoOfChildren(noOfChildren)}</Stack>
}                                                                                                               


function createNoOfChildren(n: number) {
    const children = [];
    for (let i = 1; i <= n; i++) {
        children.push(
            <div key={i} style={{ backgroundColor: getRandomColor(), padding: '20px' }}>
                Item {i}
            </div>
        );
    }
    return children;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const Column : Story ={
    args :{
        direction : "row",
        noOfChildren: 560,
        cardWidth: "670pxn",
        cardHeight: "560px"
    },
    render : ({noOfChildren , ...args}) => <Stack  {...args}>{createNoOfChildren(noOfChildren)}</Stack>
}       


