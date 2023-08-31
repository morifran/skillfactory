document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "AIzaSyB8BmaLD2wDywVHVwimfVooqbXjfrVrhbU";
  const booksSection = document.querySelector(".main__cards");
  const loadMoreButton = document.querySelector(".loadMore");
  const categories = document.querySelectorAll(".aside__button");

  let currentPage = 1;
  let activeCategory = categories[0].textContent;

  function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("main__card");

    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg";
    const rating = book.volumeInfo.averageRating ? `${book.volumeInfo.averageRating} (${book.volumeInfo.ratingsCount || 0} reviews)` : "";
    const description = book.volumeInfo.description ? (book.volumeInfo.description.length > 150 ? book.volumeInfo.description.slice(0, 150) + "..." : book.volumeInfo.description) : "No description available";
    const price = book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : "";

    card.innerHTML = `
      <div class="main__card-pic">
        <img src="${thumbnail}" alt="Book Cover">
      </div>
      <div class="main__card-description">
        <p class="author">${authors}</p>
        <h3 class="bookName">${book.volumeInfo.title}</h3>
        <div class="rewiews">${rating}</div>
        <p class="description">${description}</p>
        <p class="price">${price}</p>
        <button class="buy">Buy now</button>
      </div>
    `;

    booksSection.appendChild(card);
  }

  async function fetchBooks(category, maxResults = 6) {
    const startIndex = (currentPage - 1) * maxResults;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=${maxResults}&startIndex=${startIndex}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  }

  async function loadMoreBooks() {
    currentPage++;
    const books = await fetchBooks(activeCategory);
    books.forEach(book => createBookCard(book));
  }

  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", loadMoreBooks);
  }

  categories.forEach(category => {
    category.addEventListener("click", async () => {
      currentPage = 1;
      activeCategory = category.textContent;
      booksSection.innerHTML = "";
      if (loadMoreButton) {
        loadMoreButton.disabled = false;
      }
      await loadMoreBooks();
    });
  });

  (async function init() {
    await loadMoreBooks();
  })();
});
