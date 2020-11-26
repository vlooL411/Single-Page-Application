<template>
	<div class="info_block">
		<p class="info_block_title">{{ amount }}</p>
		<p class="info_block_subtitle">{{ text }}</p>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Info extends Vue {
	@Prop({ required: true }) amount!: string;
	@Prop({ required: true }) text!: string;
}
</script>

<style lang="sass">
$back: #616161
$color: white

.info_block
        display: flex
        flex-direction: column
        align-items: center
        margin: 2em 0
        &_title
            font-size: 1.5em
        &_subtitle
            font-size: 1em
</style>
