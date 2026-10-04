// Good Company: sketch 03 "reconnection"
// Moods: door / dog contact / hug (cue 10), then "Let's walk" outside together (cue 11).
// Paste into https://strudel.cc, press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.
// Built-in synths only (sine, triangle). No samples, no audio files.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 80        // tempo (4 beats per cycle)
const DENSITY = 0.9   // 0..1: share of dog-motif notes that play
const LIFT = 0.3      // 0 = hug (motif + pad only), 1 = walking outside (adds pulse and counter-line)
const GAIN = 0.7      // overall level
setcpm(BPM / 4)

// The dog motif returns complete and now resolves home (… 4 2 0).
// Keep LIFT modest: a small lift, not a triumph.
stack(
  // pad: F, C, Dm7, Bb
  chord("<F C Dm7 Bb>").voicing()
    .s("sine").attack(0.4).release(2).lpf(1400).room(0.5).gain(0.25),

  // bass walks down F E D Bb
  n("<0 -1 -2 -4>").scale("F2:major")
    .s("triangle").lpf(700).gain(0.35),

  // dog motif, complete, ending on the home note
  n("<[2 4 5 ~] [4 2 0 ~]>").scale("F4:major")
    .s("triangle").degradeBy(1 - DENSITY)
    .delay(0.2).room(0.4).gain(0.45),

  // light walking pulse (silent when LIFT = 0)
  n("0 4").scale("F3:major")
    .s("triangle").decay(0.15).sustain(0).gain(0.2 * LIFT),

  // counter-line (silent when LIFT = 0)
  n("<~ [7 ~ 9 ~] ~ [9 7 ~ ~]>").scale("F4:major")
    .s("sine").room(0.6).gain(0.25 * LIFT),
).postgain(GAIN)
