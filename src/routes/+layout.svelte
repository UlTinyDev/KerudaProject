<script lang="ts">
	import MenuItem from '$lib/components/MenuItem.svelte';
	import SquareIconButton from '$lib/components/SquareIconButton.svelte';
	import '../app.css';

	export let data: any;
</script>

<html lang="en" data-theme="synthwave"></html>

<!-- <header class="text-base-content sticky w-full h-full top-0 z-30"></header> -->
<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content text-base-content sticky w-full h-full top-0">
		<!-- Navbar -->
		<nav class="w-full navbar bg-base-300">
			<div class="flex-1">
				<a href="/">
					<button class="btn btn-ghost">
						<img src="/keruda_logo.png" alt="Logo" class="h-8" />
					</button>
				</a>
			</div>
			<div class="hidden lg:flex lg:flex-row">
				<!-- Navbar end -->
				{#if !data.user}
					<a href="/auth/register">
						<button class="btn btn-primary mx-1">Regisztrálás</button>
					</a>
					<a href="/auth/login">
						<button class="btn btn-secondary btn-outline mx-1">Bejelentkezés</button>
					</a>
				{:else}
					<div>
						<SquareIconButton icon="notifications" indicators="1" />
						<a href="/home">
							<SquareIconButton icon="home" indicators="0" />
						</a>
					</div>
					<div class="divider divider-horizontal mx-0"></div>

					<a href="/account">
						<button class="btn btn-ghost mx-2">
							<p><strong>{data.user?.name}</strong></p>
							<div class="avatar mx-1">
								<div class="w-10 rounded">
									<!-- svelte-ignore a11y-img-redundant-alt -->
									<img
										src="https://cdn.discordapp.com/avatars/627801505654636564/e7a25efcb05b3efbfd8868c9ed555149.webp?size=1024&format=webp&width=0&height=256"
										alt="User profile picture"
									/>
								</div>
							</div>
						</button>
					</a>

					<form action="/auth/logout" method="POST">
						<SquareIconButton icon="logout" styleClass="btn-outline btn-primary"></SquareIconButton>
					</form>
				{/if}
			</div>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<p class="material-symbols-rounded">menu</p>
				</label>
			</div>
		</nav>
		<!-- Page content here -->
		<main class="h-remaining overflow-y-auto">
			<slot />
		</main>
	</div>
	<div class="drawer-side justify-between">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200">
			{#if !data.user}
				<MenuItem icon="person_add" title="Regisztrálás" href="/auth/register" />
				<MenuItem icon="login" title="Bejelentkezés" href="/auth/login" />
			{:else}
				<MenuItem icon="notifications" title="Értesítések" indicators="1" />
				<MenuItem icon="home" title="Középpon" href="/home" />

				<div class="divider my-0"></div>

				<li>
					<a href="/account">
						<div class="avatar">
							<div class="w-10 rounded">
								<img
									src="https://cdn.discordapp.com/avatars/627801505654636564/e7a25efcb05b3efbfd8868c9ed555149.webp?size=1024&format=webp&width=0&height=256"
									alt="User profile picture"
								/>
							</div>
						</div>
						<strong>{data.user?.name}</strong></a
					>
				</li>
				<form action="/auth/logout" method="POST">
					<button type="submit" class="w-full h-full z-10">
						<li class="text-primary">
							<strong
								><p class="material-symbols-rounded">logout</p>
								Logout</strong
							>
						</li>
					</button>
				</form>
			{/if}
		</ul>
	</div>
</div>
