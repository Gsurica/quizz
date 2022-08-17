export function shuffle (el: any[]): any[] {
  return el
        .map(value => ({ value, random: Math.random() }))
        .sort((el1, el2) => el1.random - el2.random)
        .map(value => value.value)
}
