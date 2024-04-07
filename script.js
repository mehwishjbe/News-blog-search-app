const apiKey = "c9cd0b0a2fa84f9c821a9d23453c8bf8";

const blogContainer = document.getElementById("blog-card");

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize10&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

function displayBlog(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((articles) => {
        
    });
}

async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlog(articles);
  } catch (error) {
    console.error("Error fetching random news", error);
  }
};
