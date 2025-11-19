import type {Meta, StoryObj} from "@storybook/react";
import SearchComponent from "./SearchComponent";



const meta ={
    component : SearchComponent,
    tags : ['autodocs'],
    title : "Components/Search Component",
}  satisfies Meta<typeof SearchComponent>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
     size : 'small',
     placeholder: "Small Search"
  },
};

export const Medium: Story = {
  args: {
    size : 'medium',
    placeholder: "Medium Search"
  },
};

export const Large :Story ={
  args: {
    size : 'large',
    placeholder: "Large Search"
  },
}
