import { ref, computed, onMounted } from 'vue';

export default function useTheme() {
	const dark = ref(false);

	onMounted(() => {
		if (dark.value) {
			let body = document.body;
			body.setAttribute('class', 'dark');
		}
	});

	function onSwitchTheme() {
		let body = document.body;
		dark.value = !dark.value;
		body.setAttribute('class', dark.value === true ? 'dark' : 'light');
	}

	const currentTheme = computed(() => {
		if (dark.value) return 'Dark';
		else if (!dark.value) return 'Light';
	});

	return {
		onSwitchTheme,
		currentTheme,
	};
}
