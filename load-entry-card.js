document.addEventListener('DOMContentLoaded', () => {
    fetch('entry-card.html')
        .then(response => response.text())
        .then(templateHTML => {
            const templateContainer = document.createElement('div');
            templateContainer.innerHTML = templateHTML;
            document.body.appendChild(templateContainer);

            const container = document.getElementById('entry-container');
            const template = document.getElementById('entry-template').content;
            const entries = document.querySelectorAll('.entry-data');

            entries.forEach(entry => {
                const clone = document.importNode(template, true);
                clone.querySelector('h2').textContent = entry.getAttribute('data-title');
                clone.querySelector('.date').textContent = entry.getAttribute('data-date');
                clone.querySelector('.entry-button').href = entry.getAttribute('data-link');
                container.appendChild(clone);
            });
        });
});