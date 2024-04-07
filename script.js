const apiKey = "c9cd0b0a2fa84f9c821a9d23453c8bf8";

const blogContainer = document.getElementById("blog-card");

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize10&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
    console.log(data);
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}
