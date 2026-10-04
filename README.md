# Good Company: music playground

Editable [Strudel](https://strudel.cc/) sketches for the *Good Company* score. These are early sketches, not final cues: nothing here is locked to picture or timing.

**Play them in the browser:** https://dkta-labs.github.io/good-company-music/. Pick a sketch, press **Play / update**, edit the numbers, and press it again.

Everything is **code that Strudel plays live in your browser** using recordings of real acoustic instruments from Strudel's built-in sample libraries (see [Instruments and credits](#instruments-and-credits)). There is no AI-generated audio and no exported audio file.

## Files

| File | Sketch | Use it for (initial direction) |
|---|---|---|
| `cues/01-warmth.js` | Warmth | 1 waking / dog greeting, 2 breakfast bowls, 7 dog joins the couch |
| `cues/02-strain.js` | Repetitive strain | 8 resume / job search; thinned out for 4 coffee and call aftermath, 5 "I'm sure it'll be fine" at the doorway |
| `cues/03-reconnection.js` | Reconnection | 10 door, dog contact, hug (`LIFT` near 0); 11 "Let's walk", outside together (`LIFT` up to about 0.6) |

**The through-line is a small dog motif on folk harp:** three rising notes (A C D in F major), then a short answer.
- **Warmth:** the full motif, friendly.
- **Strain:** only the first two notes, then nothing. It stays incomplete.
- **Reconnection:** the full motif again, now ending on the home note. Aim for a modest lift, not a triumph.

## Auditioning a sketch

1. Open https://strudel.cc/.
2. Select everything in the editor, delete it, and paste in the contents of one `.js` file.
3. Press **Ctrl+Enter** (Cmd+Enter on Mac) to play, or click **play**. Press **Ctrl+.** (Cmd+. on Mac) to stop.
4. Change a number in the `controls` block at the top of the file and press Ctrl+Enter again. Strudel switches to the new version without stopping.

The first time you play, the instrument samples download (a few MB), and the first notes can be skipped while they load. Stop and play again; after that they're cached.

**Controls at the top of each file:**
- `BPM`: tempo. Each cycle is 4 beats; the sketch calls `setcpm(BPM / 4)`.
- `DENSITY`: 0 to 1, how many notes play. Lower it for more air under dialogue.
- `GAIN`: overall volume.
- `STRAIN` (strain sketch only): 0 to 1. Higher means a harder piano touch and louder, more insistent pizzicato.
- `LIFT` (reconnection sketch only): 0 to 1. At 0 you get the hug: folk harp motif, piano, strings and cello. Raising it adds a nylon guitar pulse and an alto recorder counter-line.

To mute one layer, put `//` in front of each of its lines inside `stack( … )`, or delete it.

## Dialogue and silence

These cues need little or no music. Decide on picture; don't fill them by default.
- **3, phone interruption:** stop the music, or let it thin out to nothing, for the dialogue.
- **6, computer / Zoom call:** keep it sparse, or use nothing. If anything plays, use the strain sketch with `DENSITY` around 0.1, `STRAIN` around 0, and the piano muted, leaving just the low cello and the occasional unfinished motif.
- **9, crying in the messy bedroom:** silence, or only a few sparse low notes. For example, keep just the low cello from the strain sketch with `GAIN` low.
- **The storyboard skips shots 16–31.** These sketches don't assume anything about what happens there or how long it runs.

## Strudel docs

- Getting started: https://strudel.cc/workshop/getting-started/
- Tempo (`setcpm`, cycles): https://strudel.cc/understand/cycles/
- Sounds and samples: https://strudel.cc/learn/samples/
- Effects (`lpf`, `room`, `delay`, `gain`, `postgain`, envelopes): https://strudel.cc/learn/effects/
- Chords, scales, voicings: https://strudel.cc/learn/tonal/
- Randomness (`degradeBy`): https://strudel.cc/learn/random-modifiers/

## Instruments and credits

| Sound name | Instrument | Source |
|---|---|---|
| `piano` | Grand piano | Salamander Grand Piano by Alexander Holm (Strudel's default piano; reported CC-BY, so credit it) |
| `folkharp`, `recorder_alto_sus` | Folk harp, baroque alto recorder | Versilian Community Sample Library (VCSL), CC0 |
| `gm_cello`, `gm_pizzicato_strings`, `gm_string_ensemble_1`, `gm_acoustic_guitar_nylon` | Cello, pizzicato strings, string ensemble, nylon guitar | General MIDI soundfonts bundled with Strudel (WebAudioFont collection); licenses vary by font, so check before final use |

Strudel's other recorded instruments include kalimba, soft vibraphone (`vibraphone_soft`), glockenspiel, harmonica (`harmonica_soft`) and more recorders, all from VCSL, plus many `gm_*` instruments (violin, viola, flute, clarinet, oboe, French horn, orchestral harp…). Swap any `.s("…")` name to try one.

## License

AGPL-3.0-or-later, the same license as Strudel. The player page (`index.html`) loads the official `@strudel/repl` 1.3.0 web component from unpkg.
