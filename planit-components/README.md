# Planit Components

## Introdução
Este repositório contém componentes React personalizados para uso em projetos.

## Componentes

`SearchSelect` é um componente de dropdown com busca integrado, altamente personalizável, desenvolvido com React e projetado para fazer parte da biblioteca `planit-components`.

## Instalação

```bash
npm install planit-components
# ou
yarn add planit-components
```

## Importação

```tsx
import { SearchSelect } from 'planit-components';
```

## Uso Básico

```tsx
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

<SearchSelect
  name="example"
  options={options}
  onChange={(value) => console.log(value)}
/>
```

## Props

| Nome                | Tipo                                       | Padrão                    | Descrição                                                                 |
|---------------------|--------------------------------------------|----------------------------|---------------------------------------------------------------------------|
| `options`           | `{ label: string; value: string }[]`       | **obrigatório**            | Lista de opções a serem exibidas.                                        |
| `value`             | `string`                                   | `""`                       | Valor selecionado.                                                       |
| `name`              | `string`                                   | **obrigatório**            | Nome do campo para uso em formulários.                                   |
| `onChange`          | `(value: string \| null) => void`          | **obrigatório**            | Callback chamado ao selecionar um item.                                  |
| `placeholder`       | `string`                                   | `"Select your value..."`   | Texto exibido quando nenhum valor está selecionado.                      |
| `searchPlaceholder` | `string`                                   | `"Search..."`              | Texto do campo de busca.                                                 |
| `notFoundPlaceholder` | `string`                                 | `"Not found"`              | Texto exibido quando nenhuma opção é encontrada.                         |
| `colors`            | `string[]`                                 | `['', '', '', '']`         | Cores personalizadas para select, search, input e opções.                |
| `icons`             | `string[]`                                 | `['none', 'ChevronDown', 'Search']` | Ícones exibidos na esquerda, direita e na busca.              |
| `classIcons`        | `string[]`                                 | `['', '', '', '']`         | Classes personalizadas para os ícones.                                   |
| `borders`           | `string[]`                                 | `['', '', '', '']`         | Bordas personalizadas para select, busca, input e opções.                |
| `spaces`            | `string[]`                                 | `['', '', '', '']`         | Espaçamentos personalizados.                                             |
| `sizes`             | `string[]`                                 | `['', '', '', '']`         | Larguras/alturas customizadas.                                           |
| `align`             | `string[]`                                 | `['', '', '', '']`         | Alinhamentos opcionais (não usado diretamente).                          |
| `bgSearch`          | `string`                                   | `''`                       | Classe de background para o campo de busca.                              |
| `colorPlaceholder`  | `string`                                   | `''`                       | Classe para a cor do placeholder no input de busca.                      |

## Personalização

Você pode passar arrays com classes Tailwind (ou outras) para estilizar o componente:

```tsx
<SearchSelect
  name="my-select"
  options={options}
  onChange={(v) => console.log(v)}
  colors={['bg-white', 'bg-slate-100', '', 'text-blue-600']}
  borders={['rounded-md', 'rounded-sm', '', 'rounded']}
  spaces={['px-4', 'px-2', '', 'px-3']}
  sizes={['w-64', 'w-full', '', 'h-12']}
  icons={['Search', 'ChevronDown', 'Search']}
  classIcons={['w-8', 'w-6', 'w-6']}
  bgSearch="bg-slate-200"
  colorPlaceholder="placeholder-slate-500"
/>
```

## Ícones

Os ícones são importados da lib [`react-bootstrap-icons`](https://react-icons.github.io/react-icons/icons?name=bs). Você pode passar o nome do ícone como string, ex: `'Search'`, `'ChevronDown'`, etc. Use `'none'` para esconder.

## Licença

MIT

---

Desenvolvido por [Planit Components](https://github.com/GabrielMoraisDev).