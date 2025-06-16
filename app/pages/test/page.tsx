'use client';
import { useState } from "react";
import { SearchSelect } from './components/SearchSelect';
// import { ThemeSwitch } from "./components/ThemeSwitch";
 
 
export default function ExampleUsage() {
  const [selected, setSelected] = useState<string>('')
 
  console.log(selected)
 
  return (
    <>
    {/* <ThemeSwitch/> */}
      <SearchSelect
        options={[
          { label: 'Appleask djlak djlkdjs lasjdal ksdjalksdj alksdj lksjdlkasjd lasdlkas l', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        name="fruits"
        value={selected}
        onChange={(val: string | null) => setSelected(val || '')}
        colors={['bg-blue-500 text-slate-200 hover:bg-red-500', '', '', 'hover:bg-red-500 duration-300 bg-green-300']}
      />
  </>
  )
}