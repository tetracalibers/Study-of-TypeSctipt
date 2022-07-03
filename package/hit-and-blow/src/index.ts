import { HitAndBlow } from './game/HitAndBlow'

;(async () => {
  const hitAndBlow = new HitAndBlow()
  hitAndBlow.setting()
  await hitAndBlow.play()
  hitAndBlow.end()
})()