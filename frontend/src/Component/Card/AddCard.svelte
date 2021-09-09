<script>
  import { createEventDispatcher } from 'svelte'

  let radioChoice = 1
  const AUDIO = 1
  const TEXT = 2
  const IMAGE = 3

  let imagePreview

  let title
  let message

  const createTextPostIt = createEventDispatcher()

  function onFileSelected(e) {
    let image = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      console.log(e.target.result)
      imagePreview = e.target.result
    }
  }

  function handleApplyButton() {
    if (radioChoice === TEXT) {
      createTextPostIt('addTextPostIt', {
        title: title,
        data: message,
      })
    } else {
      console.log('COUCOU')
    }
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
      <div class="image_preview">
        {#if imagePreview}
          <img src={imagePreview} alt=" Preview" class="image-preview__image" />
        {/if}
      </div>
    </label>
    <input type="file" on:change={(e) => onFileSelected(e)} accept="image/*" />
  {/if}

  <div class="centerButton">
    <button on:click={handleApplyButton}> Apply </button>
    <button> Cancel </button>
  </div>
</div>

<style>
  .image_preview {
    max-width: 300px;
    height: 100px;
    border: 2px solid #dddddd;
    margin-bottom: 5px;
  }

  .image-preview__image {
    width: 100%;
    display: flex;
    height: 100%;
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
