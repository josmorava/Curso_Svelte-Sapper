<script>
  //forma de traer elementos al componente padre
  export let post;

  import readingTime from '../utils/readingTime';
  import randomEmoji from '../utils/randomEmoji';
  import formatIsoTime from '../utils/formatIsoTime';
</script>

<style>
  .Post-item{
    color: #191a22;
    position: relative;
  }

  .Post-content{
    font-size: 16px;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    gap: 5px;
    grid-template-columns: 1fr;
  }
  .Post-title{
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  .Post-title p{
    color: #333;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #22215b;
  }
  .Post-desc p {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    margin:0 auto;
    /*Propiedad que recorta las palabras en el ancho donde se encuentren*/
    word-break: break-word;
  }

  .dot{
    font-weight: 700;
  }
</style>

<div class="Post-item">
  <div class="Post-content">
    <div class="Post-head">
      <div class="Post-title">
        <h2>
          <a rel="prefetch" href="blog/{post.slug}">
            {randomEmoji()}
            {post.title}
          </a>
        </h2>
        <p>
          <!-- svelte-ignore component-name-lowercase -->
          <time datetime={post.createdAt}>
            📅{formatIsoTime(post.createdAt)}
          </time>
          <span class="dot">.</span>
          <!--trayendo funcion que me mustra el tiempo de lectura del post-->
          <span>
            {readingTime(post.html)}
          </span>
        </p>
      </div>
      <div class="Post-tags" />
      <div class="Post-desc">
        <p>
          {post.desc}
        </p>
      </div>
    </div>
  </div>
</div>