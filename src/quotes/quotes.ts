interface Quotes {
  [key: number]: Quote;
}

interface Quote {
  quote: string;
  author: string;
  link?: string;
}

export const quotes: Quotes = {
  1: {
    quote:
      " Thunder is good, thunder is impressive; but it is lightning that does the work",
    author: "-Mark Twain-",
  },
  2: {
    quote:
      "No one is useless in this world who lightens the burdens of another",
    author: "-Charles Dickens-",
  },
  3: {
    quote:
      "It matters not how strait the gate, how charged with punishments the scrolls, I am the master of my fate, I am the captain of my soul",
    author: "-William Ernest Henley-",
  },
  4: {
    quote: "Even the darkest night will end and the sun will rise",
    author: "-Victor Hugo-",
  },
  5: {
    quote: "There is a crack in everything. That's how the light gets in",
    author: "-Leonard Cohen-",
  },
};
