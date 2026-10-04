// Good Company: sketch 03 "reconnection"
// Moods: door / dog contact / hug (cue 10), then "Let's walk" outside together (cue 11).
// Instruments: piano, string ensemble, cello, folk harp (the dog motif), nylon guitar and recorder (with LIFT).
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop. Samples take a moment to load the first time.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 80        // tempo (4 beats per cycle)
const DENSITY = 0.9   // 0..1: share of dog-motif notes that play
const LIFT = 0.3      // 0 = hug (motif, piano, strings), 1 = walking outside (adds guitar and recorder)
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

// The dog motif returns complete and now resolves home (… 4 2 0).
// Keep LIFT modest: a small lift, not a triumph.
stack(
  // piano: soft chords, F, C, Dm7, Bb
  chord("<F C Dm7 Bb>").voicing()
    .s("piano").velocity(0.4).room(0.4).gain(0.55),

  // strings: held chords underneath
  chord("<F C Dm7 Bb>").voicing()
    .s("gm_string_ensemble_1").attack(0.8).release(1.5).gain(0.25),

  // cello walks down F E D Bb
  n("<0 -1 -2 -4>").scale("F2:major")
    .s("gm_cello").attack(0.3).release(1).gain(0.5),

  // dog motif on folk harp, complete, ending on the home note
  n("<[2 4 5 ~] [4 2 0 ~]>").scale("F4:major")
    .s("folkharp").degradeBy(1 - DENSITY)
    .room(0.4).gain(0.85),

  // nylon guitar walking pulse (silent when LIFT = 0)
  n("[0,4] [2,4]").scale("F3:major")
    .s("gm_acoustic_guitar_nylon").gain(0.5 * LIFT),

  // alto recorder counter-line (silent when LIFT = 0)
  n("<~ [7 ~ 9 ~] ~ [9 7 ~ ~]>").scale("F4:major")
    .s("recorder_alto_sus").room(0.5).gain(0.6 * LIFT),
).postgain(GAIN)
