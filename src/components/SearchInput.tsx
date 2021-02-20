import React, { FC } from 'react';

interface SearchInputProps {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, placeholder, onChange }) => {

    return (
        <input
            className="input__text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default SearchInput;