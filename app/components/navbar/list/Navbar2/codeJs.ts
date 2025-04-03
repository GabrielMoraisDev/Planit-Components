export const codeStringJs = `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Navbar&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
&lt;/head&gt;
&lt;body class="bg-white dark:bg-black"&gt;

    &lt;div class="w-full h-16 md:h-20 relative top-0 left-0 bg-white dark:bg-slate-900 z-50 shadow-sm"&gt;
        &lt;div class="hidden lg:flex items-center w-full h-full mx-auto px-4"&gt;
            &lt;img src="/planit.png" alt="Planit Logo" class="w-12 ml-5"&gt;

            &lt;ul class="flex ml-8 lg:ml-3 text-slate-700 dark:text-slate-400 lg:text-sm xl:text-[1vw] 2xl:text-[0.8vw]"&gt;
                &lt;a href="#"&gt;&lt;li class="ml-10 lg:ml-5 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Home&lt;/li&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Products&lt;/li&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Certifications&lt;/li&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Customers&lt;/li&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;About&lt;/li&gt;&lt;/a&gt;
            &lt;/ul&gt;

            &lt;div class="w-96 ml-auto h-10 mr-5 flex justify-end place-items-center gap-3"&gt;
                &lt;div class="h-10 w-24 bg-sky-200 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800"&gt;Sign-In&lt;/div&gt;
                &lt;div class="h-10 w-24 bg-sky-300 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800"&gt;Sign-Up&lt;/div&gt;
                &lt;i class="bi bi-whatsapp hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"&gt;&lt;/i&gt;
                &lt;i class="bi bi-search hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Mobile --&gt;
        &lt;div class="absolute left-0 w-10 h-10 -translate-y-1/2 top-1/2 ml-5 flex justify-center place-items-center lg:hidden"&gt;
            &lt;i id="list" class="bi bi-list text-2xl text-slate-500 z-20 absolute duration-300 cursor-pointer"&gt;&lt;/i&gt;
            &lt;i id="close" class="bi bi-x text-2xl text-slate-500 z-10 absolute duration-300 cursor-pointer opacity-0 pointer-events-none"&gt;&lt;/i&gt;
        &lt;/div&gt;

        &lt;img src="/planit.png" alt="Planit Logo" class="absolute right-3 -translate-y-1/2 top-1/2 w-10 h-10 lg:hidden"&gt;

        &lt;div id="menu" class="w-full max-h-0 bg-white duration-300 overflow-hidden lg:hidden shadow-sm"&gt;
            &lt;ul class="flex flex-col justify-center items-center h-full mt-5"&gt;
                &lt;a href="#"&gt;&lt;li class="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Home&lt;/li&gt;&lt;hr class="w-[80vw]"&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Products&lt;/li&gt;&lt;hr class="w-[80vw]"&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Certifications&lt;/li&gt;&lt;hr class="w-[80vw]"&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Customers&lt;/li&gt;&lt;hr class="w-[80vw]"&gt;&lt;/a&gt;
                &lt;a href="#"&gt;&lt;li class="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;About&lt;/li&gt;&lt;/a&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        document.addEventListener("DOMContentLoaded", function () {
            const menu = document.getElementById("menu");
            const listIcon = document.getElementById("list");
            const closeIcon = document.getElementById("close");

            listIcon.addEventListener("click", function () {
                menu.classList.replace("max-h-0", "max-h-96");
                listIcon.classList.add("opacity-0", "pointer-events-none");
                closeIcon.classList.remove("opacity-0", "pointer-events-none");
            });

            closeIcon.addEventListener("click", function () {
                menu.classList.replace("max-h-96", "max-h-0");
                listIcon.classList.remove("opacity-0", "pointer-events-none");
                closeIcon.classList.add("opacity-0", "pointer-events-none");
            });
        });
    &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
`