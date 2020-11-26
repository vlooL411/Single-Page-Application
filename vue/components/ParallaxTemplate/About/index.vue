<template>
	<div class="block" id="about">
		<p class="block_title">ABOUT ME</p>
		<p class="block_subtitle">I love photography</p>
		<p>
			We have created a fictional "personal" website/blog, and our fictional
			character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur
			adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
			qui officia deserunt mollit anim id est laborum consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<div class="about_double">
			<div class="myname about_double_split">
				<p>
					<FontAwesomeIcon :icon="faUser" />
					My Name
				</p>
				<img src="images/ParallaxTemplate/avatar_hat.jpg" />
			</div>
			<p class="about_double_split">
				Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed
				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
				in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat.
			</p>
		</div>
		<p class="block_subtitle">Im relly good at:</p>
		<Percent percent="90%" text="Photography" :icon="faCamera" />
		<Percent percent="85%" text="Web Design" :icon="faLaptop" />
		<Percent percent="75%" text="Photoshop" :icon="faImage" />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Percent from './Percent.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faUser,
	faCamera,
	faLaptop,
	faImage,
} from '@fortawesome/free-solid-svg-icons';

@Component({ components: { Percent, FontAwesomeIcon } })
export default class About extends Vue {
	data() {
		return { faUser, faCamera, faLaptop, faImage };
	}
}
</script>

<style lang="sass">
.about
    &_double
        margin-top: .5em
        display: grid
        grid-template-columns: 50% 50%
        &_split
            margin: .5em 1em
        .myname
            height: 100%
            display: flex
            flex-direction: column
            p
                margin: 1em
                font-weight: bolder
                align-self: center
                svg
                    height: 15px
                    margin-right: 1ch
            img
                width: 100%
                margin: auto
                opacity: .6
                &:hover
                    opacity: 1

@media screen and ( max-width: 1100px )
    .about
        &_double
            grid-template-columns: auto
</style>
