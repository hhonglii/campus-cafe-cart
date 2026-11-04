# Reflection

We found the missing item by tracing the loop, not by guessing. Logging `i` on each pass showed the
loop stopped one index early, which pointed straight at `i < items.length - 1`.

Writing the checks down before fixing anything paid off twice: the "last item counted" check proved
the loop fix, and the "stepper down" check caught the quantity going below 1, which we would have
missed otherwise.

Next time we would add the checks in the same commit as the feature, so nobody has to remember them.
