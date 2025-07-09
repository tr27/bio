/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function() {

    // --- Timeline Data --- //
    const timelineData = [
        { year: '1997-2010', image: 'img/fam.jpg', description: 'Born and raised in Shantikunj, Haridwar' },
        { year: '2015',  description: "Completed my Intermidiate Education with CBSE - Commerce - at Gayatri Vidyapeeth." },
        { year: '2016 and Onwards', description: 'Started College studies at Pt. L.M.S Rishikesh - B.Com.' },
        { year: '2019 and Onwards',  description: 'Hard lessons with my own Business.' },
        { year: '2024 and Onwards', image: 'img/my-stp.jpg', description: 'Going forward in clothing business and IT.' }
    ];

    const timelineContainer = document.querySelector('.timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        let imageHtml = '';
        let contentClass = 'timeline-content';
        if (item.image) {
            imageHtml = `<img src="${item.image}" alt="${item.year}">`;
        } else {
            contentClass += ' no-image';
        }

        timelineItem.innerHTML = `
            <div class="${contentClass}">
                ${imageHtml}
                <h3 class="timeline-item-title">${item.year}</h3>
                <p>${item.description}</p>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });

    // --- Scroll Animations --- //
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    

});