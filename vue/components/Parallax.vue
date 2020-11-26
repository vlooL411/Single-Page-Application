<template>
	<div
		:id="id"
		:class="`parallax ${className}`"
		:style="`background-image: url(${src})`"
	>
		<slot />
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Parallax extends Vue {
	@Prop({ required: true, default: '' }) src!: string;
	@Prop() className?: string;
	@Prop() id?: string;
}
</script>

<style lang="sass">
.parallax
    width: 100%
    background-attachment: fixed
    background-position: center
    background-repeat: no-repeat
    background-size: cover
</style>
