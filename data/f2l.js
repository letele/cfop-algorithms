const f2l = () => {
    return {
        bottomPair: {
            algorithms: [
                {
                  alg: "(L' U L U')(L' U'2 L) (U' L' U L)",
                  name: "liului",
                  hand:"lefthand"
                },
                {
                  alg: "(R U' R' U) (R U2 R') (U R U' R')",
                  name: "ruiriu",
                  hand:"righthand" 
                },
                {
                  alg: "(L' U L) (F R U2 R' F')",
                  name: "liulfru2rifi",
                  hand:"lefthand" 
                },
                {
                  alg: "(R U' R') (F' L' U'2 L F)",
                  name: "ruirifiliui2lf",
                  hand:"righthand" 
                },
                {
                  alg: " (R U R') d' (L U'2 L2 U' L)",
                  name: "ruridilui2l2uil",
                  hand:"righthand" 
                }
            ],
            desc: "Bottom Pair",
            id:"bottomPair"
        },
        bottomCorner: {
            algorithms: [
                {
                    alg: "(L' U L) (U' L' U L)",
                    name: "liuluiliul",
                    hand:"lefthand"
                },
                {
                    alg: "(R U' R') (U R U' R')",
                    name: "ruiriuruiri",
                    hand:"righthand"
                },
                {
                    alg: "(L' U' L U) (L' U' L)",
                    name: "liuiluliuil",
                    hand:"lefthand"
                },
                {
                    alg: "(R U R' U') (R U R')",
                    name: "ruriuiruri",
                    hand:"righthand"
                },
                {
                    alg: "(L U L U L) (U' L' U' L')",
                    name: "lululuiliuili",
                    hand:"lefthand"
                },
                {
                    alg: "(R' U' R' U' R') (U R U R)",
                    name: "riuiriuiriurur",
                    hand:"righthand"
                }
            ],
            desc: "Bottom Corner Top Edge",
            id:"bottomCorner"
        },
        cornerSide: {
            algorithms: [
                {
                    alg: "(L' U' L)",
                    name: "liuil",
                    hand:"lefthand"
                },
                {
                    alg: "(R U R')",
                    name: "ruri",
                    hand:"righthand"
                },
                {
                    alg: "(U L' U' L) (U' L' U' L)",
                    name: "uliuiluiliuil",
                    hand:"lefthand"
                },
                {
                    alg: "(U' R U R') (U R U R')",
                    name: "uiruriururi",
                    hand:"righthand"
                },
                {
                    alg: "(U L' U'2 L)2",
                    name: "uliui2luliui2l",
                    hand:"lefthand"
                },
                {
                    alg: "(U' R U2 R')2",
                    name: "uiru2riuiru2ri",
                    hand:"righthand"
                },
                {
                    alg: "F2 (L' U' L U) F2",
                    name: "f2liuiluf2",
                    hand:"righthand"
                },
                {
                    alg: "F2 (R U R' U') F2",
                    name: "f2ruriuif2",
                    hand:"lefthand"
                }
            ],
            desc: "Corner Side Top Edge",
            id:"cornerSide"
        },
        cornerUp: {
            algorithms: [
                {
                    alg: "(F' L' U'2 L F)",
                    name: "filiui2lf",
                    hand:"righthand"
                },
                {
                    alg: "(F R U2 R' F')",
                    name: "fru2rifi",
                    hand:"lefthand"
                },
                {
                    alg: "(U' L' U'2 L) (U' L' U L)",
                    name: "uiliui2luiliul",
                    hand:"lefthand"
                },
                {
                    alg: "(U R U2 R') (U R U' R')",
                    name: "uru2riuruiri",
                    hand:"righthand"
                }
            ],
            desc: "Corner Up Top Edge",
            id:"cornerUp"
        },
        topSide: {
            algorithms: [
                {
                    alg: "(U' L' U L)",
                    name: "uiliul",
                    hand:"lefthand"
                },
                {
                    alg: "(U R U' R')",
                    name: "uruiri",
                    hand:"righthand"
                },
                {
                    alg: "(L U'2 L2 U' L2 U' L')",
                    name: "lui2l2uil2uili",
                    hand:"lefthand"
                },
                {
                    alg: "(R' U2 R'2 U R'2 U R)",
                    name: "riu2ri2uri2ur",
                    hand:"righthand"
                },
                {
                    alg: "(L' U L U') d' (L U L')",
                    name: "liuluidiluli",
                    hand:"lefthand"
                },
                {
                    alg: "(R U' R' U) d (R' U' R)",
                    name: "ruiriudriuir",
                    hand:"righthand"
                },
                {
                    alg: "(U L' U L U') (L' U' L)",
                    name: "uliuluiliuil",
                    hand:"lefthand"
                },
                {
                    alg: "(U' R U' R' U) (R U R')",
                    name: "uiruiriururi",
                    hand:"righthand"
                }
            ],
            desc: "Top Pair Corner Side",
            id:"topSide"
        },
        topUp: {
            algorithms: [
                {
                    alg: "L' U'2 (L U L' U' L)",
                    name: "liui2luliuil",
                    hand:"lefthand"
                },
                {
                    alg: "R U2 (R' U' R U R')",
                    name: "ru2riuiruri",
                    hand:"righthand"
                },
                {
                    alg: "U2 L'2 U2 (L U L' U) L'2",
                    name: "u2li2u2luliuli2",
                    hand:"lefthand"
                },
                {
                    alg: "U'2 R2 U'2 (R' U' R U') R2",
                    name: "ui2r2ui2riuiruir2",
                    hand:"righthand"
                }
            ],
            desc: "Top Pair Corner Up",
            id:"topUp"
        },
        verticalTop: {
            algorithms: [
                {
                    alg: " (R U R' U') (R U R' U') (R U R')",
                    name: "ruriuiruriuiruri",
                    hand:"righthand"
                },
                {
                    alg: "(R U' R') d (R' U R)",
                    name: "ruiridriur",
                    hand:"righthand"
                },
                {
                    alg: "(U L' U L) (U L' U2 L)",
                    name: "uliululiu2l",
                    hand:"lefthand"
                },
                {
                    alg: "(U' R U' R') (U' R U2 R')",
                    name: "uiruiriuiru2ri",
                    hand:"righthand"
                },
                {
                    alg: "(U L' U' L) d' (L U L')",
                    name: "uliuildiluli",
                    hand:"lefthand"
                },
                {
                    alg: "(U' R U R') d (R' U' R)",
                    name: "uiruridriuir",
                    hand:"righthand"
                }
            ],
            desc: "Vertical Top Pair",
            id:"verticalTop"
        }
    }
}

export default f2l