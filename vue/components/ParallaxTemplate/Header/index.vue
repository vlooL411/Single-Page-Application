<template>
	<div :class="offsetMore">
		<Item>HOME</Item>
		<Item href="#about" :icon="faUser">ABOUT</Item>
		<Item href="#portfolio" :icon="faTh">PORTFOLIO</Item>
		<Item href="#contact" :icon="faEnvelope">CONTACT</Item>
		<span />
		<Item href="#top" :icon="faSearch" />
	</div>
</template>

<script lang="ts">
import { Vue, Component, Ref, PropSync } from 'nuxt-property-decorator';
import {
	faEnvelope,
	faSearch,
	faTh,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import Item from './Item.vue';

@Component({ components: { Item } })
export default class Header extends Vue {
	private isOffsetMore!: boolean;

	private get offsetMore() {
		return `header ${this.isOffsetMore ? 'header_scroll' : ''}`;
	}

	onScroll(isOffsetMore: boolean) {
		this.isOffsetMore = isOffsetMore;
	}

	private data() {
		return {
			isOffsetMore: this.isOffsetMore,
			faEnvelope,
			faSearch,
			faTh,
			faUser,
		};
	}
}
</script>

<style lang="sass">
$color: #777
$hovercolor: black
$hoverback: #ccc
$lastcolor: white
$lasthover: #f44346

$scroll: white

.header
    color: $color
    font-size: .9375em
    position: absolute
    z-index: 10
    width: 100%
    display: grid
    grid-template-columns: repeat(4, auto) 1fr auto
    &_scroll
        position: fixed
        background: $scroll
        box-shadow: 0 2px 5px 0 #00000029, 0 2px 10px 0 #0000001f
    .item
        color: inherit
        text-decoration: none
        padding: .5rem 1rem
        svg
            margin-right: .5ch
        &:hover
            color: $hovercolor
            background: $hoverback
        &:last-child
            svg
                margin: 0
            &:hover
                color: $lastcolor
                background: #f44346

@media screen and ( max-width: 450px )
    .header
        .item
            font-size: .7em
            padding: .25rem .5rem
</style>
