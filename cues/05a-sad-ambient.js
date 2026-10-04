// Good Company: sketch 05a "sad, alternative A: ambient"
// Guided by the "Depression option 2" reference track (tagged ambient, piano, background). Original material, nothing quoted.
// ALTERNATIVE to 05b: pick one, don't layer them.
// Mood: crying in the messy bedroom (cue 9): isolation, depletion. The earlier brief says silence or sparse low notes;
// this is the sparse option. Silence is still a valid choice.
// Sounds: slow sine pad (built-in synth) and a few low piano notes with long reverb. The dog motif is absent on purpose.
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 60        // tempo (4 beats per cycle); there is no beat to feel, this only sets pace
const SPARSE = 0.4    // 0..1: higher = fewer piano notes, more silence (1 = pad only)
const PAD = 1         // 0..1: pad level (0 = piano notes alone in the room)
const GAIN = 0.7      // overall level
setcpm(BPM / 4)

stack(
  // pad: each chord lasts two cycles; Dm, Bb, F, C
  chord("<Dm Bb F C>/2").voicing()
    .s("sine").attack(2).release(4).lpf(900).room(0.8).gain(0.18 * PAD),

  // a few low piano notes, far apart, with a long tail
  n("<0 ~ -3 ~ 2 ~ -2 ~>").scale("D3:minor")
    .s("piano").velocity(0.35).degradeBy(SPARSE)
    .room(0.8).roomsize(6).gain(0.5),
).postgain(GAIN)
