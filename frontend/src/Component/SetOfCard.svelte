<script>
  import ImageCard from './Card/ImageCard.svelte'
  import AudioCard from './Card/AudioCard.svelte'
  import TextCard from './Card/TextCard.svelte'
  import AddCard from './Card/AddCard.svelte'
  import { onMount } from 'svelte'
  let cards = []

  let isForm = false

  onMount(async () => {
    loadCards()
  })

  function loadCards() {
    cards = []
    console.log('logging')
    fetch('http://localhost:4000/api')
      .then((data) => data.json())
      .then((data) => {
        data.forEach((item) => {
          console.log(item['id'])
          cards.push({
            id: item['id'],
            type: 'text',
            title: item['title'],
            data: item['data'],
          })
          cards = cards
        })
      })
  }

  function handleDeletePostIt(event) {
    console.log('Supprimer')
    fetch(`http://localhost:4000/api/delete-text/${event.detail.id}`)
    loadCards()
  }

  function handleAddTextPostIt(event) {
    console.log('alors')
    let payload = {
      title: event.detail.title,
      data: event.detail.data,
    }
    fetch('http://localhost:4000/api/text-post', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
    isForm = false
    loadCards()
  }

  function handleModifyPostIt(event) {
    var payload = {
      id: event.detail.id,
      newTitle: event.detail.newTitle,
      newData: event.detail.newData,
    }

    fetch('http://localhost:4000/api/modify-postit', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'put',
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

    loadCards()
  }

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
      <TextCard
        title={card.title}
        data={card.data}
        id={card.id}
        on:deletePostIt={handleDeletePostIt}
        on:modifiyPostIt={handleModifyPostIt}
      />
    {:else if card.type == 'audio'}
      <AudioCard />
    {:else if card.type == 'image'}
      <ImageCard imageLink={card.link} />
    {/if}
  {/each}

  {#if isForm}
    <AddCard on:addTextPostIt={handleAddTextPostIt} />
  {:else}
    <div class="addButton">
      <button class="addButton" on:click|preventDefault={handleAddButton}>
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
