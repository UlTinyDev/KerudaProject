<script>
  import Center from "$lib/components/NavbarSelection/Center.svelte";
  import End from "$lib/components/NavbarSelection/End.svelte";
  import Start from "$lib/components/NavbarSelection/Start.svelte";
  import "../app.css";
</script>

<html lang="en" data-theme="synthwave"></html>

<div class="text-base-content sticky top-0 z-30">
  <nav class="navbar bg-base-200">
    <div class="navbar-start">
      <Start></Start>
    </div>
    <div class="navbar-center"><Center></Center></div>
    <div class="navbar-end"><End></End></div>
  </nav>
</div>

<slot />
