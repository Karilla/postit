<script>
  import { createEventDispatcher } from 'svelte'
  export let title
  export let data
  export let id

  let savedText
  let savedTitle

  let isModifying = false

  const dispatch = createEventDispatcher()

  function handleModifyButton() {
    savedText = data
    savedTitle = title
    isModifying = true
  }

  function handleCancelButton() {
    dispatch('deletePostIt', {
      id: id,
    })
  }

  function handleApplyModification() {
    dispatch('modifiyPostIt', {
      id: id,
      newTitle: title,
      newData: data,
    })
  }

  function handleCancelModification() {
    data = savedText
    title = savedTitle
    isModifying = false
  }
</script>

<div class="card">
  <div class="title-card">
    {#if isModifying}
      <input type="text" bind:value={title} />
    {:else}
      <h1>
        {title}
      </h1>
    {/if}
  </div>

  {#if isModifying}
    <textarea
      style="resize: none;"
      name=""
      id=""
      cols="30"
      rows="5"
      bind:value={data}
    />
  {:else}
    <p>
      {data}
    </p>
  {/if}
  <footer>
    {#if isModifying}
      <button on:click={handleCancelModification}>Annuler</button>
    {:else}
      <button on:click|preventDefault={handleModifyButton}>Modifier</button>
    {/if}

    {#if isModifying}
      <button on:click={handleApplyModification}>Appliquer</button>
    {:else}
      <button on:click={handleCancelButton}>Supprimer</button>
    {/if}
  </footer>
</div>

<style>
  h1 {
    font-size: medium;
  }

  button {
    border-radius: 10px;
  }

  .title-card {
    margin-top: 7px;
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
