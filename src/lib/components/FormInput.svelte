<script>
    export let type = 'text'
    export let placeholder = ''
    export let cornerPlaceholder = ''
</script>

<label class="w-full max-w-xs my-2">
    <div class="label">
      <span class="label-text">{cornerPlaceholder}</span>
    </div>
    
    <label class="input input-bordered flex items-center gap-2">
        Name
        <input type="text" class="grow" placeholder="Daisy" />
    </label>
</label>
