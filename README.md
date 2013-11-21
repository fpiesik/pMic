pMic
====

A printable A-B-Stereo Microphone

I wanted to have a mic which I cought use for general purpose recording in conjunction with my old iriver h120 (with rockbox installed). I didn't found a suitable mic without a build in recorder:)

So after a little bit googleing I found this article about a low-cost
homebrew solution http://www.wildlife-sound.org/equipment/technote/micdesigns/ and decided to get a bunch of these panasonic wm61-capsules described in the article to start experimenting with them - here is the result.

A special feature of this microphone is it's variable stereo width (by time-of-arrival stereophony).

The button near the audio jack is the on/off-swiitch, the second one a gain boost. By swapping two resistors in the circuit, the gain boost could be easily converted to a gain damp. The preamp circuit isn't necessary at all, if your recorders preamp has phantom power. But the 9v battery increases the headroom for louder signals and powers the 4 capsules more convenient. Also, the length of the cable comes into play, if the distance between capsules and preamp becomes to long...

I'm quite happy with the sound. You can download some audio examples here: https://github.com/Piesi/pMic/tree/master/docs/audio_examples 


Non printed parts:
-2-4 Panasonic wm-61 electret condenser capsules (4 give better signal to noise ratio)
-2 M4 bolts ~12mm
-8 M3 bolts ~15mm
-1 M3 bolt 30mm
-4 M4 nuts
-50cm enameled copper wire (0.2mm)
-a simple preamp circuit (the included schematic is a fritzing-file http://fritzing.org/download/)
-9Volt Battery
-two rubber bands

printing:
easy print, besides except the case parts need support.

electronic:
it`s a simple preamp circuit based on a tl072 op-amp. The board is 69*18mm. You can take all information from thr .fzz-file.

The rest might be figured from the pictures and the files (I'm too lazy to descibe in further detail, but helpful if you're stuck and need advice:) 
