const prompt = require("prompt");
const { code1, code2, code3 } = require("./cotd");

prompt.start();

async function main() {
  const { YY, MM, DD } = await prompt.get(["YY", "MM", "DD"]);

  console.log(`
  Daily Code 1: ${code1(YY, MM, DD)}
  Daily Code 2: ${code2(YY, MM, DD)}
  Daily Code 3: ${code3(YY, MM, DD)}
  `);
}

main();
