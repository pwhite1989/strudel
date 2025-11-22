// "Circus is in town"
// @by Paddy

let chords = chord(`<AbM CM DbM <CbM [CbM CbM7]>>`)

pattern: "<~ 0 0 0 >/8".pickRestart([
  n("7 [5 <[6 5 6] 6>] 2 [2 3 4]").set(chords).voicing().dec(.2) 
])
chord_progression$: "<0 0 0 0>/8".pickRestart([
  chords.struct("- x - x").voicing().room(.5)
])

blip: "<0 0 0 0 >/8".pickRestart([
  n("~@16 [0 - 1 -]").set(chords).mode("<below above duck root>:Cb6").voicing()
])

bass: "<~ 0 0 0 >/8".pickRestart([
  n("[0 ~ 1 ~]!3 [1 ~ 0 ~]")
  .slow(4)
  .add("<0 5 7 0>")
  .set(chords)
  .mode("root:C")
  .voicing()
  .transpose(-24)
  .sound("square")
])

// This is just an example taken from "Bennington" by @eefano. This is just a reference on how to use pickOut
drums: "<~ [0,1,2] 2  [0,2] [0,1,2] [0,2]@2 2@2 [2,[~ 1*2]] 2@2 [0,1,2] ~>/8".pickRestart([
  "<[~ <~@3 bd ~@4>]>*4",  "<~ <cp ~> ~@6>*4",  "<bd sd>*4"
]).pickOut({
  bd:s('linndrum_bd').lpf(3000).room(.25).gain(.75),
  sd:s('linndrum_sd').room(.25).gain(.65),
  cp:s('cp').velocity(.65).room(.8)
})
