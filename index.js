function duplicate(sliderId){
    const slideTrack = document.querySelector(`#${sliderId} .slider-track`);
    const slides = Array.from(slideTrack.children);
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
    });
}

duplicate("slider-1");
duplicate("slider-2");
duplicate("slider-3");