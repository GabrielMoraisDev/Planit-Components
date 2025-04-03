export const codeStringJs = `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Responsive Navbar&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
&lt;/head&gt;
&lt;body class="bg-gray-100 dark:bg-slate-800"&gt;
    &lt;nav class="relative top-0 z-50 bg-white dark:bg-slate-700 h-14 lg:h-16 w-full flex justify-center place-items-center text-xl duration-300 text-slate-700 dark:text-white dark:hover:text-slate-200"&gt;
        &lt;!-- Mobile Search Button --&gt;
        &lt;i class="bi bi-search cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute right-5" id="searchBtn" style="font-size: 22px;"&gt;&lt;/i&gt;
        
        &lt;!-- Mobile Search Panel --&gt;
        &lt;div class="w-full bg-white dark:bg-slate-600 max-h-0 absolute top-14 overflow-hidden duration-300 lg:hidden" id="searchPanel"&gt;
            &lt;div class="relative w-full flex justify-center mt-4"&gt;
                &lt;input
                    type="text"
                    class="bg-slate-200 dark:bg-slate-700 py-3 dark:text-white pl-14 w-[90%] m-auto text-black pr-3 text-base rounded-md focus:outline-none outline-none border-none"
                    placeholder="Pesquisar..."
                    id="mobileSearchInput"
                /&gt;
                &lt;span class="absolute left-10 top-1/2 transform -translate-y-1/2 md:ml-5"&gt;
                    &lt;i class="bi bi-search text-gray-500" style="font-size: 16px;"&gt;&lt;/i&gt;
                &lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="h-80 bg-white dark:bg-slate-600 mt-5 w-[90%] m-auto overflow-y-scroll" id="mobileSearchResults"&gt;
                
            &lt;/div&gt;
            &lt;div class="h-6"&gt;&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;!-- Mobile Menu Toggle --&gt;
        &lt;i class="bi bi-list cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5" id="menuOpenBtn" style="font-size: 30px;"&gt;&lt;/i&gt;
        &lt;i class="bi bi-x cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5 hidden" id="menuCloseBtn" style="font-size: 30px;"&gt;&lt;/i&gt;
        
        &lt;!-- Logo and Nav Items --&gt;
        &lt;div class="flex justify-center items-center absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-5 lg:-translate-y-1/2 lg:-translate-x-0 lg:left-0 lg:right-auto lg:w-full"&gt;
            &lt;a href="/" class="lg:absolute lg:left-3"&gt;
                &lt;img src="/api/placeholder/40/40" class="w-10 h-10" alt="Logo"&gt;
            &lt;/a&gt;

            &lt;!-- Desktop Navigation --&gt;
            &lt;div class="hidden lg:flex items-center lg:ml-[-16rem] lg:text-[1.3vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"&gt;
                &lt;a href="/" class="text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300"&gt;Home&lt;/a&gt;
                &lt;a href="/" class="text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300"&gt;Products&lt;/a&gt;
                &lt;a href="/" class="text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300"&gt;Features&lt;/a&gt;
                &lt;a href="/" class="text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300"&gt;Heroes&lt;/a&gt;
                
                &lt;!-- Dropdown Menu --&gt;
                &lt;div id="dropdownContainer" class="mx-2 xl:mx-3 2xl:mx-[1.48vw] cursor-pointer text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200 duration-300 relative "&gt;
                    &lt;div class="flex place-items-center"&gt;
                        &lt;p class="text-slate-700 dark:text-white dark:hover:text-slate-200"&gt;Items &lt;/p&gt;
                        &lt;i class="bi bi-chevron-down ml-1 mt-0" style="font-size: 15px;"&gt;&lt;/i&gt;
                    &lt;/div&gt;
                    &lt;div id="dropdownMenu" class="max-h-0 pt-0 p-0 rounded-md md:w-[12vw] xl:w-[11vw] 2xl:w-45 bg-slate-100 dark:bg-slate-800 duration-300 absolute ml-[-4rem] text-center mt-0 overflow-hidden z-30"&gt;
                        &lt;div class="h-10 flex justify-center place-items-center"&gt;
                            &lt;a href="/" class="text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300"&gt;Item 1&lt;/a&gt;&lt;br&gt;
                        &lt;/div&gt;
                        &lt;hr class="border-white dark:border-slate-400"&gt;
                        &lt;div class="h-10 flex justify-center place-items-center text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300"&gt;
                            &lt;a href="#" target="_blank" rel="noopener noreferrer"&gt;Item 2&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                
                &lt;a href="/" class="text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200 mx-2 xl:mx-3 2xl:mx-[1.48vw] duration-300 "&gt;About&lt;/a&gt;

                &lt;!-- Desktop Search and Social Media --&gt;
                &lt;div class="absolute right-5 flex justify-center place-items-center"&gt;
                    &lt;div class="relative ml-auto  right-5"&gt;
                        &lt;input
                            type="text"
                            class="pl-9 w-[10vw] bg-slate-200 dark:bg-slate-600 text-black dark:text-white pr-3 lg:h-7 lg:w-[10vw] xl:w-44 2xl:w-[13vw] 2xl:h-8 2xl:text-[0.8vw] text-[1vw] border-none rounded-md focus:outline-none"
                            placeholder="Pesquisar..."
                            id="desktopSearchInput"
                        /&gt;
                        &lt;div id="desktopSearchResults" class="bg-slate-100 dark:bg-slate-800 absolute left-0 h-0 ml-[-2.5rem] 2xl:ml-[-4rem] mt-2 w-[20vw] overflow-y-scroll duration-300 ease-in-out rounded-md"&gt;
                        
                        &lt;/div&gt;
                        &lt;span class="absolute left-3 top-1/2 transform -translate-y-1/2"&gt;
                            &lt;i class="bi bi-search text-gray-500" style="font-size: 16px;"&gt;&lt;/i&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;

                    &lt;a href="#" target="_blank" rel="noopener noreferrer" class="2xl:w-6 lg:w-5 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer "&gt;
                        &lt;i class="bi bi-youtube text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-md 2xl:text-lg text-lg" style="font-size: 25px;"&gt;&lt;/i&gt;
                    &lt;/a&gt;
                    &lt;a href="#" target="_blank" rel="noopener noreferrer" class="2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer "&gt;
                        &lt;i class="bi bi-linkedin text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md" style="font-size: 20px;"&gt;&lt;/i&gt;
                    &lt;/a&gt;
                    &lt;a href="#" target="_blank" rel="noopener noreferrer" class="2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer "&gt;
                        &lt;i class="bi bi-instagram text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md" style="font-size: 20px;"&gt;&lt;/i&gt;
                    &lt;/a&gt;
                    &lt;a href="#" target="_blank" rel="noopener noreferrer" class="2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer "&gt;
                        &lt;i class="bi bi-facebook text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md" style="font-size: 20px;"&gt;&lt;/i&gt;
                    &lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Mobile Menu Panel --&gt;
        &lt;div class="absolute top-14 z-50 text-slate-700 dark:text-white dark:hover:text-slate-400 w-full max-h-0 bg-white dark:bg-slate-600 text-base duration-500 mt-[-0.1rem] overflow-hidden lg:hidden" id="mobileMenu"&gt;
            &lt;hr class="mt-3 mx-8 opacity-0"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Home&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Products&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Features&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Heroes&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Item 1&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;Item 2&lt;/p&gt;&lt;/a&gt;
            &lt;hr class="mx-8 opacity-25"&gt;
            &lt;a href="/" class="hover:text-slate-700 dark:text-white dark:hover:text-slate-400"&gt;&lt;p class="text-center my-[0.83rem] duration-300"&gt;About&lt;/p&gt;&lt;/a&gt;
            &lt;div class="h-4"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/nav&gt;

    &lt;script&gt;
        document.addEventListener('DOMContentLoaded', function() {
            // State variables
            let menuOpen = false;
            let searchOpen = false;
            let searchProdOpen = false;
            let dropdownOpen = false;
            
            // DOM Elements
            const menuOpenBtn = document.getElementById('menuOpenBtn');
            const menuCloseBtn = document.getElementById('menuCloseBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const searchBtn = document.getElementById('searchBtn');
            const searchPanel = document.getElementById('searchPanel');
            const mobileSearchInput = document.getElementById('mobileSearchInput');
            const desktopSearchInput = document.getElementById('desktopSearchInput');
            const desktopSearchResults = document.getElementById('desktopSearchResults');
            const dropdownContainer = document.getElementById('dropdownContainer');
            const dropdownMenu = document.getElementById('dropdownMenu');
            
            // Mobile Menu Toggle
            menuOpenBtn.addEventListener('click', function() {
                menuOpen = true;
                searchOpen = false;
                updateUI();
            });
            
            menuCloseBtn.addEventListener('click', function() {
                menuOpen = false;
                updateUI();
            });
            
            // Mobile Search Toggle
            searchBtn.addEventListener('click', function() {
                menuOpen = false;
                searchOpen = !searchOpen;
                updateUI();
            });
            
            // Desktop Search
            desktopSearchInput.addEventListener('click', function() {
                searchProdOpen = true;
                updateUI();
            });
            
            document.addEventListener('click', function(e) {
                if (searchProdOpen && !desktopSearchInput.contains(e.target) && !desktopSearchResults.contains(e.target)) {
                    searchProdOpen = false;
                    updateUI();
                }
            });
            
            // Dropdown Menu
            dropdownContainer.addEventListener('mouseenter', function() {
                dropdownOpen = true;
                updateUI();
            });
            
            dropdownContainer.addEventListener('mouseleave', function() {
                dropdownOpen = false;
                updateUI();
            });
            
            // Update UI based on state
            function updateUI() {
                // Mobile Menu
                mobileMenu.style.maxHeight = menuOpen ? '35rem' : '0';
                menuOpenBtn.classList.toggle('hidden', menuOpen);
                menuCloseBtn.classList.toggle('hidden', !menuOpen);
                
                // Mobile Search
                searchPanel.style.maxHeight = searchOpen ? '40rem' : '0';
                
                // Desktop Search Results
                desktopSearchResults.style.height = searchProdOpen ? '72px' : '0';
                
                // Dropdown Menu
                if (dropdownOpen) {
                    dropdownMenu.classList.add('max-h-96', 'pt-3', 'p-2');
                    dropdownMenu.classList.remove('max-h-0', 'pt-0', 'p-0');
                } else {
                    dropdownMenu.classList.remove('max-h-96', 'pt-3', 'p-2');
                    dropdownMenu.classList.add('max-h-0', 'pt-0', 'p-0');
                }
            }
            
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`