# Campus Café cart

A small ordering page for the campus café. Pick items from the menu, change quantities with the
+ and - buttons, and the order total updates as you go.

## Run it

Open `index.html` in a browser. There is nothing to install.

## What we fixed

- The total left out the last item in the order (an off-by-one in the loop in `cartTotal`).
- The - button could take a quantity to 0 or below; now stepping down from 1 removes the item.

## Checks

`VERIFY.md` lists the manual checks we run before each change, and what we saw.
`REFLECTION.md` is what the team learned.

## Team

Bing, Bong, Ding and Dong.
