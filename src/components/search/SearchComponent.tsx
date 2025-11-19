import React, { FC } from "react";
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';


interface SearchComponentProps {
    size : 'small' | 'medium' | 'large';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
     /** Optional Place holder Name  */
    placeholder?: string;
    }

   

const SearchComponent: FC<SearchComponentProps>  = ({onChange, placeholder = "Search Name", size }) => {
   
    const getSize =()=>{
        switch(size){
            case 'small':
                return 'search-box-small';
            case 'medium':
                return 'search-box-medium';
            case 'large':
                return 'search-box-large';
            default:
                return 'search-box-medium';
        }   
    }



  return (
  <div>
    <div className={`search-box ${getSize()}`}>
    <input type="text" onChange={onChange} placeholder={placeholder}  className="search-input"/>
    <SearchIcon className="search-icon" />
    </div>
  </div>
  );
};

export default SearchComponent;
