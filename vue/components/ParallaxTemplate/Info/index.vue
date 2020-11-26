<template>
	<div class="info">
		<Block amount="14+" text="Partners" />
		<Block amount="55+" text="Web Design" />
		<Block amount="89+" text="Happy Clients" />
		<Block amount="150+" text="Meetings" />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Block from './Block.vue';

@Component({ components: { Block } })
export default class Info extends Vue {}
</script>

<style lang="sass">
$back: #616161
$color: white

.info
    width: 100%
    background: $back
    color: $color
    display: flex
    justify-content: space-around
</style>
