setcpm(120/4)
// Bbm C F [Am Am]
$: note("<[bb2,f3,d4] [c3,g3,e4] [f3,a3,f4] <[a2,e3,e4] [a2,e3,a4]>>")._scope()  
// Melody
$: note("<c4(5,8)!4 c4(7,16)!4>").sound("triangle")

// Hi-hats
$: stack(
  sound("hh*16").gain("[.25 1]*4"),
// Bass Drum
  sound("bd*4"),
// Snare
  sound("<[~ sd:1]*2!19 [[~]!4 sd:1 [~]!5 sd:1 ~ sd:1 ~ sd:1 sd:1]>")
    .gain("<1!19 [1!9 .5 1]>")
)

$: note("<[db2 d3]*4 [g1 g2]*4 [f2 f3]*4 [eb2 eb3]*4>")
  .scale("C:ionian")
  .sound("sawtooth")
  .pan(tri
       .range(0, 1)
       .slow(4))
  .lpf(saw
       .range(2000, 500))
._scope()
