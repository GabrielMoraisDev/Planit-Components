# Planit Components

Biblioteca de componentes React reutilizáveis, compatível com TypeScript e JavaScript.

## Instalação

```bash
npm install planit-components
```

## Uso

### TypeScript/TSX

```tsx
import React, { useState } from 'react';
import { SearchSelect, SearchSelectOption } from 'planit-components';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const options: SearchSelectOption[] = [
    { label: 'Opção 1', value: 'op1' },
    { label: 'Opção 2', value: 'op2' },
    { label: 'Opção 3', value: 'op3' },
  ];

  return (
    <div>
      <SearchSelect
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue || '')}
        placeholder="Escolha uma opção..."
        name="exemplo"
      />
    </div>
  );
};

export default App;
```

### JavaScript/JSX

```jsx
import React, { useState } from 'react';
import { SearchSelect } from 'planit-components';

const App = () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Opção 1', value: 'op1' },
    { label: 'Opção 2', value: 'op2' },
    { label: 'Opção 3', value: 'op3' },
  ];

  return (
    <div>
      <SearchSelect
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue || '')}
        placeholder="Escolha uma opção..."
        name="exemplo"
      />
    </div>
  );
};

export default App;
```

## Componentes

### SearchSelect

Um componente de select com funcionalidade de busca integrada.

#### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `options` | `SearchSelectOption[]` | - | Array de opções para o select |
| `value` | `string` | `''` | Valor selecionado |
| `name` | `string` | - | Nome do campo para formulários |
| `placeholder` | `string` | `'Selecione uma opção...'` | Texto placeholder |
| `onChange` | `(value: string \| null) => void` | - | Callback quando o valor muda |
| `disabled` | `boolean` | `false` | Se o componente está desabilitado |
| `className` | `string` | `''` | Classes CSS adicionais |
| `searchPlaceholder` | `string` | `'Buscar...'` | Placeholder do campo de busca |

#### Tipos

```typescript
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
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Build para produção
npm run build

# Watch mode para desenvolvimento
npm run dev
```

## Compatibilidade

- React >= 16.8.0
- TypeScript >= 4.0.0 (opcional)
- Funciona com JavaScript puro

## Licença

MIT