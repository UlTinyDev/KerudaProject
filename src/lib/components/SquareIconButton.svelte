<script>
	export let icon = '';
	export let indicators = '';
</script>

<div class="indicator">
	{#if parseInt(indicators) > 0}
		<span class="indicator-item indicator-bottom indicator-center badge badge-secondary"
			>{indicators}+</span
		>
	{/if}

	<buttom class="btn btn-ghost btn-square">
		<p class="material-symbols-rounded">{icon}</p>
	</buttom>
</div>
