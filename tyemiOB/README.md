# Tyemi Offline Builder
## (from the original mockup)
<br>

- Fully offline PWA (using data URI)
- Turns HTML PWAs with the tyemiOB receiver script into fully offline PWAs
- Might let you make PWAs in the future

### Theoretical how-it-works:
There are 2 scripts: TyemiOB/receiver.js
                     TyemiOB/sender.js
<br>

The sender communicates with the receiver via `postMessage()`.<br><br>

- STEP 1: The sender validates that the specified URL contains the receiver script.<br>
- STEP 2: sender => receiver: Asks for HREFs and SRCs for the script and style dependacies (predefined, ignore libraries).<br>
- STEP 3: receiver: Strips document of said dependacies.<br>
- STEP 4: receiver: Re-adds dependacies locally to the document with jQuerry `$('load')`.<br>
- STEP 5: receiver => sender: Sends entire document.<br>
- STEP 6: sender: Removes receiver from document.<br>
- STEP 7: sender: Minifies document.<br>
- STEP 8: sender: Encodes entire document as string to Base64.<br>
- STEP 9: sender: Builds data URI and displays it for copying/opening.<br>
- DONE<br>
<br>
<br>

## How to set it up
