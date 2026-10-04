// Good Company: sketch 02 "repetitive strain"
// Moods: resume / job search (cue 8); thinned out for coffee-call aftermath and doorway doubt (cues 4, 5).
// Instruments: piano ostinato, pizzicato strings, low cello, folk harp (the dog motif, left unfinished).
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop. Samples take a moment to load the first time.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 92        // tempo (4 beats per cycle)
const DENSITY = 0.6   // 0..1: how many pizzicato "ticks" play
const STRAIN = 0.4    // 0..1: higher = harder piano touch, more insistent plucks (more fatigue/pressure)
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

// Same key family as the warmth sketch (D minor = relative minor of F major).
stack(
  // piano: the same figure over and over, never resolving
  n("0 2 3 2 0 2 3 2").scale("D4:minor")
    .s("piano").velocity(0.3 + STRAIN * 0.4).clip(0.8).gain(0.5),

  // pizzicato strings ticking like a clock
  n("0*8").scale("D5:minor")
    .s("gm_pizzicato_strings").degradeBy(1 - DENSITY)
    .gain(0.25 + STRAIN * 0.25),

  // low cello drone
  note("d2").s("gm_cello").attack(1).release(2).gain(0.4),

  // dog motif left incomplete: only the first two notes, once every four cycles
  n("<[2 4 ~ ~] ~ ~ ~>").scale("F4:major")
    .s("folkharp").room(0.5).gain(0.6),
).postgain(GAIN)
