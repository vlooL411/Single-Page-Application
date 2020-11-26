<template>
	<ParallaxTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutDefault from '../layouts/default.vue';
import ParallaxTemplate from '../components/ParallaxTemplate/index.vue';

@Component({ components: { LayoutDefault, ParallaxTemplate } })
export default class Index extends Vue {}
</script>
