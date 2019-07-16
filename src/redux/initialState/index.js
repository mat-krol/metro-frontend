export const initialState = {
  user: {
    stars: 7
  },
  quiz: {
    ongoing: false,
    round: {
      timer: 180000,
      tiers: [2, 3, 4],
      id: 0,
      stars: 0,
      score: 0,
      questions: {
        0: {
          prompt: "0 + 0 = 0",
          answer: "0"
        }
      }
    },
    question: {
      id: 0,
      disabled: false,
      user: {
        correctness: 0,
        answer: "",
      }
    }
  },
  list: {
    0: {
      id: 0,
      name: "Addition 1",
      tiers: [2, 3, 5],
      timer: 180000,
      stars: 2,
      questions: {
        0: {
          prompt: "x + 1 = 1",
          answer: "0"
        },
        1: {
          prompt: "x + 1 = 2",
          answer: "1"
        },
        2: {
          prompt: "x + 1 = 3",
          answer: "2"
        },
        3: {
          prompt: "x + 1 = 4",
          answer: "3"
        },
        4: {
          prompt: "x + 1 = 5",
          answer: "4"
        },
        5: {
          prompt: "x + 1 = 6",
          answer: "5"
        },
        6: {
          prompt: "x + 1 = 7",
          answer: "6"
        }
      }
    },
    1: {
      id: 1,
      name: "Addition 2",
      tiers: [5, 10, 15],
      timer: 180000,
      stars: 0,
      questions: {
        0: {
          prompt: "x + 2 = 2",
          answer: "0"
        },
        1: {
          prompt: "x + 2 = 3",
          answer: "1"
        },
        2: {
          prompt: "x + 2 = 4",
          answer: "2"
        },
        3: {
          prompt: "x + 2 = 5",
          answer: "3"
        },
        4: {
          prompt: "x + 2 = 6",
          answer: "4"
        },
        5: {
          prompt: "x + 2 = 7",
          answer: "5"
        },
        6: {
          prompt: "x + 2 = ",
          answer: "6"
        }
      }
    },
    2: {
      id: 2,
      name: "Addition 3",
      tiers: [5, 10, 15],
      timer: 180000,
      stars: 0,
      questions: {
        0: {
          prompt: "x + 0 = 0",
          answer: "0"
        },
        1: {
          prompt: "x + 0 = 1",
          answer: "1"
        },
        2: {
          prompt: "x + 0 = 2",
          answer: "2"
        },
        3: {
          prompt: "x + 0 = 3",
          answer: "3"
        },
        4: {
          prompt: "x + 0 = 4",
          answer: "4"
        },
        5: {
          prompt: "x + 0 = 5",
          answer: "5"
        },
        6: {
          prompt: "x + 0 = 6",
          answer: "6"
        }
      }
    }
  }
}