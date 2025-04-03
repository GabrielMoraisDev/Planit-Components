export const codeStringJs = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Navbar with Icon Animations&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
    &lt;style&gt;
        /* Additional animations and styles */
        .icon-transition {
            transition: opacity 0.3s, transform 0.3s;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body class="bg-gray-100 dark:bg-gray-800"&gt;
    &lt;div id="navbar" class="max-h-20 lg:py-0 lg:h-16 bg-slate-600 dark:bg-slate-900 relative duration-500 flex justify-center overflow-hidden"&gt;
        &lt;!-- Mobile Toggle Button --&gt;
        &lt;div class="lg:hidden text-sky-300 absolute left-4 top-3 w-10 h-10 flex justify-center place-items-center rounded-md cursor-pointer" id="menuToggle"&gt;
            &lt;i class="bi bi-list w-8 h-8 absolute duration-300 opacity-100 rotate-0" id="menuIcon" style="font-size: 32px;"&gt;&lt;/i&gt;
            &lt;i class="bi bi-x w-8 h-8 absolute duration-300 opacity-0 -rotate-[70deg]" id="closeIcon" style="font-size: 32px;"&gt;&lt;/i&gt;
        &lt;/div&gt;

        &lt;!-- Logo --&gt;
        &lt;div class="absolute right-5 top-3 lg:top-0 lg:left-10 h-16 lg:h-full w-auto flex place-items-center"&gt;
            &lt;img class="h-[70%] w-auto" src="/api/placeholder/200/70" alt="Logo"&gt;
        &lt;/div&gt;

        &lt;!-- Navigation Items --&gt;
        &lt;div id="navItems" class="h-full w-auto lg:flex place-items-center inline lg:ml-[-6rem] xl:ml-0 opacity-0 lg:opacity-100 duration-300"&gt;
            &lt;!-- Nav items will be populated by JavaScript --&gt;
        &lt;/div&gt;

        &lt;!-- Buttons --&gt;
        &lt;div id="authButtons" class="absolute bottom-7 lg:right-5 h-auto w-auto flex lg:-translate-y-1/2 lg:top-1/2 place-items-center duration-300 opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100"&gt;
            &lt;button class="absolute bottom-0 left-0 lg:relative bg-sky-200 hover:bg-white text-slate-800 dark:bg-slate-700 dark:hover:bg-sky-300 dark:text-white dark:hover:text-slate-900 w-32 lg:w-20 px-4 lg:px-2 py-2 lg:py-1 rounded-md mx-2 lg:mx-1 text-base lg:text-sm duration-300"&gt;Sign-in&lt;/button&gt;
            &lt;button class="absolute bottom-0 right-0 lg:relative bg-sky-300 hover:bg-white text-slate-800 dark:bg-sky-400 dark:hover:bg-sky-200 dark:text-slate-900 w-32 lg:w-20 px-4 lg:px-2 py-2 lg:py-1 rounded-md mx-2 lg:mx-1 text-base lg:text-sm duration-300"&gt;Sign-up&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        document.addEventListener('DOMContentLoaded', function() {
            // Navigation items data
            const items = [
                { label: 'Home', href: '#', icon: 'bi-house' },
                { label: 'Projects', href: '#', icon: 'bi-box' },
                { label: 'About', href: '#', icon: 'bi-info-circle' },
                { label: 'Enterprise', href: '#', icon: 'bi-building' },
                { label: 'Contact', href: '#', icon: 'bi-person-lines-fill' }
            ];

            // DOM elements
            const navbar = document.getElementById('navbar');
            const menuToggle = document.getElementById('menuToggle');
            const menuIcon = document.getElementById('menuIcon');
            const closeIcon = document.getElementById('closeIcon');
            const navItems = document.getElementById('navItems');
            const authButtons = document.getElementById('authButtons');

            // State
            let menuMobile = false;
            let hoveredItem = null;

            // Create navigation items
            items.forEach(item =&gt; {
                const navItem = document.createElement('a');
                navItem.href = item.href;
                navItem.className = "relative h-full cursor-pointer text-sky-300 hover:text-white dark:hover:text-sky-300 dark:text-white lg:mx-4 xl:mx-7";
                navItem.dataset.label = item.label;
                
                const labelDiv = document.createElement('div');
                labelDiv.className = "w-auto h-14 lg:h-full flex rounded-md place-items-center duration-300 text-center justify-center";
                labelDiv.textContent = item.label;
                
                const iconDiv = document.createElement('div');
                iconDiv.className = "absolute mb-0 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex justify-center duration-300 opacity-0";
                
                const icon = document.createElement('i');
                icon.className = \`bi $\{item.icon} text-xl\`;
                
                iconDiv.appendChild(icon);
                navItem.appendChild(labelDiv);
                navItem.appendChild(iconDiv);
                
                navItem.addEventListener('mouseenter', function() {
                    handleHover(item.label);
                });
                
                navItem.addEventListener('mouseleave', function() {
                    handleHover(null);
                });
                
                navItems.appendChild(navItem);
            });

            // Toggle mobile menu
            menuToggle.addEventListener('click', function() {
                menuMobile = !menuMobile;
                updateUI();
            });

            // Handle hover state
            function handleHover(label) {
                hoveredItem = label;
                updateHoverState();
            }

            // Update UI based on state
            function updateUI() {
                // Update mobile menu height and padding
                if (menuMobile) {
                    navbar.classList.remove('max-h-20');
                    navbar.classList.add('max-h-[70rem]', 'pt-5', 'pb-24');
                    menuIcon.classList.remove('opacity-100', 'rotate-0');
                    menuIcon.classList.add('opacity-0', 'rotate-[70deg]');
                    closeIcon.classList.remove('opacity-0', '-rotate-[70deg]');
                    closeIcon.classList.add('opacity-100', 'rotate-0');
                    navItems.classList.add('opacity-100');
                    navItems.classList.remove('opacity-0');
                    authButtons.classList.add('opacity-100');
                    authButtons.classList.remove('opacity-0', 'pointer-events-none');
                } else {
                    navbar.classList.add('max-h-20');
                    navbar.classList.remove('max-h-[70rem]', 'pt-5', 'pb-24');
                    menuIcon.classList.add('opacity-100', 'rotate-0');
                    menuIcon.classList.remove('opacity-0', 'rotate-[70deg]');
                    closeIcon.classList.add('opacity-0', '-rotate-[70deg]');
                    closeIcon.classList.remove('opacity-100', 'rotate-0');
                    navItems.classList.remove('opacity-100');
                    navItems.classList.add('opacity-0');
                    authButtons.classList.remove('opacity-100');
                    authButtons.classList.add('opacity-0', 'pointer-events-none');
                }
                
                // Ensure hover state is still correct
                updateHoverState();
            }

            // Update hover states for nav items
            function updateHoverState() {
                const navLinks = navItems.querySelectorAll('a');
                
                navLinks.forEach(link =&gt; {
                    const label = link.dataset.label;
                    const labelDiv = link.querySelector('div:first-child');
                    const iconDiv = link.querySelector('div:last-child');
                    
                    if (label === hoveredItem) {
                        labelDiv.classList.add('pt-[1rem]', 'lg:pt-0', 'lg:mt-[0.8rem]');
                        labelDiv.classList.remove('lg:mb-1');
                        
                        iconDiv.classList.add('mt-[-1rem]', 'lg:mt-[-0.7rem]', 'opacity-100');
                        iconDiv.classList.remove('mb-0', 'opacity-0');
                    } else {
                        labelDiv.classList.remove('pt-[1rem]', 'lg:pt-0', 'lg:mt-[0.8rem]');
                        labelDiv.classList.add('lg:mb-1');
                        
                        iconDiv.classList.remove('mt-[-1rem]', 'lg:mt-[-0.7rem]', 'opacity-100');
                        iconDiv.classList.add('mb-0', 'opacity-0');
                    }
                });
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`