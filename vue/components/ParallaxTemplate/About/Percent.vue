<template>
	<div class="good">
		<p class="good_title">
			<FontAwesomeIcon :icon="icon" />
			{{ text }}
		</p>
		<div class="good_percent">
			<div class="good_percent_text">{{ percent }}</div>
			<div class="good_percent_fill" :style="`width: ${percent}`"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({ components: { FontAwesomeIcon } })
export default class Percent extends Vue {
	@Prop({ required: true, default: '0%' }) percent!: string;
	@Prop({ required: true, default: '' }) text!: string;
	@Prop() icon?: IconDefinition;
}
</script>

<style lang="sass">
.good
    width: 100%
    &_title
        letter-spacing: 1em
        margin: 1em 0
        svg
            margin-right: 1ch
    &_percent
        width: 100%
        background: #f1f1f1
        color: white
        position: relative
        &_fill
            height: calc(1rem * 1.8 + 2 * .2rem)
            background: #616161
        &_text
            top: 0
            position: absolute
            width: 100%
            padding: .2rem 0
            font-size: 1rem
            letter-spacing: 1.8
            color: white
            text-align: center
</style>
