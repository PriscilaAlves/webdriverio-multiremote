# webdriverio-multiremote

This package is meant to test how `multiremote` feature from webdriverio works.

## How to run?

1. Install node dependencies by running:
```bash
npm install
```

2. Install `chromedriver` by using brew:
```bash
brew cask install chromedriver
```

3. Create an `.env` file with the ENV vars defined in `.env.example`.
> Note: Make sure you don't use two accounts from the same environment.


4. Open **two** terminal windows and run `chromedriver` on each one with different ports. These ports need to match the ones set on `wdio.conf.js` file when defining the browser's capabilities.

```bash
# Terminal 1
chromedriver --port=4444

# Terminal 2
chromedriver --port=4445
```

5. Open a third terminal window to run the tests:

```bash
npx wdio wdio.conf.js
```
