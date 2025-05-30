import React from 'react';

interface SearchSelectOption {
    label: string;
    value: string;
}
interface SearchSelectProps {
    options: SearchSelectOption[];
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (value: string | null) => void;
    disabled?: boolean;
    className?: string;
    searchPlaceholder?: string;
}
declare const SearchSelect: React.FC<SearchSelectProps>;

export { SearchSelect, SearchSelectOption, SearchSelectProps };
