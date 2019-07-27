const rules = {
  div: ['div'],
  button: ['div'],
  input: ['div'],
  p: ['div'],
  span: ['div', 'p']
}

export function checkElement (parent, child) {
  if (rules[child].includes(parent)) {
    return true
  }
  return false
}