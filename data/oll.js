
const oll =()=>{

    return{
        biid: {
            algorithms: [
                {
                  alg: "f' L' U' L U f",
                  name: "fiLiUiLUf" 
                },
                {
                  alg: "f R U R' U' f'",
                  name: "fRURiUifi" 
                }
            ],
            desc: "bi-id",
            id:"biid"
        },
        cshape: {
            algorithms: [
                {
                  alg: "R' U' (R' F R F') U R",
                  name: "RiUiRiFRFiUR" 
                },
                {
                  alg: "(R U R2 U' R') F (R U R U') F'",
                  name: "RUR2UiRiFRURUiFi" 
                }
            ],
            desc: "C Shape",
            id:"cshape"
        },
        cross: {
            algorithms: [
                {
                  alg: "F (R U R' U')3 F'",
                  name: "FRURiUi3Fi" 
                },
                {
                  alg: "R U'2 R2 U' R2 U' R2 U'2 R",
                  name: "RUi2R2UiR2UiR2Ui2R" 
                },
                {
                  alg: "(r U R' U') M'2 (U R U' R') U' M'",
                  name: "rURiUiMi2URUiRiUiMi" 
                }
            ],
            desc: "Cross",
            id:"cross"
        },
        dots: {
            algorithms: [
              {
                alg: "(F R U R' U' F')(f R U R' U' f')",
                name: "FRURiUiFifRURiUiFi" 
              },
              {
                alg: "(R U2 R) (R F R F') U2 (R' F R F')",
                name: "RU2R2FRFiU2RiFRFi" 
              },
              {
                alg: "(f' L' U' L U f) U' (F' L' U' L U F)",
                name: "fiLiUiLUFUiFiLiUiLUF" 
              },
              {
                alg: "(f R U R' U' f') U (F R U R' U' F')",
                name: "fRURiUifiUFRURiUiFi" 
              },
              {
                alg: "(F R' F') (R U R U' R') U (F R U R' U' F')",
                name: "FRiFiRURUiRiUFRURiUiFi" 
              },
              {
                alg: "(F R' F') (R U R U' R') U' (F R U R' U' F')",
                name: "FRiFiRURUiRiUiFRURiUiFi" 
              },
              {
                alg: "(R U R' U) (R' F R F') U2 (R' F R F')",
                name: "RURiURiFRFiU2RiFRFi" 
              }
            ],
            desc: "Dots",
            id:"dots"
        },
        lshape: {
            algorithms: [
                {
                  alg: "l' U l U l' U' l (F U' F')",
                  name: "FiUiLiUi2LULiUiLF" 
                },
                {
                  alg: "r U' r' U' r U r' (F' U F)",
                  name: "FURU2RiUiRURIFi" 
                },
                {
                  alg: "(l' U' l) (L' U' L U) (l' U l)",
                  name: "liUilLiUiLUliUl" 
                },
                {
                  alg: "(r U r') (R U R' U') (r U' r')",
                  name: "rUriRURiUirUiri" 
                }
            ],
            desc: "L Shape",
            id:"lshape"
        },
        line: {
            algorithms: [
                {
                  alg: "f (R U R' U')2 f'",
                  name: "fRURiUi2fi" 
                },
                {
                  alg: "F (R U R' U' R) F' (r U R' U' r') ",
                  name: "FRURiUiRFirURiUiri" 
                },
                {
                  alg: "(R U R' U R) d' (R U' R') F' ",
                  name: "RURiURdiRUiRiFi" 
                },
                {
                  alg: "(R U2 R) (R U' R U' R') U2 (F R F')",
                  name: "RU2R2UiRUiRiU2FRFi" 
                }
            ],
            desc: "Line",
            id:"line"
        },
        pshape: {
            algorithms: [
                {
                  alg: "L U (F' U' L' U L  F) L'",
                  name: "LUFiUiLiULFLi" 
                },
                {
                  alg: "R' U' (F U R U' R' F' ) R",
                  name: "RiUiFURUiRiFiR" 
                }
            ],
            desc: "P Shape",
            id:"pshape" 
        },
        rightAngle: {
            algorithms: [
                {
                  alg: "F' (L' U' L U)2  F",
                  name: "FiLiUiLU2F" 
                },
                {
                  alg: "F (R U R' U')2  F'",
                  name: "FRURiUi2F" 
                },
                {
                  alg: "l' U l'2 U' l'2 U' l'2 U l'",
                  name: "liUli2Uili2Uili2Uli" 
                },
                {
                  alg: "r U' r2 U r2 U r2 U' r",
                  name: "rUir2Ur2Ur2Uir" 
                },
                {
                  alg: "l' U'2 (L U L' U') (L U L' U) l",
                  name: "liUi2LULiUiLULULiUl" 
                },
                {
                  alg: "r U2 (R' U' R U) (R' U' R U') r'",
                  name: "rU2RiUiRURiUiRUiri" 
                },
                {
                  alg: "(L' U' L U) (L F' L') (L' U' L U) F",
                  name: "LiUiLULFiLiLiUiLUF" 
                },
                {
                  alg: "(R U R' U') (R' F R) (R U R' U') F'",
                  name: "RURiUiRiFRRURiUiFi" 
                }
            ],
            desc: "Right Angle",
            id:"rightAngle"
        },
        snake: {
            algorithms: [
                {
                  alg: "L (F' L' U' L U F) U' L'",
                  name: "LFiLiUiLUFUiLi" 
                },
                {
                  alg: "R' (F R U R' U' F') U R",
                  name: "RiFRURiUiFiUR" 
                }
            ],
            desc: "Snake",
            id:"snake"
        },
        square: {
            algorithms: [
                {
                  alg: "l' U2 L U L' U l",
                  name: "liU2LULiUl" 
                },
                {
                  alg: "r U'2 R' U' R U' r'",
                  name: "rUi2RiUiRUiri" 
                },
                {
                  alg: "L' U2 L U L' U L",
                  name: "LiU2LULiUL" 
                },
                {
                  alg: "R U'2 R' U' R U' R'",
                  name: "RUi2RiUiRUiRi" 
                },
                {
                  alg: "(F R' F') (R U R U' R')",
                  name: "FRiFiRURUiRi" 
                },
                {
                  alg: "(R U2 R) (R F R F') (R U2 R')",
                  name: "RU2R2FRFiRU2Ri" 
                }
            ],
            desc: "Square",
            id:"square"
        },
        tshape: {
            algorithms: [
                {
                  alg: "F R U R' U' F'",
                  name: "FRURiUiFi" 
                },
                {
                  alg: "(R U R' U') (R' F R F')",
                  name: "RURiUiRiFRFi" 
                }
            ],
            desc: "T Shape",
            id:"tshape"
        },
        twopiece: {
            algorithms: [
                {
                  alg: "(F R F' )(r U R' U' r')",
                  name: "FRFirURiUiri" 
                },
                {
                  alg: "F' (r U R' U' r') F R",
                  name: "FirURiUiriFR" 
                },
                {
                  alg: "(r U R' U' r') (R U R U' R')",
                  name: "rURiUiriRURUiRi" 
                },
                {
                  alg: "(R U R' U' R') (r U R U' r')",
                  name: "RURiUiRirURUiri" 
                },
                {
                  alg: "R2 D R' U2 R D' R' U2 R'",
                  name: "R2DRiU2RDiRiU2Ri" 
                }
            ],
            desc: "Two Piece",
            id:"twopiece"
        },
        wshape: {
            algorithms: [
                {
                  alg: "(L' U' L U') (L' U L U) (L F' L' F)",
                  name: "LiUiLUiLiULULFiLiF" 
                },
                {
                  alg: "(R U R' U) (R U' R' U') (R' F R F')",
                  name: "RURiURUiRiUiRiFRFi" 
                }
            ],
            desc: "W Shape",
            id:"wshape"
        },
        zyshape: {
            algorithms: [
                {
                  alg: "F' U' (L' U'2  L U)2 F",
                  name: "FiUiLiUi2LU2F" 
                },
                {
                  alg: "F U (R U2 R' U')2 F'",
                  name: "FURU2RiUi2Fi" 
                },
                {
                  alg: "(L' U' L U' L' U'2 L) (F' L' U' L U F)",
                  name: "LiUiLUiLiUi2LFiLiUiLUF" 
                },
                {
                  alg: "(R U R' U R U2 R') (F R U R' U' F')",
                  name: "RURiURU2RiFRURiUiFi" 
                }
            ],
            desc: "zY Shape",
            id:"zyshape"
        },
        zshape: {
            algorithms: [
                {
                  alg: "l' U' L U' L' U'2  l",
                  name: "liUiLUiLiUi2l" 
                },
                {
                  alg: "r U R' U R U2 r'",
                  name: "rURiURU2ri" 
                },
                {
                  alg: "(F' L' U' L U F) U' (F' L' U' L U F)",
                  name: "FiLiUiLUFUiFiLiUiLUF" 
                },
                {
                  alg: "(F R U R' U' F') U (F R U R' U' F')",
                  name: "FRURiUiFiUFRURiUiFi" 
                }
            ],
            desc: "z Shape",
            id:"zshape"
        }

    }
}

export default oll