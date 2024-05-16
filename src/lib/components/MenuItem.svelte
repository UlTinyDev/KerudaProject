<script>
	export let title = 'asd';
	export let icon = 'person';
	export let active = false;
	export let href = '/';
</script>

<li>
	<a class={active ? 'active' : ''} {href}
		><p class="material-symbols-rounded">{icon}</p>
		<strong> {title}</strong></a
	>
</li>
