<script>
  export let skills = []

  const getTabColor = skill => {
    switch (skill) {
      case `Input`:
        return `is-info`;
        break;
      case `Output`:
        return `is-link`;
        break;
      case `Variables`:
        return `is-primary`;
        break;
      case `Arrays`:
        return `is-dark`;
        break;
      case `Objects`:
        return `is-light`;
        break;
      case `If Statements`:
        return `is-success`;
        break;
      case `Loops`:
        return `is-warning`;
        break;
      case `Components`:
        return `is-danger`;
        break;
      default:
        return;
    }
  };
  </script>

  <style>
    .tag {
      margin-right: 5px;
    }
  </style>

  <span class="">Skills:</span>
  {#each skills as skill}
    <span class="tag {getTabColor(skill)}">{skill}</span>
  {/each}