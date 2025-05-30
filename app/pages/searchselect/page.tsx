'use client';
import { useState } from "react";
import SearchSelect from './components/SearchSelect';


export default function ExampleUsage() {
  const [selected, setSelected] = useState<string>('')

  console.log(selected)

  return (
      <SearchSelect
        options={[
          { label: 'Apple akasksaksa jasd asd as das dasjkj askljd asldjasl kdjas kdllja kdjlaskdj alskdj ', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
                    { label: 'Apple akasksaksa jasd asd as das dasjkj askljd asldjasl kdjas kdllja kdjlaskdj alskdj ', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
                    { label: 'Apple akasksaksa jasd asd as das dasjkj askljd asldjasl kdjas kdllja kdjlaskdj alskdj ', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
                    { label: 'Apple akasksaksa jasd asd as das dasjkj askljd asldjasl kdjas kdllja kdjlaskdj alskdj ', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        name="fruits"
        value={selected}
        icons={['Award', 'ChevronDown', 'Search']}
        onChange={(val: string | null) => setSelected(val || '')}
        placeholder = "Select your value..."
        searchPlaceholder = "Search..."
        notFoundPlaceholder = "Not found"
        borders = {['', '', '']}
        spaces = {['', '', '']}
        sizes = {['', '', '']}
        bgSearch = ''
      />
  )
}
