import { ref } from 'vue'
import tabIndexConverTitle from '../service/bookDetailInfo'

export const useTabChange = () => {
  const isActiveTab = ref<number>(1)
  const tapselect = ref<string>('introduce')

  const changeTabActive = (index: number) => {
    isActiveTab.value = index
    tapselect.value = tabIndexConverTitle[index].title

    // 반환값으로 ref들을 함께 반환합니다.
    return {
      isActiveTab,
      tapselect
    }
  }

  return {
    isActiveTab,
    tapselect,
    changeTabActive
  }
}
