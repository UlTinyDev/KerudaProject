<script lang="ts">
	import SquareIconButton from '$lib/components/SquareIconButton.svelte';
	import '../app.css';

	export let data: any;
</script>

<html lang="en" data-theme="synthwave"></html>

<header class="text-base-content sticky w-full h-full top-0 z-30">
	<nav class="navbar bg-base-200 h-header">
		<div class="navbar-start">
			<label
				for="accountDrawer"
				class="text-2xl btn btn-ghost btn-square lg:hidden material-symbols-rounded">menu</label
			>
			<a href="/">
				<button class="btn btn-ghost">
					<img src="/keruda_logo.png" alt="Logo" class="h-8" />
				</button>
			</a>
		</div>
		<!-- <div class="navbar-center"></div> -->
		<div class="navbar-end">
			{#if !data.user}
				<a href="/auth/register">
					<button class="btn btn-primary mx-1">Regisztrálás</button>
				</a>
				<a href="/auth/login">
					<button class="btn btn-secondary btn-outline mx-1">Bejelentkezés</button>
				</a>
			{:else}
				<div class="mx-4">
					<SquareIconButton icon="notifications" indicators="1" />
					<a href="/home">
						<SquareIconButton icon="home" indicators="0" />
					</a>
				</div>

				<p><strong>{data.user?.name}</strong></p>

				<a href="/account">
					<button class="btn px-0">
						<div class="avatar">
							<div class="w-12 mx-2 rounded-xl">
								<!-- svelte-ignore a11y-img-redundant-alt -->
								<img
									src="https://cdn.discordapp.com/avatars/627801505654636564/e7a25efcb05b3efbfd8868c9ed555149.webp?size=1024&format=webp&width=0&height=230"
									alt="profile image"
								/>
							</div>
						</div></button
					>
				</a>
				<form action="/auth/logout" method="POST">
					<SquareIconButton icon="logout" styleClass="btn-outline btn-primary"></SquareIconButton>
				</form>
			{/if}
		</div>
	</nav>
</header>

<main class="h-remaining overflow-y-auto">
	<slot />
</main>
