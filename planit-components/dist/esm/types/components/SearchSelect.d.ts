import React from 'react';
export interface SearchSelectOption {
    label: string;
    value: string;
}
export interface SearchSelectProps {
    options: SearchSelectOption[];
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (value: string | null) => void;
    disabled?: boolean;
    className?: string;
    searchPlaceholder?: string;
}
export declare const SearchSelect: React.FC<SearchSelectProps>;
//# sourceMappingURL=SearchSelect.d.ts.map