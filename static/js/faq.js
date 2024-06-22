// faq.js

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            const answer = this.querySelector(".faq-answer");
            const toggleBtn = this.querySelector(".toggle-btn");

            // Collapse other open items
            faqItems.forEach(i => {
                if (i !== this) {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.display = 'none';
                    i.querySelector('.toggle-btn').textContent = '+';
                }
            });

            // Toggle current item
            if (answer.style.display === "block") {
                answer.style.display = "none";
                toggleBtn.textContent = "+";
                this.classList.remove('active');
            } else {
                answer.style.display = "block";
                toggleBtn.textContent = "-";
                this.classList.add('active');
            }
        });
    });
});
