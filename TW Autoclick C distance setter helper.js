var takethis = prompt('Distância máxima para saquear?');
localStorage["tribosmaxDistAS"] = !takethis ? 0 : takethis;

//!takethis means takethis is is *falsey*, which includes 'undefined' and 'null' (and '""', and '0', and 'NaN', and [of course] 'false')