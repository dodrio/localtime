# localtime
Generate localtime string with format that you defined.

## Installation
```sh
npm i -S localtime
```

## Usage
```js
const localtime = require('localtime');

console.log(localtime());
console.log(localtime(undefined, 'YYYY-MM-DDThh-mm-ss'));
console.log(localtime('', 'YYYY-MM-DDThh-mm-ss'));
console.log(localtime('2016-11-08T01:57:16.642Z', 'YYYY/MM/DD hh:mm:ss'));
```

## More details
The format is mard up with:

* `YYYY`
* `MM`
* `DD`
* `hh`
* `mm`
* `ss`

You needn't use them all, like:

* `MM/DD hh:mm`
* `hh:mm YYYY-MM-DD`
* ...

All above format is valid.

## License
MIT
