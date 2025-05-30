import React, { useState, useRef, useEffect } from 'react';

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

export const SearchSelect: React.FC<SearchSelectProps> = ({
  options,
  value = '',
  name,
  placeholder = 'Selecione uma opção...',
  onChange,
  disabled = false,
  className = '',
  searchPlaceholder = 'Buscar...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleOptionSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const selectedOption = options.find(option => option.value === value);

  const baseStyles = {
    container: `relative inline-block w-full ${className}`,
    trigger: `
      w-full px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer
      flex items-center justify-between min-h-[40px]
      ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'hover:border-gray-400'}
      ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : ''}
    `,
    dropdown: `
      absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 
      rounded-md shadow-lg max-h-60 overflow-hidden
      ${isOpen ? 'block' : 'hidden'}
    `,
    searchInput: `
      w-full px-3 py-2 border-b border-gray-200 outline-none text-sm
      focus:border-blue-500
    `,
    optionsList: 'max-h-48 overflow-y-auto',
    option: `
      px-3 py-2 cursor-pointer text-sm border-b border-gray-100 last:border-b-0
      hover:bg-gray-50
    `,
    selectedOption: 'bg-blue-50 text-blue-700',
    noResults: 'px-3 py-2 text-sm text-gray-500 text-center',
    arrow: `
      ml-2 transition-transform duration-200
      ${isOpen ? 'transform rotate-180' : ''}
    `
  };

  return (
    <div ref={containerRef} className={baseStyles.container}>
      <input type="hidden" name={name} value={value} />
      
      <div
        className={baseStyles.trigger}
        onClick={handleToggle}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={baseStyles.arrow}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className={baseStyles.dropdown}>
        <input
          ref={searchInputRef}
          type="text"
          className={baseStyles.searchInput}
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        
        <div className={baseStyles.optionsList} role="listbox">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`${baseStyles.option} ${
                  option.value === value ? baseStyles.selectedOption : ''
                }`}
                onClick={() => handleOptionSelect(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className={baseStyles.noResults}>
              Nenhuma opção encontrada
            </div>
          )}
        </div>
      </div>
    </div>
  );
};