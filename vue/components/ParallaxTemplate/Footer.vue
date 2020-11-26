<template>
	<div class="footer">
		<a class="top" href="#top">
			<FontAwesomeIcon :icon="faArrowUp" /> To the top
		</a>
		<div class="social">
			<FontAwesomeIcon :icon="faFacebookSquare" />
			<FontAwesomeIcon :icon="faInstagram" />
			<FontAwesomeIcon :icon="faSnapchat" />
			<FontAwesomeIcon :icon="faPinterest" />
			<FontAwesomeIcon :icon="faTwitter" />
			<FontAwesomeIcon :icon="faLinkedin" />
		</div>
		<p>
			Powered by{' '}
			<u>
				<a href="https://www.w3schools.com/w3css/default.asp"> w3.css</a>
			</u>
		</p>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import {
	faFacebookSquare,
	faInstagram,
	faLinkedin,
	faPinterest,
	faSnapchat,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
	components: { FontAwesomeIcon },
})
export default class Footer extends Vue {
	data() {
		return {
			faFacebookSquare,
			faInstagram,
			faLinkedin,
			faPinterest,
			faSnapchat,
			faTwitter,
			faArrowUp,
		};
	}
}
</script>

<style lang="sass">
$back: black
$color: white
$hover: green
$btnhov: #ccc

.footer
    background: $back
    color: $color
    width: 100%
    padding: 4rem 0
    display: flex
    flex-direction: column
    align-items: center
    justify-items: center
    opacity: .6
    &:hover
        opacity: 1
    .top
        font-size: 1em
        color: black
        text-decoration: none
        background: white
        margin-bottom: 1em
        padding: .5rem 1em
        &:hover
            background: $btnhov
        svg
            margin-right: 1ch
    .social
        margin: 1em 0
        svg
            margin: 0 2px
            height: 25px
            width: 25px
            opacity: 1
            &:hover
                opacity: .6
    p
        margin: .5em 0 1em
        font-size: 1em
        a
            color: inherit
            &:hover
                color: $hover
</style>
