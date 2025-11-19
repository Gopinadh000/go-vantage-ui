import React from "react";
import { Stack as AppStack } from '@mui/material';

type StackProps = {
   children : React.ReactNode,
   direction : 'row' | 'column',
   spacing? : 2 | 4 | 6 | 8 | 10,
   cardWidth? : string | number,
   cardHeight? : string | number

}

const Stack = ({children ,cardWidth , direction ,cardHeight, spacing = 2}: StackProps) => {
  return (
    <AppStack style={{width : cardWidth , height :cardHeight}}  direction={direction} spacing={spacing}>
      {children}
    </AppStack>
  );
};

export default Stack;
