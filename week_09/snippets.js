<script>
  const img = document.querySelector('img');

  async function getCats() {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats');
      const catData = await response.json();
      img.src = catData.data.images.original.url;
    } catch (error) {
      console.error(error);
    }
  }
  getCats();
</script>


