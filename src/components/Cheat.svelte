<script>
  export let value

  function cheat() {
    console.log(value)
    let code = prompt('Code:')
    if (code.toLowerCase() === 'iddqd') {
      alert('Code accepted!')
      value = 6
    } else if (code.toLowerCase() === 'idkfa') {
      if (value < 5) {
        alert('Code accepted!')
        value = 5
      } else {
        alert('Better code already applied.')
      }
    } else {
      alert('Sorry.')
      value = 4
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