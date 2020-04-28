<script>
  export let value = 0
  export let max = 100
</script>

<progress class="progress" {value} {max}>{value / max}%</progress>
