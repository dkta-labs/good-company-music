// Good Company: sketch 01 "warmth"
// Moods: waking / dog greeting, breakfast bowls, dog joins couch (cues 1, 2, 7).
// Paste into https://strudel.cc, press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.
// Built-in synths only (sine, triangle). No samples, no audio files.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 72        // tempo (4 beats per cycle)
const DENSITY = 0.85  // 0..1: share of dog-motif notes that play (lower = sparser, more space)
const GAIN = 0.7      // overall level
setcpm(BPM / 4)

// The dog motif: three rising notes, then a little answer back home.
// Scale degrees in F major (0 = F): 2 4 5 = A C D, answer 4 2 = C A.
stack(
  // soft pad: F, Dm7, Bbmaj7, C
  chord("<F Dm7 Bb^7 C>").voicing()
    .s("sine").attack(0.6).release(1.5).lpf(1200).gain(0.25),

  // gentle bass under the chords
  n("<0 -2 -4 -3>").scale("F2:major")
    .s("triangle").lpf(600).gain(0.35),

  // dog motif, complete and friendly
  n("<[2 4 5 ~] [4 2 ~ ~]>").scale("F4:major")
    .s("triangle").degradeBy(1 - DENSITY)
    .delay(0.25).delaytime(0.375).delayfeedback(0.3)
    .room(0.4).gain(0.4),
).postgain(GAIN)
