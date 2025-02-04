'use client'
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { cleanConsole } from '@/app/_components/console';
import { useDataContext } from "../_context/data";
import { ToastContainer, toast } from 'react-toastify';

interface propsCode {
    codeString: string;
}

export default function Copy({ codeString }: propsCode) {
    const [viewCode, setViewCode] = useState(false);
    const { lang, setLang } = useDataContext();
    const [isToastActive, setIsToastActive] = useState(false);

    const copyText = (text: string) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    function copied() {
        if (isToastActive) return;
        
        setIsToastActive(true);
        toast.info(`Componente ${lang} copiado!`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => setIsToastActive(false)
        });
        copyText(codeString.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
    }

    return (
        <>
            <ToastContainer />
            <div className="w-full h-16 bg-slate-700 m-auto relative rounded-b-lg duration-300">
                <div 
                    className="w-44 h-[60%] bg-slate-600 hover:bg-slate-500 duration-300 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 left-5 flex justify-center place-items-center"
                    onClick={() => setViewCode(prev => !prev)}
                >
                    {viewCode ? 'Ocultar código' : 'Ver código'}
                </div>
                <div 
                    className={`w-20 h-[60%] duration-300 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 right-5 flex justify-center place-items-center ${isToastActive ? 'bg-sky-600 cursor-default' : 'bg-slate-600 hover:bg-slate-500'}`}
                    onClick={copied}
                >
                    <Icon.Clipboard />
                </div>
                <div className="w-auto h-[60%] p-3 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 flex justify-center place-items-center">
                    <div 
                        className={`w-24 py-4 rounded-full h-full ${lang === 'next' ? 'bg-white' : 'bg-white/10 hover:bg-white/30'} duration-300 mx-2 bg-center bg-contain bg-no-repeat`}
                        style={{ backgroundImage: `url('https://a.storyblok.com/f/172506/1280x800/00901d9ffe/next-js-logo.webp')` }}
                        onClick={() => setLang('next')}
                    />
                    <div 
                        className={`w-24 py-4 rounded-full h-full ${lang === 'react' ? 'bg-white' : 'bg-white/10 hover:bg-white/30'} duration-300 mx-2 bg-center bg-contain bg-no-repeat`}
                        style={{ backgroundImage: `url('https://devtop.io/wp-content/uploads/2022/10/react.png')` }}
                        onClick={() => setLang('react')}
                    />
                    <div 
                        className={`w-24 py-4 rounded-full h-full ${lang === 'js' ? 'opacity-100' : 'opacity-55 hover:opacity-75'} duration-300 mx-2 bg-center bg-cover bg-no-repeat`}
                        style={{ backgroundImage: `url('https://hermes.dio.me/articles/cover/a4b5221c-5d38-4f82-830e-78a655b87de6.jpg')` }}
                        onClick={() => setLang('js')}
                    />
                </div>
            </div>

            <div className={`bg-slate-800 w-[100%] m-auto mt-4 ${viewCode ? 'p-4 max-h-[30rem] overflow-y-auto' : 'max-h-0 p-0 overflow-hidden'} duration-300`}>
                <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: cleanConsole(codeString) }} />
            </div>
        </>
    );
}
