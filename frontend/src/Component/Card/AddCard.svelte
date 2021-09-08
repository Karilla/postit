<script>
  import { createEventDispatcher } from 'svelte'

  let radioChoice = 1
  const AUDIO = 1
  const TEXT = 2
  const IMAGE = 3

  let title
  let message

  const createTextPostIt = createEventDispatcher()

  function handleApplyButton() {
    createTextPostIt('addTextPostIt', {
      title: title,
      data: message,
    })
  }
</script>

<div class="card">
  <label class="radioLabel">
    <input type="radio" bind:group={radioChoice} name="scoops" value={1} />
    Audio
  </label>
  <label class="radioLabel">
    <input type="radio" bind:group={radioChoice} name="scoops" value={2} />
    Text
  </label>
  <label class="radioLabel">
    <input type="radio" bind:group={radioChoice} name="scoops" value={3} />
    Image
  </label>

  {#if radioChoice === AUDIO}
    <h1 class="formTitle">Audio Post it</h1>
  {:else if radioChoice === TEXT}
    <h1 class="formTitle">Text Post it</h1>
    <label class="textTitle">
      Title
      <input type="text" bind:value={title} placeholder="Post it title" />
    </label>
    <textarea
      style="resize: none;"
      name=""
      id=""
      cols="30"
      rows="5"
      bind:value={message}
    />
  {:else if radioChoice === IMAGE}
    <h1 class="formTitle">Image Post it</h1>
    <label class="textTitle">
      Title
      <input type="text" placeholder="Post it title" />
    </label>
    <input type="file" accept="image/*" />
  {/if}

  <div class="centerButton">
    <button on:click={handleApplyButton}> Apply </button>
    <button> Cancel </button>
  </div>
</div>

<style>
  img {
    max-width: 100px;
    max-height: 100px;
  }

  .centerButton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .formTitle {
    margin-top: 0;
    margin-bottom: 2px;
  }

  .radioLabel {
    display: inline;
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
    width: 300px;
    height: 300px;
    margin-bottom: 2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
