const testimonialsChunks = ["one" , "two" , "three"];

const AllTestimonials = document.querySelectorAll(".testimonial");

AllTestimonials.forEach(testimonial => {
    testimonial.addEventListener("mousemove" , (event) => {
        const box = testimonial.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX = ((y - centerY) / centerY) * - 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        testimonial.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    testimonial.addEventListener("mouseleave", () => {
        testimonial.style.transform = `rotateX(0) rotateY(0)`;
    })
})

const allChunks = document.querySelectorAll(".testimonials-container");
const togglers = document.querySelectorAll(".circle");

togglers.forEach(toggler => {
    toggler.addEventListener("click" , (event) => {
        let clickedCircle = event.currentTarget;
        togglers.forEach(toggle => toggle.classList.remove("active-circle"));
        
        clickedCircle.classList.add("active-circle");

        allChunks.forEach(chunk => chunk.style.display = "none");
        document.querySelector(`#${clickedCircle.dataset.index}`).style.display = "flex";
    })

    
})
