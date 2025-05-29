'use client'
import SearchSelect from './components/SearchSelect'
import { useState } from 'react'

export default function ExampleUsage() {
  const [selected, setSelected] = useState<string>('')

  console.log(selected)

  return (
      <SearchSelect
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        name="fruits"
        value={selected}
        onChange={(val: string | null) => setSelected(val || '')}
      />
  )
}
