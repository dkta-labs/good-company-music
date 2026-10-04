// Good Company: sketch 02 "repetitive strain"
// Moods: resume / job search (cue 8); thinned out for coffee-call aftermath and doorway doubt (cues 4, 5).
// Paste into https://strudel.cc, press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.
// Built-in synths and noise only. No samples, no audio files.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 92        // tempo (4 beats per cycle)
const DENSITY = 0.6   // 0..1: how many keyboard-like ticks play
const STRAIN = 0.4    // 0..1: higher = brighter loop, louder ticks (more fatigue/pressure)
const GAIN = 0.6      // overall level
setcpm(BPM / 4)

// Same key family as the warmth sketch (D minor = relative minor of F major).
stack(
  // looping figure that never resolves
  n("0 2 3 2 0 2 3 2").scale("D3:minor")
    .s("square").lpf(500 + STRAIN * 1500).decay(0.12).sustain(0).gain(0.22),

  // soft typing / clock ticks
  s("pink*16").decay(0.03).sustain(0)
    .degradeBy(1 - DENSITY).hpf(4000).gain(0.08 + STRAIN * 0.1),

  // low drone
  note("d2").s("sawtooth").lpf(300).attack(1).release(2).gain(0.15),

  // dog motif left incomplete: only the first two notes, once every four cycles
  n("<[2 4 ~ ~] ~ ~ ~>").scale("F4:major")
    .s("triangle").room(0.5).gain(0.25),
).postgain(GAIN)
