export const codeStringJs = `
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Carousel 3D&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
    &lt;style&gt;
        .perspective {
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        .transform-style-preserve-3d {
            transform-style: preserve-3d;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body class="bg-white dark:bg-slate-900"&gt;

    &lt;div id="carousel-container" class="relative w-full mx-auto h-[14rem] lg:h-[28rem] overflow-hidden perspective bg-white dark:bg-slate-900 py-8 rounded-t-lg duration-1000"&gt;
        &lt;div class="absolute top-0 left-0 h-full w-72 lg:bg-gradient-to-l from-transparent to-slate-400 dark:to-black/90 z-10"&gt;&lt;/div&gt;
        &lt;div class="absolute top-0 right-0 h-full w-72 lg:bg-gradient-to-r from-transparent to-slate-400 dark:to-black/90 z-10"&gt;&lt;/div&gt;
        &lt;div class="relative w-full h-full"&gt;
            &lt;div id="carousel" class="m-auto w-full h-full preserve-3d duration-1000 delay-150"&gt;&lt;/div&gt;

            &lt;button onclick="rotate(1)" class="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:bg-slate-400 bg-slate-100 hover:text-slate-100 dark:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-600 dark:hover:text-slate-100 border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-2 lg:left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"&gt;
                &lt;i class="bi bi-chevron-left text-2xl"&gt;&lt;/i&gt;
            &lt;/button&gt;
            &lt;button onclick="rotate(-1)" class="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:bg-slate-400 bg-slate-100 hover:text-slate-100 dark:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-600 dark:hover:text-slate-100 border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-2 lg:right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"&gt;
                &lt;i class="bi bi-chevron-right text-2xl"&gt;&lt;/i&gt;
            &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        const items = [
            { title: 'Imagem 1', description: 'Descrição da imagem 1', imageUrl: 'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg' },
            { title: 'Imagem 2', description: 'Descrição da imagem 2', imageUrl: 'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg' },
            { title: 'Imagem 3', description: 'Descrição da imagem 3', imageUrl: 'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg' },
            { title: 'Imagem 4', description: 'Descrição da imagem 4', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-montanhas-em-aquarela_23-2149238186.jpg' },
            { title: 'Imagem 5', description: 'Descrição da imagem 5', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-paisagem-de-verao-para-zoom_52683-42162.jpg' },
        ];

        const numberOfItems = items.length;
        const theta = 360 / numberOfItems;
        const radius = 450;
        let rotation = 0;
        let currentItem = 0;
        let isHovered = false;

        const carousel = document.getElementById('carousel');

        function renderCarousel() {
            carousel.innerHTML = '';
            items.forEach((item, index) =&gt; {
                const itemRotation = theta * index;
                const div = document.createElement('div');
                div.classList.add('absolute', 'w-full', 'h-full');
                div.style.transform = \`rotateY($\{itemRotation}deg) translateZ($\{radius}px)\`;
                div.innerHTML = \`
                    &lt;div class="bg-white dark:bg-slate-800 relative w-[15rem] lg:w-[30rem] h-full mx-auto overflow-hidden rounded-lg transform-style-preserve-3d flex justify-center"&gt;
                        &lt;div class="w-[30rem] h-full duration-300 $\{index === currentItem ? 'opacity-100' : (index === currentItem + 1 || index === currentItem - 1) ? 'opacity-70' : 'opacity-20'}"&gt;
                            &lt;img src="$\{item.imageUrl}" alt="$\{item.title}" class="w-[30rem] h-full object-cover"&gt;
                            &lt;div class="absolute inset-0 flex flex-col items-center justify-end p-4 duration-1000"&gt;
                                &lt;h2 class="text-xl font-bold mb-1 text-white"&gt;$\{item.title}&lt;/h2&gt;
                                &lt;p class="text-sm text-gray-200"&gt;$\{item.description}&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                \`;
                carousel.appendChild(div);
            });
        }

        function rotate(direction) {
            rotation += direction * theta;
            document.getElementById('carousel').style.transform = \`translateZ(-$\{radius}px) rotateY($\{rotation}deg)\`;
            currentItem = direction === 1 ? (currentItem === 0 ? items.length - 1 : currentItem - 1) : (currentItem === items.length - 1 ? 0 : currentItem + 1);
            renderCarousel();
        }

        document.getElementById('carousel-container').addEventListener('mouseenter', () =&gt; isHovered = true);
        document.getElementById('carousel-container').addEventListener('mouseleave', () =&gt; isHovered = false);

        setInterval(() =&gt; {
            if (!isHovered) rotate(-1);
        }, 3000);

        renderCarousel();
    &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;

`