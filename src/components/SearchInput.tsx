import React, { FC } from 'react';

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {

    return (
        <input value={value} onChange={onChange} />
    )
}

export default SearchInput;