import { promptInput, printLine } from '../util/dialogue'

export class HitAndBlow {
  private readonly answerSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  private answer: Array<string> = []
  private tryCount = 0
  
  setting() {
    const answerLength = 3
    
    while (this.answer.length < answerLength) {
      const randNum = Math.floor(Math.random() * this.answer.length)
      const selectedItem = this.answerSource[randNum]
      if (!this.answer.includes(selectedItem)) {
        this.answer.push(selectedItem)
      }
    }
  }
  
  async play() {
    const inputArr
      = (await promptInput('「,」区切りで3つの数字を入力してください')).split(',')
    const result = this.check(inputArr)
    
    if (result.hit !== this.answer.length) {
      printLine(`---\nHit: ${result.hit}\nBlow: ${result.blow}\n---`)
      this.tryCount++
      await this.play()
    } else {
      this.tryCount++
    }
  }
  
  end() {
    printLine(`正解です！\n試行回数：${this.tryCount}回`)
    process.exit()
  }
  
  private check(input: Array<string>) {
    let hitCount = 0
    let blowCount = 0
    
    input.forEach((val, index) => {
      if (val === this.answer[index]) hitCount++
      else if (this.answer.includes(val)) blowCount++
    })
    
    return {
      hit: hitCount,
      blow: blowCount
    }
  }
}