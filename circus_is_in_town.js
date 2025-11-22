// "Pixelated Castle"
// @by Paddy

let chords = chord(`<AbM CM DbM <CbM [CbM CbM7]>>`)

pattern: "<~ ~ 0 0 0 0 0 0>/8".pickRestart([
  n("7 [5 <[6 5 6] 6>] 2 [2 3 4]").set(chords).voicing().dec(.2) 
])
chord_progression$: "<0 0 0 0 0 0 0 0>/8".pickRestart([
  chords.struct("- x - x").voicing().room(.5)
])

blip: "<0 0 0 0 0 0 0 0>/8".pickRestart([
  n("~@16 [0 - 1 -]").set(chords).mode("<below above duck root>:Cb6").voicing()
])

bass: "<~ 0 0 0 0 0 0 0>/8".pickRestart([
  n("[0 ~ 1 ~]!3 [1 ~ 0 ~]")
  .slow(4)
  .add("<0 5 7 0>")
  .set(chords)
  .mode("root:C")
  .voicing()
  .transpose(-24)
  .sound("square")
])

drums: "<~ ~ 0 1 [0,1,2] [1,2] [0,2,4] 0>/8".pickRestart([
  "<~@7 [~ ~ ~ cp]>", 
  "<bd sd>*4",
  "<[rd rd [rd rd] rd rd [rd rd] rd rd]>",
  "<[~ <~@3 bd ~@4>]>*4",
  "<[bd@2 [~@0.1 bd bd]] sd [~ bd]>*4",
  "<sd>*4"
]).pickOut({
  bd:s('linndrum_bd').lpf(3000).room(.25).gain(.75),
  sd:s('linndrum_sd').room(.25).gain(.65),
  cp:s('cp').velocity(.65).room(.8),
  rd:s('rd').gain("<[1 .75 [0.5 1] .75 1 [.75 .5] .75 1]>")
})
