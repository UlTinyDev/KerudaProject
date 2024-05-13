<script>
  // FIXME: For testing only
  let logged = false;
</script>

{#if !logged}
  <a href="/auth/register">
    <button class="btn btn-primary mx-1">Regisztrálás</button>
  </a>
  <a href="/auth/login">
    <button class="btn btn-secondary btn-outline mx-1">Bejelentkezés</button>
  </a>
{:else}
  <p><strong>zsigsza</strong></p>
  <div class="avatar">
    <div class="w-12 mx-2 rounded-xl">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://cdn.discordapp.com/avatars/627801505654636564/e7a25efcb05b3efbfd8868c9ed555149.webp?size=1024&format=webp&width=0&height=230"
        alt="profile image"
      />
    </div>
  </div>
{/if}
