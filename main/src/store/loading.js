import { ref } from 'vue'

export let loadingStatus = ref(true)

export const changeLoading = (status) => (loadingStatus.value = status)
