<script>
  import { createEventDispatcher } from 'svelte'
  export let title
  export let data
  export let id

  const dispatch = createEventDispatcher()

  function handleModifyButton() {
    console.log(id)
  }

  function handleCancelButton() {
    dispatch('deletePostIt', {
      id: id,
    })
  }
</script>

<div class="card">
  <h1>{title}</h1>
  <p>
    {data}
  </p>
  <footer>
    <button on:click|preventDefault={handleModifyButton}>Modifier</button>
    <button on:click={handleCancelButton}>Supprimer</button>
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
    outline-style: auto;
    outline-width: 1px;
    outline-color: black;
    background-color: #ffa;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(255, 0, 0, 0.2);
    transition: 0.8s;
    width: 100%;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin-bottom: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
