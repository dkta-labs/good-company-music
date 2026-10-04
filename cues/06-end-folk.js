// Good Company: sketch 06 "end (acoustic folk, walking out)"; a variant of 03-reconnection.
// Guided by the "End" reference track (tagged acoustic folk, upbeat, inspirational, travel). Original material, nothing quoted.
// Moods: door / hug (cue 10, LIFT near 0), then "Let's walk" outside together (cue 11, raise LIFT).
// The earlier brief asked for a modest lift rather than triumph; the reference is more upbeat. LIFT sets where it lands.
// Sounds: strummed synth "guitar", bass and a whistle-like line (built-in synths), light stomp/clap (noise),
// folk harp dog motif (CC0), complete and ending on the home note.
// Press Ctrl+Enter (Cmd+Enter on Mac) to play, Ctrl+. to stop.

// ---- controls: change a number, then press Ctrl+Enter again ----
const BPM = 104       // tempo (4 beats per cycle)
const DENSITY = 0.9   // 0..1: share of dog-motif notes that play
const LIFT = 0.5      // 0 = hug (strum, bass, motif), 1 = full walk (adds stomp/clap and whistle line)
const GAIN = 0.8      // overall level
setcpm(BPM / 4)

stack(
  // strummed chords on a plucked synth: F, C, Dm, Bb
  chord("<F C Dm Bb>").voicing().struct("x ~ x x ~ x x ~")
    .s("triangle").decay(0.3).sustain(0).lpf(2800).room(0.2).gain(0.25),

  // bass, root and fifth
  n("<[0 ~ 4 ~] [-3 ~ 1 ~] [-2 ~ 2 ~] [-4 ~ 0 ~]>").scale("F2:major")
    .s("triangle").lpf(800).gain(0.4),

  // light stomp (beats 1 and 3) and clap (beats 2 and 4), only with LIFT
  s("brown ~ brown ~").decay(0.08).sustain(0).lpf(300).gain(0.35 * LIFT),
  s("~ pink ~ pink").decay(0.06).sustain(0).hpf(1500).gain(0.12 * LIFT),

  // dog motif on folk harp, complete, resolving home
  n("<[2 4 5 ~] [4 2 0 ~]>").scale("F4:major")
    .s("folkharp").degradeBy(1 - DENSITY).room(0.3).gain(0.8),

  // whistle-like counter-line, only with LIFT
  n("<~ [7 ~ 9 ~] ~ [9 8 7 ~]>").scale("F5:major")
    .s("sine").vib(4).vibmod(0.2).room(0.4).gain(0.2 * LIFT),
).postgain(GAIN)
