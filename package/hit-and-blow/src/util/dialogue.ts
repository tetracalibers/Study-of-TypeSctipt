export const printLine = (text: string, breakLine: boolean = true): void => {
  process.stdout.write(`${text}${breakLine ? '\n' : ''}`);
}

export const promptInput = async (text: string): Promise<string> => {
  printLine(`\n${text}\n`, false)
  const input: string 
    = await new Promise((resolve) => {
      process.stdin.once('data', (data: string) => {
        return resolve(data.toString())
      })
    })
  return input.trim()
}