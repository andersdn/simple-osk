# simple-osk
simple on screen keyboard using jquery

# TODO:
* Write readme.md
* tweak input styling for keyleft and keyright as it moves the carat, maybe change to hidden field and a span

# TL;DR:
* `.keys.visible` is default keyboard
* `data-action="kbd:KEYBOARD_NAME"` swaps keyboard to `.keys[rel="KEYBOARD_NAME"]`
* `data-action="del"` deletes last character
* `data-action="done"` triggers `done(text)`
* `.dbl` keys need a `.spc` after
