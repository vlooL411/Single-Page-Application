<template>
	<div class="block">
		<p class="block_title">WHERE I WORK</p>
		<p class="block_subtitle">I'd love your feedback!</p>
		<div class="where">
			<img src="images/ParallaxTemplate/map.jpg" />
			<form>
				<div class="address">
					<p><FontAwesomeIcon :icon="faMapMarker" /> Chicago, US</p>
					<p><FontAwesomeIcon :icon="faPhone" /> Phone: +00 151515</p>
					<p><FontAwesomeIcon :icon="faEnvelope" /> Email: mail@mail.com</p>
				</div>
				<p class="infosend_title">
					Swing by for a cup of <FontAwesomeIcon :icon="faCoffee" />, or leave
					me a note:
				</p>
				<div class="infosend">
					<input placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input placeholder="Message" />
				</div>
				<button class="send">
					<FontAwesomeIcon :icon="faPaperPlane" /> SEND MESSAGE
				</button>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faCoffee,
	faEnvelope,
	faMapMarker,
	faPaperPlane,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({ components: { FontAwesomeIcon } })
export default class Where extends Vue {
	data() {
		return { faCoffee, faEnvelope, faMapMarker, faPaperPlane, faPhone };
	}
}
</script>

<style lang="sass">
$btncolor: white
$btnback: black
$inputborder: #ccc

.where
    width: 100%
    display: grid
    grid-template-columns: 1fr 3fr
    img
        justify-self: center
        max-width: 300px
        border-radius: 5%
        margin-bottom: 1em
    form
        margin-left: 1em
        .address
            font-size: 1.1em
            svg
                margin-right: .7ch
        .infosend
            display: grid
            grid-template-columns: repeat(2, auto)
            grid-template-rows: repeat(2, 1fr)
            &_title
                font-size: .95em
                margin: 1em 0
            input
                border: 1px solid $inputborder
                margin-bottom: 1em
                padding: .5rem
                &:nth-child(2n)
                    margin-left: 1em
                &:last-child
                    grid-area: 2 / 1 / 3 / 3
        .send
            float: right
            color: $btncolor
            background: $btnback

@media screen and ( max-width: 1065px )
    .where
        grid-template-columns: auto
        grid-template-rows: auto auto
        form
            .infosend
                grid-template-columns: auto
                grid-template-rows: auto
                input
                    display: table-cell
                    min-width: 0
                    &:nth-child(2n)
                        margin-left: 0
                    &:last-child
                        grid-area: 3
</style>
