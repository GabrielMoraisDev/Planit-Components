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
                { name: "Item 1", img: "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg" },
                { name: "Item 2", img: "https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg" },
                { name: "Item 3", img: "https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg" }
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

            let autoSlide = setInterval(nextSlide, 5000);

            carousel.addEventListener("mouseenter", () =&gt; {
                isHovered = true;
                clearInterval(autoSlide);
            });

            carousel.addEventListener("mouseleave", () =&gt; {
                isHovered = false;
                autoSlide = setInterval(nextSlide, 5000);
            });

            renderSlides();
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

`