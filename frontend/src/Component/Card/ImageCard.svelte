<script>
  export let imageLink
</script>

<div class="card">
  <h1>Lorem ipsum</h1>
  <img src="images/{imageLink}.jpg" alt="Fancy pic here" />
  <footer>
    <button>Modifier</button>
    <button>Supprimer</button>
  </footer>
</div>

<style>
  div {
    background-color: white;
  }

  h1 {
    font-size: medium;
  }

  button {
    border-radius: 10px;
  }

  .card {
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(255, 0, 0, 0.2);
    transition: 0.8s;
    width: 100%;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin-bottom: 2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 10px 10px 0 0;
  }
</style>
