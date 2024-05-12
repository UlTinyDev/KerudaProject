<script>
  export let type = "text";
  export let placeholder = "";
  export let cornerPlaceholder = "";
  export let icon = "";
</script>

<label class="w-full max-w-xs my-2">
  <div class="label">
    <span class="label-text">{cornerPlaceholder}</span>
  </div>

  <label class="input input-bordered flex items-center gap-2">
    <p class="material-symbols-rounded text-md">{icon}</p>
    <input {type} class="grow" {placeholder} />
  </label>
</label>
