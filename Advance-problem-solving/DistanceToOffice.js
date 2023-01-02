let x=4;
let y=20;

// speed= x;
//  time=t+y;
// distane=speed*time;
// distance = x*(t+y);

// speed=x+2;
// time=t-(y-10);
// distance=speed*time;
// distance=x+2*(t-y+10);

// x * (t + y) = x + 2 * (t - y + 10);
// xt+xy = xt - xy + 10x + 2t - 2y + 20;
// xy = -xy + 10x + 2t - 2y + 20;
// xy + xy - 10x + 2y - 20 = 2t
// 2(xy-5x+y-10) = 2t;
// xy - 5x + y - 10 = t;

let t= (x*y) - (5*x) + y - 10;
let distance= x*(t+y)/60;
console.log(`the distance form office to home is ${distance} kilo meter`);