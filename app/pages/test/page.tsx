'use client';
import { useState } from "react";
import { SearchSelect } from 'planit-components';
 
 
export default function ExampleUsage() {
  const [selected, setSelected] = useState<string>('')
 
  console.log(selected)
 
  return (
      <SearchSelect
        options={[
          { label: 'Appleask djlak djlkdjs lasjdal ksdjalksdj alksdj lksjdlkasjd lasdlkas l', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        name="fruits"
        value={selected}
        icons={['Github', 'ChevronDown', 'Search']}
        onChange={(val: string | null) => setSelected(val || '')}
      />
  )
}