// Good Company: sketch 07 "opening (under dialogue)"; a calmer alternative to 01-warmth and 04-beginning-folk.
// Brief: background music for the start of the film that feels happy and positive, relaxed tempo,
// not distracting, because the early scenes carry a lot of dialogue. Original material.
// Moods: waking / dog greeting, breakfast (cues 1, 2), and under early dialogue. For the phone call (cue 3), stop it.
// Design: no lead melody. Soft pad, a slow bass and a few gentle plucks, kept low and dark enough to sit under voices.
// The dog motif appears only now and then, very quietly (MOTIF = 0 removes it).
// Sounds: built-in synths, plus the folk harp (CC0) for the occasional motif.
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 76        // tempo (4 beats per cycle); relaxed, not slow
const PULSE = 0.5     // 0..1: how many soft plucked notes play (0 = pad and bass only, the quietest bed)
const MOTIF = 0.3     // 0..1: how often the dog motif peeks through (0 = never)
const WARMTH = 0.4    // 0..1: brightness. Lower = darker and further under the voices; higher = more present
const GAIN = 0.7      // overall level
setcpm(BPM / 4)

// Each chord lasts two cycles: Fmaj7, Bbmaj7, Dm7, C.
const chords = "<F^7 Bb^7 Dm7 C>/2"

stack(
  // pad: slow swell, filtered down so it stays out of the speech range
  chord(chords).voicing()
    .s("triangle").attack(1.5).release(3).lpf(500 + WARMTH * 700)
    .room(0.5).gain(0.16),

  // bass: one soft note per cycle on the chord root
  n("<0 0 -4 -4 -2 -2 -3 -3>").scale("F2:major")
    .s("sine").attack(0.05).release(1).gain(0.3),

  // gentle plucks on the off-beats, chord tones only, no tune
  n("[~ 0] [~ 1] [~ 2] [~ 1]").chord(chords).voicing()
    .s("triangle").decay(0.4).sustain(0).lpf(1000 + WARMTH * 900)
    .degradeBy(1 - PULSE).room(0.3).gain(0.12),

  // dog motif: once every few cycles at most, quietly, on folk harp
  n("<[2 4 5 ~] ~ ~ ~ [4 2 ~ ~] ~ ~ ~>").scale("F4:major")
    .s("folkharp").degradeBy(1 - MOTIF).room(0.4).gain(0.45),
).postgain(GAIN)
