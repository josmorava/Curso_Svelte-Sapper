<style>
  .Footer{
    background-color: rgba(28, 41, 56, 0.8);
    color: white;
    padding: 1.5em 0;
    margin: 2em 0 0 0;
    font-size: 13px;
    font-weight: 300;
  }
  .Footer-container{
    /*forma de agregar un contenido con un ancho exacto centrado horizontal y verticalmente con una grilla*/
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }
  .Footer-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Footer-svelte{
    display: flex;
    align-items: center;
  }
  .Footer-svelte img {
    margin: 0 0 0 0.5em;
   }
</style>

<footer class="Footer">
  <div class="Footer-container">
    <div class="Footer-content">
      <div class="Footer-copy">
        Hecho con amor en platzi 2021.
      </div>
      <div class="Footer-svelte">
        Este proyecto ha sido realizado con Svelte
        <img src="svelte.png" alt="Svelte logo">
      </div>
    </div>
  </div>
</footer>