const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

const emptyMessage = new Message();
const emptyPhotoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyPhotoMessage);

class MessagesService {
  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { enconding: 'utf-8' }, (err, data) => {
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray.map(item =>
          new Message(item.text, item.created));
        resolvePromise(dataObj);
      }
    });
  }

  get messages() {
    return this.messagesPromise;
  }
}

const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
  for (let x = 0; x < messages.length; x += 1) {
    console.log(String(messages[x]));
  }
}).catch((err) => {
  console.log(err);
});
