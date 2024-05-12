<script>
  import "../app.css";
</script>

<html lang="en" data-theme="synthwave"></html>
<div class="sticky top-0">
  <nav class="sticky navbar bg-base-300">
    <div class="flex-1">
      <img src="keruda_logo.png" alt="Logo" class="h-12 ml-3 mt-2 mb-2" />
    </div>
    <div class="flex-none">
      <button class="mr-2 btn btn-square btn-ghost">
        <p class="material-symbols-rounded text-3xl">switch_access</p>
      </button>
    </div>
  </nav>
</div>
<slot />
