// Good Company: sketch 04 "beginning (folk morning)"; a variant of 01-warmth.
// Guided by the "Beginning" reference track (tagged organic indie folk, morning, adventure). Original material, nothing quoted.
// Moods: waking / dog greeting, breakfast bowls (cues 1, 2). Not for the phone call (cue 3): stop or thin out for dialogue.
// Sounds: plucked synth "guitar" and bass (built-in triangle synth), soft brush (noise), folk harp dog motif (CC0).
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 96        // tempo (4 beats per cycle)
const DENSITY = 0.85  // 0..1: share of dog-motif notes that play
const PULSE = 0.6     // 0..1: how much of the brush/pulse layer you hear (0 = none)
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

stack(
  // fingerpicked chords on a plucked synth: F, C, Dm, Bb
  n("0 2 4 2 5 4 2 4").chord("<F C Dm Bb>").voicing()
    .s("triangle").decay(0.25).sustain(0).lpf(2600)
    .velocity("0.8 0.5 0.6 0.5").room(0.25).gain(0.3),

  // bass on beats 1 and 3
  n("<[0 ~ 4 ~] [-3 ~ 1 ~] [-2 ~ 2 ~] [-4 ~ 0 ~]>").scale("F2:major")
    .s("triangle").lpf(700).gain(0.35),

  // soft brush on 2 and 4
  s("~ pink ~ pink").decay(0.05).sustain(0).hpf(3000).gain(0.08 * PULSE),

  // dog motif on folk harp, complete and friendly, then two bars of space
  n("<[2 4 5 ~] [4 2 ~ ~] ~ ~>").scale("F4:major")
    .s("folkharp").degradeBy(1 - DENSITY).room(0.4).gain(0.8),
).postgain(GAIN)
