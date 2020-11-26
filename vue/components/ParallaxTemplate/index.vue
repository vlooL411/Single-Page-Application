<template>
	<div class="index parallaxtemplate" @scroll="updateScroll">
		<Header ref="scrollRef" />
		<Parallax
			id="top"
			:src="relativeImg('parallax1.jpg')"
			className="parallax_block parallax_block_first"
		>
			<div class="logo">MY <span>WEBSITE </span>LOGO</div>
		</Parallax>
		<About />
		<Info />
		<Parallax
			id="portfolio"
			:src="relativeImg('parallax2.jpg')"
			className="parallax_block parallax_block_second"
		>
			<div>PORTFOLIO</div>
		</Parallax>
		<Work />
		<Parallax
			id="contact"
			:src="relativeImg('parallax3.jpg')"
			className="parallax_block parallax_block_second"
		>
			<div>CONTACT</div>
		</Parallax>
		<Where />
		<Footer />
	</div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';

import Parallax from '../Parallax.vue';
import About from './About/index.vue';
import Footer from './Footer.vue';
import Header from './Header/index.vue';
import Info from './Info/index.vue';
import Where from './Where.vue';
import Work from './Work.vue';

@Component({
	components: {
		Header,
		Parallax,
		About,
		Info,
		Work,
		Where,
		Footer,
	},
})
export default class ParallaxTemplate extends Vue {
	@Ref() scrollRef!: Header;

	updateScroll(e: any) {
		this.scrollRef.onScroll(100 < e.target.scrollTop);
	}

	relativeImg = (src: string): string => `images/ParallaxTemplate/${src}`;
}
</script>

<style lang="sass">
@import block

$logo: white
$logoback: black

.parallaxtemplate
    font-family: 'Lato', sans-serif
    line-height: 1.8
    overflow-y: auto
    svg
        width: 1em
        height: 1em
    .parallax_block
        display: flex
        font-size: 1.5em
        opacity: 0.75
        justify-content: center
        letter-spacing: .416em
        align-items: center
        min-height: 400px
        &_first
            height: 100%
            .logo
                color: $logo
                background: $logoback
                padding: .5em 1em
        &_second
            color: white
            font-size: 2em

@media screen and ( max-width: 1190px  )
    .parallaxtemplate
        .parallax_block
            &_first
                span
                    display: none
</style>
