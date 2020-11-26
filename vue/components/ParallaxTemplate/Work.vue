<template>
	<div class="block" style="position: relative">
		<ModalWindow
			ref="modalWindow"
			classNameOpen="modal"
			:onClosed="onClosed"
			:onExternalChildren="onClosed"
		>
			<img :src="src" />
		</ModalWindow>
		<p class="block_title">MY WORK</p>
		<p class="block_subtitle">
			Here are some of my latest lorem work ipsum tipsum.
			<br />
			Click on the images to make them bigger
		</p>
		<div class="work">
			<img
				v-for="{ key, src, onClick } in imgs"
				v-bind:key="key"
				:src="src"
				@click="onClick"
			/>
		</div>
		<button class="loadmore">LOAD MORE</button>
	</div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';

import ModalWindow from '../ModalWindow.vue';

@Component({ components: { ModalWindow } })
export default class Work extends Vue {
	private src!: string;

	private data() {
		const imgs = Array.from({ length: 8 }, (_, key) => {
			const src = `images/ParallaxTemplate/p${key + 1}.jpg`;
			return {
				key,
				src,
				onClick: () => this.onOpen(src),
			};
		});

		return { imgs, src: this.src };
	}

	@Ref() modalWindow!: ModalWindow;

	private onClosed() {
		this.modalWindow?.changeVisible(false);
	}

	private onOpen(src: string) {
		this.src = src;
		this.modalWindow?.changeVisible(true);
	}
}
</script>

<style lang="sass">
$btnback: #f1f1f1
$btnbackhov: #ccc
$btncolor: black

.work
    display: grid
    grid-template-columns: repeat(4, auto)
    img
        width: 100%
        padding: .5rem
        cursor: pointer
        opacity: .6
        &:hover
            opacity: 1
.loadmore
    margin-top: 4em
    font-size: 1em
    background: $btnback
    &:hover
        background: $btnbackhov
.modal
    display: flex
    justify-content: center
    img
        align-self: center
        max-width: 75%

@media screen and ( max-width: 650px )
    .work
        grid-template-columns: repeat(2, auto)

@media screen and ( max-width: 450px )
    .work
        grid-template-columns: auto
</style>
