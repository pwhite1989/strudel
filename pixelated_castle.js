// "Pixelated Castle"
// @by Paddy

let chords = chord(`<AbM CM DbM <CbM [CbM CbM7]>>`)

pattern: "<~ ~ 0 0 0 1 1 1 2 2 ~ ~>/8".pickRestart([
  n("7 [5 <[6 5 6] 6>] 2 [2 3 4]").set(chords).voicing().dec(.2),
  n("7 [5 <[6 5 6] 6>] 2 [2 3 4]".add("<[<0,1> <1,0>] [0,2,4]> <[3,5,7]>")).set(chords).voicing().dec(.2).gain("[1 0.5 0.5 0.5]".slow(2)).room("0 1 1 1".slow(2)),
  n("<[0 [2 4] 7 [4 2]] [7 [9 7] 4 [2 0]]>*2.5").set(chords).voicing().dec(.18).gain(sine.range(0.5,0.8).slow(3)).room("0.2 0.5".slow(2)).jux(rev)
])

chord_progression: "<0 0 0 0 0 0 0 0 0 0 0 ~>/8".pickRestart([
  chords.struct("- x - x").voicing().room(.5)
])

blip: "<0 0 0 0 0 0 0 0 0 0 0 ~>/8".pickRestart([
  n("~@16 [0 - 1 -]").set(chords).mode("<below above duck root>:Cb6").voicing()
])

neeow: "<~ ~ ~ ~ ~ ~ ~ 0 1 2 0 ~>/8".pickRestart([
  note("<c2 ~@7>")
  .s("sine")
  .penv(74)
  .pdec(1.5)
  .patt(0)
  .attack(0.01)
  .decay(1.5)
  .sustain(0.1)
  .release(0.3)
  .echo(8,1/6,.8),
  
  note("c7@8 ~@7")
  .s("sine")
  .penv(-74)
  .pdec(1.5)
  .attack(0.01)
  .decay(1.5)
  .sustain(0.1)
  .release(0.3)
  .pan(sine.slow(2))
  .gain(0.7),

  stack(
  note("c2@2").s("sine").penv(74).pdec(1.5),
  note("c2@2").s("triangle").penv(74).pdec(1.5).gain(0.3).room(1).echo(23, 1/6, .8)
).attack(0.01).decay(1.5).sustain(0.1).release(0.3).postgain(0.1)
])

bass: "<~ 0 0 0 0 0 0 0 0 0 ~ ~>/8".pickRestart([
  n("[0 ~ 1 ~]!3 [1 ~ 0 ~]")
  .slow(4)
  .add("<0 5 7 0>")
  .set(chords)
  .mode("root:C")
  .voicing()
  .transpose(-24)
  .sound("square")
  .lpf(sine.range(800, 2000))
  .pan(sine.slow(4).range(0.25, 0.75))
])

drums: "<~ ~ 0 1 [0,1,2] [1,2] [1,2] [1,2] [0,2,3] 0 0 ~>/8".pickRestart([
  "<~@7 [~ ~ ~ cp]>",
  "[bd sd bd sd bd sd bd sd bd sd bd sd bd sd bd [sd bd]]".slow(4),
  "<[rd rd [rd rd] rd rd [rd rd] rd rd]>",
  "<[bd [bd bd] rim sd] [bd sd bd sd] [rim rim bd sd]>*2"
]).pickOut({
  bd:s('linndrum_bd').lpf(3000).room(.25).gain(.75),
  sd:s('linndrum_sd').room(.25).gain(.65),
  cp:s('cp').velocity(.65).room(.8),
  rd:s('rd').gain("<[1 .75 [0.5 1] .75 1 [.75 .5] .75 1]>").gain(0.3),
  rim:s('linndrum_rim').room(.25).gain(.65)
})
