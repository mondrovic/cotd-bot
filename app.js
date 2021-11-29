const prompt = require("prompt");
const { code1, code2, code3 } = require("./cotd-bot");

prompt.start();

async function main() {
  const { YYYY, MM, DD } = await prompt.get(["YYYY", "MM", "DD"]);

  console.log(`
  Daily Code 1: ${code1(YYYY, MM, DD)}
  Daily Code 2: ${code2(YYYY, MM, DD)}
  Daily Code 3: ${code3(YYYY, MM, DD)}
  `);
}

main();
