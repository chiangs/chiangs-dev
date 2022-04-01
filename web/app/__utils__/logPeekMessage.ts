const logPeekMessage = () => {
    const logColor01 = `#2ECC91`;
    const logColor02 = `#F800DF`;
    const keyboard =
        `\n,---,---,---,---,---,---,---,---,---,---,---,---,---,-------,` +
        `\n|   | P | E | E | K | I | N | G | ? |   |   |   |   | <--   |` +
        `\n|---'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-----|` +
        `\n|     |   |   |   |   |   |   |   |   |   |   |   |   |     |` +
        `\n|-----',--',--',--',--',--',--',--',--',--',--',--',--'-----|` +
        `\n|      | V | I | E | W |   | M | Y |   | G | I | T |        |` +
        `\n|------'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'--------|` +
        `\n|        |   |   |   |   |   |   |   |   |   |   |          |` +
        `\n|-----,--'--,----',--'---'---'---'---'---',--'--,'----,-----|` +
        `\n|     |     |     |   github.com/CHIANGS  |     |     |     |` +
        `\n'-----'-----'-----'-----------------------'-----'-----'-----'`;
    const message =
        `(👉ﾟヮﾟ)👉   👈(ﾟヮﾟ👈)` +
        `\n` +
        `\n🍻 This site repo is public so you can clone it.` +
        `\n🔎 Have a look under the hood!` +
        `\n🤓 Check it out when you're done browsing!` +
        `\n` +
        `\n🏃‍♂️🏃‍♀️🏃 GoGoGo...`;

    console.log(`%c${keyboard}`, `color: ${logColor01}`);
    console.log(`%c${message}`, `color: ${logColor02}; font-size: 16px`);
};

export default logPeekMessage;
