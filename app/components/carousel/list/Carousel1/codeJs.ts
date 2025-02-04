export const codeStringJs = `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Carousel&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="carousel" class="w-full h-[30rem] flex m-auto justify-center rounded-t-lg overflow-hidden relative"&gt;
        &lt;div class="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden"&gt;
            &lt;div class="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"&gt;&lt;/div&gt;
            &lt;div id="prevImage" class="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center items-center"&gt;
                &lt;i class="bi-chevron-left text-2xl"&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;div id="slidesContainer" class="w-full h-full absolute"&gt;&lt;/div&gt;
            &lt;div class="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"&gt;&lt;/div&gt;
            &lt;div id="nextImage" class="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center items-center"&gt;
                &lt;i class="bi-chevron-right text-2xl"&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;div id="dotsContainer" class="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center z-30"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        document.addEventListener("DOMContentLoaded", () =&gt; {
            const images = [
                "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg",
                "https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg",
                "https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg"
            ];

            let currentImage = 0;
            let isHovered = false;

            const slidesContainer = document.getElementById("slidesContainer");
            const dotsContainer = document.getElementById("dotsContainer");
            const prevImageBtn = document.getElementById("prevImage");
            const nextImageBtn = document.getElementById("nextImage");
            const carousel = document.getElementById("carousel");

            function renderSlides() {
                slidesContainer.innerHTML = "";
                dotsContainer.innerHTML = "";

                images.forEach((img, index) =&gt; {
                    const slide = document.createElement("div");
                    slide.className = \`h-full w-full absolute $\{index === currentImage ? "opacity-100" : "opacity-0"} duration-300 bg-cover bg-center\`;
                    slide.style.backgroundImage = \`url($\{img})\`;
                    slidesContainer.appendChild(slide);

                    const dot = document.createElement("div");
                    dot.className = \`h-full w-5 duration-300 rounded-full $\{index === currentImage ? "bg-white" : "bg-slate-600"}\`;
                    dot.addEventListener("click", () =&gt; {
                        currentImage = index;
                        updateSlide();
                    });
                    dotsContainer.appendChild(dot);
                });

                updateSlide();
            }

            function updateSlide() {
                const slides = slidesContainer.children;
                const dots = dotsContainer.children;

                for (let i = 0; i &lt; slides.length; i++) {
                    slides[i].classList.toggle("opacity-100", i === currentImage);
                    slides[i].classList.toggle("opacity-0", i !== currentImage);
                    dots[i].classList.toggle("bg-white", i === currentImage);
                    dots[i].classList.toggle("bg-slate-600", i !== currentImage);
                }
            }

            function nextImage() {
                currentImage = (currentImage + 1) % images.length;
                updateSlide();
            }

            function prevImage() {
                currentImage = (currentImage - 1 + images.length) % images.length;
                updateSlide();
            }

            prevImageBtn.addEventListener("click", prevImage);
            nextImageBtn.addEventListener("click", nextImage);

            let autoSlide = setInterval(nextImage, 5000);

            carousel.addEventListener("mouseenter", () =&gt; {
                isHovered = true;
                clearInterval(autoSlide);
            });

            carousel.addEventListener("mouseleave", () =&gt; {
                isHovered = false;
                autoSlide = setInterval(nextImage, 5000);
            });

            renderSlides();
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`