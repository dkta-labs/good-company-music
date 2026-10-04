// Good Company: sketch 01 "warmth"
// Moods: waking / dog greeting, breakfast bowls, dog joins couch (cues 1, 2, 7).
// Instruments: grand piano, cello, kalimba (the dog motif). Recorded instrument samples built into Strudel.
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop. Samples take a moment to load the first time.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 72        // tempo (4 beats per cycle)
const DENSITY = 0.85  // 0..1: share of dog-motif notes that play (lower = sparser, more space)
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

// The dog motif: three rising notes, then a little answer back home.
// Scale degrees in F major (0 = F): 2 4 5 = A C D, answer 4 2 = C A.
stack(
  // piano: gently broken chords, F, Dm7, Bbmaj7, C
  n("[0 2 4 2]").chord("<F Dm7 Bb^7 C>").voicing()
    .s("piano").velocity(0.45).room(0.3).gain(0.6),

  // cello: one long low note per chord
  n("<0 -2 -4 -3>").scale("F2:major")
    .s("gm_cello").attack(0.3).release(1).gain(0.5),

  // dog motif on kalimba, complete and friendly
  n("<[2 4 5 ~] [4 2 ~ ~]>").scale("F4:major")
    .s("kalimba").degradeBy(1 - DENSITY)
    .room(0.4).gain(0.8),
).postgain(GAIN)
