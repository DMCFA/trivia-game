import { parseText } from "./gameFunctions";

describe("parse questions and answers from api", () => {
  it("parse question", () => {
    const text =
      "In the Rossini opera, what was the name of &#039;The Barber of Seville&#039;?";
    expect(parseText(text)).toBe(
      "In the Rossini opera, what was the name of 'The Barber of Seville'?"
    );
  });
});
