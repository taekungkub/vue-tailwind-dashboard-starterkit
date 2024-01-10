import { ref } from "vue";

const isOpen = ref(false);
const isCollapse = ref(false);
const toggleCollapse = ref(false);

export default function useSidebar() {
  return {
    isOpen,
    isCollapse,
    toggleCollapse,
  };
}
