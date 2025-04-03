export const codeStringReact = `import { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function LoginDefault() {
  return (
    &lt;div className='w-full h-auto py-10 bg-slate-300 dark:bg-slate-900 flex justify-center place-items-center duration-300'&gt;
        &lt;div className="w-72 h-auto bg-slate-200 dark:bg-slate-800 pt-2 pb-6 rounded-md m-auto place-items-center shadow-lg duration-300"&gt;
            &lt;Icon.PersonFill className='w-24 h-24 m-auto text-slate-400 dark:text-slate-500 pt-4 pb-1'&gt;&lt;/Icon.PersonFill&gt;
            &lt;h1 className='text-xl text-slate-600 dark:text-slate-400 mt-0'&gt;Sign-in&lt;/h1&gt;
            &lt;div className="h-4"&gt;&lt;/div&gt;
            &lt;div className="inline m-auto"&gt;
                &lt;label htmlFor="user" className='text-slate-600 dark:text-slate-300'&gt;User&lt;/label&gt;&lt;br /&gt;
                &lt;input id='user' type="text" placeholder='Type your User...' className='text-slate-400 w-[16rem] mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300'/&gt;
            &lt;/div&gt;
  
            &lt;br /&gt;
            &lt;div className="h-3"&gt;&lt;/div&gt;
  
            &lt;div className="inline m-auto mt-7"&gt;
                &lt;label htmlFor="password" className='text-slate-600 dark:text-slate-300'&gt;Password&lt;/label&gt;&lt;br /&gt;
                &lt;input id='password' type="password" placeholder='Type your Password...' className='text-slate-400 w-[16rem] mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300'/&gt;
            &lt;/div&gt;
  
            &lt;br /&gt;
            &lt;div className="h-5"&gt;&lt;/div&gt;
  
            &lt;button className='w-[16rem] h-auto py-2 bg-slate-300 text-slate-400 hover:text-white hover:bg-slate-400 dark:bg-slate-600 dark:text-slate-400 dark:hover:text-slate-900 dark:hover:bg-white rounded-md duration-300'&gt;Login&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
  );
}`