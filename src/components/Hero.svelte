<script>
  import Skills from './Skills.svelte'

  export let title = 'Title'
  export let subtitle = 'Subtitle'
  export let skills = null
</script>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{title}</h1>
      <h2 class="subtitle">{subtitle}</h2>
      {#if skills}
        <Skills skills={skills} />
      {/if}
    </div>
  </div>
</section>