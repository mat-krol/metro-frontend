export const initialState = {
  game: {
    view: 1,
    colors: {
      0: "#2e3192",
      1: "#bf0000",
      2: "#0e8f4c",
      3: "#ffcc00",
      4: "#000000",
      5: "#22b3fa",
      6: "#ff992d",
      7: "#8B4513",
      8: "#e59aaa",
    }
  },
  round: {
    budget: 500000,
    date: 1577836800000,
    modal: false,
  },
  mode: {
    build: {
      ongoing: false,
      modal: false,
      line: {
        id: null,
        key: null,
        length: 0,
        capacity: 3,
        color: null,
        branch: {
          0: {  
            length: 0,
            points: []
          }
        }
      }
    },
    expand: {
      ongoing: false,
      modal: false,
    },
    upgrade: {
      ongoing: false,
    },
    invest: {
      ongoing: false,
    },
    wait: {
      ongoing: false,
    },
  },
  map: {
    lines: {
      // 0: {
      //   id: 0,
      //   key: 0,
      //   color: "#BF0000",
      //   text: "Red Line",
      //   points: {
      //     0: {
      //       id: 20,
      //       initial: true,
      //       x: 472.60836683206213,
      //       y: 143.51690143298032,
      //       key: 0,
      //     },
      //     1: {
      //       id: 22,
      //       x: 416.357533382825,
      //       y: 223.91499999999994,
      //       key: 1,
      //     },
      //     2: {
      //       id: 18,
      //       x: 348.963114558733,
      //       y: 247.54523350644263,
      //       key: 2,
      //     },
      //     3: {
      //       id: 10,
      //       x: 299.98341355586166,
      //       y: 258.9306346799095,
      //       key: 3,
      //     },
      //     4: {
      //       id: 15,
      //       x: 235.59334524496543,
      //       y: 255.90051260551994,
      //       key: 4,
      //     },
      //     5: {
      //       id: 14,
      //       x: 174.5176271678008,
      //       y: 341.64908319388826,
      //       key: 5,
      //     },
      //     6: {
      //       id: 32,
      //       x: 67.76010085444237,
      //       y: 466.3781816093527,
      //       key: 6,
      //     }
      //   }
      // },
      // 1: {
      //   id: 1,
      //   key: 1,
      //   color: "#2E3192",
      //   text: "Blue Line",
      //   points: {
      //     0: {
      //       id: 28,
      //       initial: true,
      //       x: 277.70385649649614,
      //       y: 64.4034867136583,
      //       key: 0,
      //     },
      //     1: {
      //       id: 16,
      //       x: 322.495449796645,
      //       y: 127.86136261697324,
      //       key: 1,
      //     },
      //     2: {
      //       id: 19,
      //       x: 359.10230200148163,
      //       y: 182.62589071278572,
      //       key: 2,
      //     },
      //     4: {
      //       id: 18,
      //       x: 348.963114558733,
      //       y: 247.54523350644263,
      //       key: 4,
      //     },
      //     5: {
      //       id: 27,
      //       x: 462.57837129288873,
      //       y: 414.80118886951584,
      //       key: 5,
      //     },
      //     6: {
      //       id: 6,
      //       x: 405.0520492283898,
      //       y: 536.5127320368211,
      //       key: 6,
      //     },
      //   }
      // }
    },
    areas: {
      0: {
        id: 0,
        center: [377.1185970028766, 285.53421872198913],
        neighbours: [1, 18, 26],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 1.5,
        },
        d: "M 410.109 270.349 L 385.482 242.442 L 341.826 278.488 L 376.527 338.953 L 410.109 270.349 Z"
      },
      1: {
        id: 1,
        center: [328.41601500114325, 328.152455677901],
        neighbours: [0, 10, 13, 3],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 2,
        },
        d: "M 288.094 299.419 L 341.826 278.488 L 376.527 338.953 L 316.079 384.302 L 293.691 338.953 L 288.094 299.419 Z"
      },
      2: {
        id: 2,
        center: [267.3043635314838, 184.56426594084508],
        neighbours: [9, 16, 19, 10, 15],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 17,
          satisfaction: 3,
        },
        d: "M 271.303 125 L 206.378 183.14 L 258.99 227.326 L 316.079 227.326 L 304.885 170.349 L 271.303 125 Z"
      },
      3: {
        id: 3,
        center: [364.49614783627254, 429.4766487246713],
        neighbours: [1, 26, 27, 6, 24, 22],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 16,
          satisfaction: 3,
        },
        d: "M 417.945 487.791 L 396.677 384.302 L 376.527 338.953 L 316.079 384.302 L 327.274 472.674 L 332.871 504.07 L 417.945 487.791 Z"
      },
      4: {
        id: 4,
        center: [549.2825938688015, 349.49439460240444],
        neighbours: [5, 27],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 3,
          satisfaction: 3,
        },
        d: "M 531.005 433.14 L 595.93 350.581 L 595.93 278.488 L 494.065 330.814 L 499.662 350.581 L 531.005 433.14 Z"
      },
      5: {
        id: 5,
        center: [533.2407415603383, 251.73942531804778],
        neighbours: [4, 26, 20],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 4,
          satisfaction: 3,
        },
        d: "M 494.065 330.814 L 471.677 227.326 L 569.065 170.349 L 595.93 278.488 L 494.065 330.814 Z"
      },
      6: {
        id: 6,
        center: [405.0520492283898, 536.5127320368211],
        neighbours: [27, 3, 25],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 24,
          satisfaction: 3,
        },
        d: "M 494.065 472.674 L 471.677 575 L 316.079 595.93 L 332.871 504.07 L 494.065 472.674 Z"
      },
      7: {
        id: 7,
        center: [51.379601874293144, 160.18783363060007],
        neighbours: [21, 12, 30],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 8,
          satisfaction: 3,
        },
        d: "M 1.527 248.256 L 47.423 59.884 L 102.274 72.674 L 69.811 191.279 L 60.856 258.721 L 1.527 248.256 Z"
      },
      8: {
        id: 8,
        center: [148.34558356591157, 539.5465832601959],
        neighbours: [32, 31, 25],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 8,
          satisfaction: 3,
        },
        d: "M 60.856 509.884 L 119.065 575 L 206.378 595.93 L 206.378 498.256 L 191.826 504.07 L 92.199 498.256 L 60.856 509.884 Z"
      },
      9: {
        id: 9,
        center: [220.1415040733611, 120.05054232151662],
        neighbours: [21, 28, 2, 11],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 3,
        },
        d: "M 191.826 104.07 L 178.393 163.372 L 206.378 183.14 L 271.303 125 L 216.93 42.07 L 191.826 104.07 Z"
      },
      10: {
        id: 10,
        center: [299.98341355586166, 258.9306346799095],
        neighbours: [2, 18, 1, 15],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 2,
        },
        d: "M 316.079 227.326 L 258.99 227.326 L 288.094 299.419 L 341.826 278.488 L 316.079 227.326 Z"
      },
      11: {
        id: 11,
        center: [180.5932453607378, 236.10363363970148],
        neighbours: [12, 9, 15, 14],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 12,
          satisfaction: 3,
        },
        d: "M 142.572 274.07 L 200.781 299.419 L 206.378 183.14 L 178.393 163.372 L 142.572 274.07 Z"
      },
      12: {
        id: 12,
        center: [115.17614586151794, 205.471313259939],
        neighbours: [7, 21, 11, 29],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 9,
          satisfaction: 3,
        },
        d: "M 178.393 163.372 L 83.93 134.302 L 69.811 187.07 L 60.856 258.721 L 142.572 274.07 L 178.393 163.372 Z"
      },
      13: {
        id: 13,
        center: [254, 334],
        neighbours: [1, 15, 14, 23],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 12,
          satisfaction: 2.5,
        },
        d: "M 288.094 299.419 L 293.691 330.814 L 316.079 384.302 L 230.93 369.186 L 200.781 299.419 Z"
      },
      14: {
        id: 14,
        center: [174.5176271678008, 341.64908319388826],
        neighbours: [11, 23, 31, 29, 13],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 15,
          satisfaction: 3,
        },
        d: "M 200.781 299.419 L 142.572 270.349 L 128.02 325 L 128.02 369.186 L 200.781 407.558 L 230.93 369.186 L 200.781 299.419 Z"
      },
      15: {
        id: 15,
        center: [235.59334524496543, 255.90051260551994],
        neighbours: [11, 2, 10, 13],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 9,
          satisfaction: 2.5,
        },
        d: "M 206.378 183.14 L 200.781 299.419 L 288.094 299.419 L 258.99 227.326 L 206.378 183.14 Z"
      },
      16: {
        id: 16,
        center: [322.495449796645, 127.86136261697324],
        neighbours: [17, 28, 19, 2],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 10,
          satisfaction: 3,
        },
        d: "M 271.303 125 L 304.885 170.349 L 376.527 134.302 L 332.871 83.07 L 271.303 125 Z"
      },
      17: {
        id: 17,
        center: [366.15242922031666, 59.81570431068932],
        neighbours: [28, 16, 20],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 13,
          satisfaction: 3,
        },
        d: "M 396.677 34.07 L 445.93 59.884 L 376.527 134.302 L 327.274 83.07 L 293.691 4.07 L 361.93 4.07 L 396.677 34.07 Z"
      },
      18: {
        id: 18,
        center: [348.963114558733, 247.54523350644263],
        neighbours: [0, 10, 22, 19],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 25,
          satisfaction: .5,
        },
        d: "M 357.497 227.326 L 316.079 227.326 L 341.826 278.488 L 385.482 248.256 L 357.497 227.326 Z"
      },
      19: {
        id: 19,
        center: [359.10230200148163, 182.62589071278572],
        neighbours: [16, 20, 22, 18, 2],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 10,
          satisfaction: 3,
        },
        d: "M 376.527 134.302 L 427.93 170.349 L 357.497 227.326 L 316.079 227.326 L 304.885 170.349 L 376.527 134.302 Z"
      },
      20: {
        id: 20,
        center: [472.60836683206213, 143.51690143298032],
        neighbours: [17, 19, 22, 5],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 3,
        },
        d: "M 445.93 59.884 L 376.527 134.302 L 427.93 170.349 L 471.677 227.326 L 569.065 170.349 L 515.93 104.07 L 445.93 59.884 Z"
      },
      21: {
        id: 21,
        center: [149.10177960400804, 103.97113835199339],
        neighbours: [7, 12, 9],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 13,
          satisfaction: 3,
        },
        d: "M 216.93 46.07 L 191.826 104.07 L 178.393 163.372 L 83.93 134.302 L 102.274 72.674 L 216.93 46.07 Z"
      },
      22: {
        id: 22,
        center: [416.357533382825, 223.91499999999994],
        neighbours: [19, 20, 18, 0, 26],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 3,
        },
        d: "M 427.93 170.349 L 357.497 227.326 L 410.109 274.07 L 471.677 227.326 L 427.93 170.349 Z"
      },
      23: {
        id: 23,
        center: [272.06216781295524, 408.75875386108345],
        neighbours: [13, 3, 24, 14],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 14,
          satisfaction: 3,
        },
        d: "M 327.274 461.07 L 316.079 384.302 L 230.93 369.186 L 200.781 407.558 L 327.274 461.07 Z"
      },
      24: {
        id: 24,
        center: [259.1691321770674, 466.11881726605463],
        neighbours: [23, 25, 3, 31],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 6,
          satisfaction: 3,
        },
        d: "M 332.871 504.07 L 206.378 498.256 L 200.781 407.558 L 327.274 461.07 L 332.871 504.07 Z"
      },
      25: {
        id: 25,
        center: [265.3929252104237, 546.4685211894416],
        neighbours: [6, 8, 24],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 10,
          satisfaction: 3,
        },
        d: "M 316.079 595.93 L 332.871 504.07 L 206.378 498.256 L 206.378 592.07 L 316.079 595.93 Z"
      },
      26: {
        id: 26,
        center: [437.29631496476, 310.95392413330944],
        neighbours: [0, 22, 5, 21, 3],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 12,
          satisfaction: 3,
        },
        d: "M 494.065 330.814 L 471.677 227.326 L 410.109 274.07 L 376.527 338.953 L 396.677 384.302 L 494.065 330.814 Z"
      },
      27: {
        id: 27,
        center: [462.57837129288873, 414.80118886951584],
        neighbours: [4, 26, 3, 6],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 17,
          satisfaction: 3,
        },
        d: "M 531.005 433.14 L 494.065 330.814 L 396.677 384.302 L 417.945 487.791 L 494.065 472.674 L 531.005 433.14 Z"
      },
      28: {
        id: 28,
        center: [277.70385649649614, 64.4034867136583],
        neighbours: [9, 16, 17],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 3,
        },
        d: "M 216.93 46.07 L 293.691 4.07 L 332.871 87 L 271.303 125 L 216.93 46.07 Z"
      },
      29: {
        id: 29,
        center: [95.91565805574388, 332.3656426332298],
        neighbours: [30, 12, 14, 31],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 15,
          satisfaction: 3,
        },
        d: "M 60.856 258.721 L 142.572 274.07 L 132 320 L 128.02 369.186 L 92.199 433.14 L 60.856 369.186 L 60.856 258.721 Z"
      },
      30: {
        id: 30,
        center: [36.144797136023726, 350.6805699645677],
        neighbours: [7, 29, 32],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 20,
          satisfaction: 3,
        },
        d: "M 1.527 248.256 L 60.856 258.721 L 65 369.186 L 92.199 425 L 16 450 L 1.527 369.186 L 1.527 248.256 Z"
      },
      31: {
        id: 31,
        center: [149.34006670847907, 446.2217183337742],
        neighbours: [29, 32, 8, 24, 14],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 21,
          satisfaction: 3,
        },
        d: "M 128.02 369.186 L 200.781 407.558 L 206.378 498.256 L 191.826 504.07 L 102.274 504.07 L 92.199 425 L 128.02 369.186 Z"
      },
      32: {
        id: 32,
        center: [67.76010085444237, 466.3781816093527],
        neighbours: [30, 31, 8],
        metro: {
          capacity: 0,
          stations: 0,
          neighbouring: 0,
          population: 14,
          satisfaction: 3,
        },
        d: "M 16 450 L 69.811 514 L 102.274 498.256 L 92.199 421 L 16 450 Z"
      },
    }
  }
}