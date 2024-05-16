<script>
	export let icon = '';
	export let indicators = '';
	export let styleClass = 'btn-ghost';
</script>

<div class="indicator">
	{#if parseInt(indicators) > 0}
		<span class="indicator-item indicator-bottom indicator-center badge badge-secondary"
			>{indicators}+</span
		>
	{/if}

	<button class="btn {styleClass} btn-square">
		<p class="material-symbols-rounded">{icon}</p>
	</button>
</div>
