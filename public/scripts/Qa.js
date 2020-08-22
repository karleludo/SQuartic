class Qa {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  toString() {
    return JSON.stringify(this);
  }
}
