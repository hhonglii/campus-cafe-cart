# Manual checks

Run these in a browser after each change to `cart.js`.

| Check | Steps | Expected | Result |
| --- | --- | --- | --- |
| One item | Add a Latte | Total $4.50 | Pass |
| Last item counted | Add a Latte, a Bagel and an Iced lemon tea | Total $10.00 (it was $7.50 before the fix) | Pass |
| Quantities | Add a Bagel three times | Bagel x 3, total $9.00 | Pass |
| Stepper up | Add a Muffin, press + | Blueberry muffin x 2, total $7.00 | Pass |
| Stepper down | Add a Muffin, press - | Item removed, total $0.00 | Pass after the stepper fix |
| Empty order | Load the page | "Your order is empty" message | Pass |
