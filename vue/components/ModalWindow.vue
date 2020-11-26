<template>
	<div :class="visibleClass" @click="onExternalChildren">
		<slot v-if="isVisible" />
		<slot name="closed" v-if="isVisible">
			<button @click="onClosed" class="modalwindow_closed">X</button>
		</slot>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ModalWindow extends Vue {
	@Prop({ default: '' }) classNameOpen?: string;
	@Prop({ default: '' }) classNameClosed?: string;

	@Prop({ default: () => {} }) onClosed?: () => void;
	@Prop({ default: () => {} }) onExternalChildren?: () => void;

	private isVisible?: boolean;

	changeVisible(isVisible: boolean) {
		this.isVisible = isVisible;
	}

	private get visibleClass() {
		return this.isVisible
			? `${this.classNameOpen} modalwindow`
			: this.classNameClosed ?? 'modalwindow_close';
	}

	private data() {
		return { isVisible: this.isVisible };
	}
}
</script>

<style lang="sass">
.modalwindow
    z-index: 9999
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    background-color: black
    &_close
        display: none
    &_closed
        position: absolute
        left: 95%

        padding: 0
        color: white
        font-size: 3em
        float: right
</style>
