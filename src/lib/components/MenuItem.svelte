<script>
	export let title = 'asd';
	export let icon = 'person';
	export let active = false;
	export let href = '/';
	export let styleClass = '';
	export let indicators = '0';
</script>

<li class={styleClass}>
	<a class={active ? 'active' : ''} {href}>
		<p class="material-symbols-rounded">{icon}</p>

		<strong> {title}</strong>
		{#if parseInt(indicators) > 0}
			<span class="indicator-item indicator-bottom indicator-center badge badge-secondary"
				>{indicators}+</span
			>
		{/if}
	</a>
</li>
