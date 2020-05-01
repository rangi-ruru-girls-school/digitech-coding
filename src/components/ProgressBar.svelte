<script>
  export let value = 0
  export let max = 100
  export let prev = null
  export let next = null
</script>

<progress
  class="progress"
  value={value}
  max={max}>
  {value / max}%
</progress>
<div class="level is-mobile">
  <div class="level-left">
    <div class="level-item">
      {#if value > 1}
        <a class="button" href="{prev}">
          <i class="fas fa-caret-left fa-2x" />
          &nbsp; Prev
        </a>
      {:else}
        <a class="button" disabled>
          <i class="fas fa-caret-left fa-2x" />
          &nbsp; Prev
        </a>
      {/if}
    </div>
  </div>
  <div class="level-right">
    <div class="level-item">
      {#if value < max}
        <a class="button" href="{next}">
          Next &nbsp;
          <i class="fas fa-caret-right fa-2x" />
        </a>
      {:else}
        <a class="button" disabled>
          Next &nbsp;
          <i class="fas fa-caret-right fa-2x" />
        </a>
      {/if}
    </div>
  </div>
</div>
