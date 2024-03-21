// MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (this.state?.messages[this.state.messages.length - 1].widget === 'bookName') {
      this.actionProvider.findBook(message)
    } else if (message.includes('안녕') || message.includes('헬로') || message.includes('하이') || message.includes('hi')) {
      this.actionProvider.hello()
    } else {
      this.actionProvider.unKnown()
    }

  }
}

export default MessageParser;
