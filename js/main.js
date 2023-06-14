const container = document.querySelector(".container");

const promise = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");

let res = promise
  .then((res) => res.json())
  .then((data) => {
    let search = data.Search;
    for (let i of search) {
      container.innerHTML += `  
    <div class="card">
        <div class="image">
            <img src="${i.Poster}" alt="" class="poster" />
        </div>
        <div class="text">
          <h4 class="title">${i.Title}</h4>
          <span class="year">${i.Year}</span>
        </div>
    </div>
      `;
    }
  });
// console.log(res);

// for (let key in res) {
//   for (let i in key) {
//     console.log(i);
//   }
// }
