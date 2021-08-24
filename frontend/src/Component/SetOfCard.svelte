<script>
  import ImageCard from './Card/ImageCard.svelte'
  import AudioCard from './Card/AudioCard.svelte'
  import TextCard from './Card/TextCard.svelte'
  import AddCard from './Card/AddCard.svelte'
  import { textPostitStore } from '../store'
  let cards = []

  let isForm = false

  let letsTry

  textPostitStore.subscribe((value) => {
    let postit = value
    console.log(postit)
    if (
      !(postit.title == 'Null') &&
      !(postit.title == undefined) &&
      !(postit.data == undefined)
    ) {
      cards.push({
        type: 'text',
        title: postit.title,
        data: postit.data,
      })
      cards = cards
    }
    isForm = false
  })

  async function handleAddButton() {
    isForm = true
  }
  /*
  function handleCancelButton() {
    isForm = false
  }
  */
</script>

<div class="container">
  {#each cards as card}
    {#if card.type == 'text'}
      <TextCard title={card.title} data={card.data} />
    {:else if card.type == 'audio'}
      <AudioCard />
    {:else if card.type == 'image'}
      <ImageCard imageLink={card.link} />
    {/if}
  {/each}

  {#if isForm}
    <AddCard />
  {:else}
    <div class="addButton">
      <button class="addButton" on:click={handleAddButton}>
        <span id="textButton">+</span>
      </button>
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    flex-wrap: wrap;
  }

  @media (min-width: 640px) {
    .container {
      max-width: none;
    }
  }

  div.addButton {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  button.addButton {
    position: absolute;
    color: brown;
    text-align: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: large;
  }
  #textButton {
    display: block;
    text-align: center;
    justify-content: center;
  }
</style>
