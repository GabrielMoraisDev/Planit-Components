export const codeStringJs = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Carousel&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="carousel" class="relative w-full h-[30rem] mx-auto overflow-hidden"&gt;
        &lt;div id="slides" class="h-full flex transition-transform duration-300"&gt;&lt;/div&gt;

        &lt;div id="prevSlide" class="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center items-center"&gt;
            &lt;i class="bi-chevron-left text-2xl"&gt;&lt;/i&gt;
        &lt;/div&gt;

        &lt;div id="nextSlide" class="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center items-center"&gt;
            &lt;i class="bi-chevron-right text-2xl"&gt;&lt;/i&gt;
        &lt;/div&gt;

        &lt;div id="dotsContainer" class="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        document.addEventListener("DOMContentLoaded", () =&gt; {
            const images = [
            { name: "Index 1", img: "https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380" },
            { name: "Index 2", img: "https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380" },
            { name: "Index 3", img: "https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380" },
            ];

            let currentImage = 0;
            let isHovered = false;

            const slidesContainer = document.getElementById("slides");
            const dotsContainer = document.getElementById("dotsContainer");
            const prevSlideBtn = document.getElementById("prevSlide");
            const nextSlideBtn = document.getElementById("nextSlide");
            const carousel = document.getElementById("carousel");

            function renderSlides() {
                slidesContainer.innerHTML = "";
                dotsContainer.innerHTML = "";

                images.forEach((item, index) =&gt; {
                    const slide = document.createElement("div");
                    slide.className = "min-w-full h-full flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold";
                    slide.style.backgroundImage = \`url($\{item.img})\`;
                    slide.innerHTML = \`&lt;div class="w-full h-full bg-black/30 flex justify-center items-center"&gt;$\{item.name}&lt;/div&gt;\`;
                    slidesContainer.appendChild(slide);

                    const dot = document.createElement("div");
                    dot.className = \`h-full w-5 duration-300 rounded-full $\{index === currentImage ? "bg-white" : "bg-slate-600"}\`;
                    dot.addEventListener("click", () =&gt; {
                        currentImage = index;
                        updateSlidePosition();
                    });
                    dotsContainer.appendChild(dot);
                });

                updateSlidePosition();
            }

            function updateSlidePosition() {
                slidesContainer.style.transform = \`translateX(-$\{currentImage * 100}%)\`;
                Array.from(dotsContainer.children).forEach((dot, index) =&gt; {
                    dot.className = \`h-full w-5 duration-300 rounded-full $\{index === currentImage ? "bg-white" : "bg-slate-600"}\`;
                });
            }

            function prevSlide() {
                currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
                updateSlidePosition();
            }

            function nextSlide() {
                currentImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
                updateSlidePosition();
            }

            prevSlideBtn.addEventListener("click", prevSlide);
            nextSlideBtn.addEventListener("click", nextSlide);

            let autoSlide = setInterval(nextSlide, 3000);

            carousel.addEventListener("mouseenter", () =&gt; {
                isHovered = true;
                clearInterval(autoSlide);
            });

            carousel.addEventListener("mouseleave", () =&gt; {
                isHovered = false;
                autoSlide = setInterval(nextSlide, 3000);
            });

            renderSlides();
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

`