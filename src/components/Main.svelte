<script>
	import Slidebar from './Slidebar.svelte';

</script>

<style>
  .Main-container{
    display: grid;
    /**caja que permite ajustar el contenido*/
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }
  .Main-content{
    margin: 2em 0 0 0 ;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 60px;
    justify-content: space-between;
  }
</style>


<main class="Main">
  <div class="Main-container">
    <div class="Main-content">
      <slot />
      <Slidebar />
    </div>
  </div>
</main>