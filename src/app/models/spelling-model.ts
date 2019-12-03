export default class Spelling {
  matches: Array<Match>
}

class Match {
  message: string;
  replacements: Array<{value: string}>
}
