// function getNewsItem() {
    // const news = document.querySelector('.news__content');
    // const renderNews = async () => {
    //     const result = await fetch('http://localhost:3000/news');
    //     const newsPost = await result.json();
    //     let newsTemplate = '';

    //     for (const prop of newsPost) {
    //         newsTemplate += `
    //             <li class="card mb-4 border-0 border-bottom pb-4" data-num=${prop.dataNum} style="max-width: 100%;">
    //                 <div class="row g-0">
    //                     <div class="col-md-4">
    //                         <img src="${prop.src}" class="img-fluid" loading="lazy" alt="...">
    //                     </div>
    //                     <div class="col-md-8">
    //                         <div class="card-body">
    //                             <h5 class="card-title">${prop.title}</h5>
    //                             <p class="card-text">${prop.text.slice(0, 300)}...</p>
    //                         </div>
    //                         <div class="card-footer border-0 bg-transparent">
    //                             <a href="./news-details.html?id=${prop.id}" class="btn btn-primary">Подробнее</a>
    //                             <p class="card-text time"><time>24.11.2021</time></p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </li>
    //         `
    //     }

    //     news.insertAdjacentHTML('afterbegin', newsTemplate);

        function getPagination() {
            let count = document.querySelectorAll('.news__content .card');
            let cnt = 5;
            let cnt_page = Math.ceil(count.length / cnt);

            let paginator = document.querySelectorAll("nav .paginator");
            let page = "";
            for (let i = 0; i < cnt_page; i++) {
                page += `
                    <li class="page-item" data-page="${i * cnt}" id="page${i + 1}">${i + 1}</li>
                `
            }
        
            paginator.forEach(item => {
                item.insertAdjacentHTML('afterbegin', page);
            });
        
            for (let i = 0; i < count.length; i++) {
                if (i < cnt) {
                    count[i].style.display = "block";
                }
            }
        
            function pagination() {
                paginator.forEach(item => {
                    item.addEventListener('click', item => {
                        let e = item || window.event;
                        let target = e.target;
                        let id = target.id;
                
                        if (target.tagName.toLowerCase() != "li") return;
                
                        let num_ = id.substr(4);
                        let data_page = +target.dataset.page;
    
                        let j = 0;
                        for (let i = 0; i < count.length; i++) {
                            let data_num = count[i].dataset.num;
                            if (data_num <= data_page || data_num >= data_page)
                            count[i].style.display = "none";
                        }
                        for (let i = data_page; i < count.length; i++) {
                            if (j >= cnt) break;
                            count[i].style.display = "block";
                            j++;
                        }
                    });
                })     
            }
        
            pagination();
        }

        getPagination();

    //     function getImage() {
    //         [].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
    //           img.setAttribute("src", img.getAttribute("data-src"));
    //           img.onload = function () {
    //             img.removeAttribute("data-src");
    //           };
    //         });
    //       }
          
    //     getImage();
    // }
    
    // window.addEventListener('DOMContentLoaded', () => renderNews());
// }

// getNewsItem();