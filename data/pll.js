const pll = () => {

    return{
        aperm: {
            algorithms: [
                {
                  alg: "(x) L'2 D2 (L' U' L) D2 (L' U L')",
                  name: "aa" 
                },
                {
                  alg: "(x) R2 D'2 (R U R') D'2 (R U' R)",
                  name: "ab" 
                }
            ],
            desc: "A Permutation" ,
            id: "aperm"
        },
        eperm: {
            algorithms: [
                {
                  alg: "(z) U2 R2 F (R U R' U')3 F' R2 U2",
                  name: "e" 
                }
            ],
            desc: "E Permutation" ,
            id:"eperm"
        },
        fperm: {
            algorithms: [
                {
                  alg: "R' U' (F' R U R' U' R' F) R2 (U' R' U') (R U R' U R)",
                  name: "f" 
                }
            ],
            desc: "F Permutation" ,
            id:"fperm"
        },
        gperm: {
            algorithms: [
                {
                  alg: "L' (L' U L' U) (L' U' L U') L'2 (U' D L' U L D')",
                  name: "ga" 
                },
                {
                  alg: "R (R U' R U') (R U R' U) R2 (U D' R U' R' D)",
                  name: "gc" 
                },
                {
                  alg: "D (L' U' L U) D' L' (L' U L' U) (L U' L U') L'2",
                  name: "gb" 
                },
                {
                  alg: "D' (R U R' U') D R (R U' R U') (R' U R' U) R2",
                  name: "gd" 
                }
            ],
            desc: "G Permutation" ,
            id:"gperm"
        },
        hperm: {
            algorithms: [
                {
                  alg: "M2' U M2' U2 M2' U M2'",
                  name: "h" 
                }
            ],
            desc: "H Permutation", 
            id:"hperm"
        },
        jperm: {
            algorithms: [
                {
                  alg: "(L' U' L) (F L' U' L U L F') L'2 (U L U) ",
                  name: "ja" 
                },
                {
                  alg: "(R U R') (F' R U R' U' R' F) R2 (U' R' U')",
                  name: "jb" 
                }
            ],
            desc: "J Permutation",
            id:"jperm"
        },
        nperm: {
            algorithms: [
                {
                  alg: "z' (D L' U L2 D' L U')2",
                  name: "na" 
                },
                {
                  alg: "z (D' R U' R2' D R' U)2",
                  name: "nb" 
                }
            ],
            desc: "N Permutation",
            id:"nperm"
        },
        rperm: {
            algorithms: [
                {
                  alg: "(L U'2 L' U'2 L) (F' L' U' L U L F) L2",
                  name: "ra" 
                },
                {
                  alg: "(R' U2 R U2 R') (F R U R' U' R' F') R2",
                  name: "rb" 
                }
            ],
            desc: "R Permutation",
            id:"rperm"
        },
        tperm: {
            algorithms: [
                {
                  alg: "(R U R' U') (R' F R2 U') R' U' (R U R' F')",
                  name: "t" 
                }
            ],
            desc: "T Permutation",
            id:"tperm"
        },
        uperm: {
            algorithms: [
                {
                  alg: "(R U' R U) R U (R U' R' U') R2",
                  name: "ua" 
                },
                {
                  alg: "(L' U L' U') L' U' (L' U L U) L'2",
                  name: "ub" 
                }
            ],
            desc: "U Permutation" ,
            id:"uperm"
        },
        vperm: {
            algorithms: [
                {
                  alg: "R' f' (R U R' U R U2 R') U f (R U R' U' R) ",
                  name: "v" 
                }
            ],
            desc: "V Permutation",
            id:"vperm"
        },
        yperm: {
            algorithms: [
                {
                  alg: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
                  name: "y" 
                }
            ],
            desc: "Y Permutation",
            id:"yperm"
        },
        zperm: {
            algorithms: [
                {
                  alg: "M' U' M'2 U' M'2 U' M' U'2 M'2",
                  name: "z" 
                }
            ],
            desc: "Z Permutation",
            id:"zperm"
        }

    }
}
export default pll