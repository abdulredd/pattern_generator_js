

Run test suite by running `npm test`

To un-skip a test, remove the `.skip` that follows `describe`

To run a single test in isolation, run `mocha --grep <the string you want to use>` and that entire block will run. (ex. `mocha --grep ".verify"`, `mocha --grep "Part 1"`, etc)
