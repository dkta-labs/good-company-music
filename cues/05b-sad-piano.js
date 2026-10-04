// Good Company: sketch 05b "sad, alternative B: solo piano song"
// Guided by the "Depression song" reference track (Jurrivh, tagged sad / emotional solo piano). Original material, nothing quoted.
// ALTERNATIVE to 05a: pick one, don't layer them.
// Mood: crying in the messy bedroom (cue 9). More melodic and personal than 05a. The earlier brief favoured silence or
// sparse low notes here, so set MELODY = 0 for a quieter left-hand-only version, or leave the scene silent.
// Sounds: piano only. The dog motif is absent on purpose.
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 66        // tempo (4 beats per cycle)
const MELODY = 1      // 0 = left hand only (sparser), 1 = with the right-hand line
const TOUCH = 0.4     // 0..1: how hard the piano is played
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

stack(
  // left hand: broken chords in D minor, rooted on D, Bb, F, A
  n("[0 4 7 4]*2".add("<0 -2 2 -3>")).scale("D3:minor")
    .s("piano").velocity(TOUCH * 0.8).room(0.5).gain(0.6),

  // right hand: a simple falling line, original
  n("<[~ 4 ~ 3] [2 ~ ~ ~] [~ 4 ~ 6] [4 ~ 3 ~]>").scale("D4:minor")
    .s("piano").velocity(TOUCH + 0.1).room(0.5).gain(0.7 * MELODY),
).postgain(GAIN)
