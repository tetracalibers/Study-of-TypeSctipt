import { promptInput } from './util/dialogue'

(async () => {
  const name = await promptInput('名前を入力してください')
  console.log(name)
  const age = await promptInput('年齢を入力してください')
  console.log(age)
  process.exit()
})()