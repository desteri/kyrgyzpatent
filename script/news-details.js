function getNewsDetails() {
    const news = document.querySelector('.news-details .col');
    const id = new URLSearchParams(window.location.search).get('id');

    const renderNews = async () => {
        const result = await fetch('../db.json' + id);
        const newsPost = await result.json();
        const newsTemplate = `
            <div class="card border-0" style="width: 100%;">
                <img src="${newsPost.src}" loading="lazy" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${newsPost.title}</h5>
                    <h6 class="card-subtitle my-3"><time>24.11.2021</time></h6>
                    <p class="card-text">${newsPost.text}</p>
                </div>
            </div>

            <div class="d-flex justify-content-between">
                <a href="./news.html" class="btn"><i class="fas fa-chevron-left"></i> Назад</a>
                <button class="btn" onclick='window.print()'><i class="fas fa-print"></i> Распечатать</button>
            </div>
        `;

        news.insertAdjacentHTML('afterbegin', newsTemplate);
    }

    window.addEventListener('DOMContentLoaded', () => renderNews());
}

getNewsDetails();