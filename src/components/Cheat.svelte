<script>
  export let value

  function cheat() {
    let code = prompt('Code:')
    if (code.toLowerCase() === 'iddqd') {
      alert('Code accepted!')
      value = true
    } else {
      alert('Sorry.')
    }
  }
</script>

<style>
  #cheat {
    float: right;
    color: lightgrey;
    background:none;
    border:none;
    margin:0;
    padding:0;
  }
</style>

<button id="cheat" on:click={cheat}><i class="fas fa-fire"></i></button>