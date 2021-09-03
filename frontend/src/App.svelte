<script>
  import SetOfCard from './Component/SetOfCard.svelte'
  document.title = 'Post it App'
</script>

<main>
  <header>
    <h1>Post It app</h1>
  </header>
  <div>
    <SetOfCard />
  </div>
  <footer>2021 Karilla</footer>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  main {
    padding: 1em;
    margin: 0px;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #f4edde;
  }

  h1 {
    text-align: center;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 200;
  }

  footer {
    text-align: center;
  }
</style>
