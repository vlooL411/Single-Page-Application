<template>
	<a :href="href" :class="`item ${className}`">
		<FontAwesomeIcon v-if="icon" :icon="icon" />
		<slot />
	</a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({ components: { FontAwesomeIcon } })
export default class Item extends Vue {
	@Prop({ default: '#' }) href?: string;
	@Prop() className?: string;
	@Prop() icon?: IconDefinition;
}
</script>

<style lang="sass"></style>
