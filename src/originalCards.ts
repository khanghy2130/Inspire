export type SubjectType = "science" | "technology" | "engineering" | "math"
export type BodyType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
// ability: byName | byBody | byGender | bySubject | byRandom
export type AbilityType = 0 | 1 | 2 | 3 | 4

type OriginalCard = {
  name: string
  isMale: boolean
  subject: SubjectType
  body: BodyType
  ability: AbilityType
}

const originalCards: OriginalCard[] = [
  // BODY 0
  {
    name: "andrew",
    isMale: true,
    subject: "math",
    body: 0,
    ability: 0,
  },
  {
    name: "chloe",
    isMale: false,
    subject: "engineering",
    body: 0,
    ability: 1,
  },
  {
    name: "ryan",
    isMale: true,
    subject: "technology",
    body: 0,
    ability: 3,
  },
  {
    name: "sophia",
    isMale: false,
    subject: "science",
    body: 0,
    ability: 2,
  },

  // BODY 1
  {
    name: "amanda",
    isMale: false,
    subject: "science",
    body: 1,
    ability: 1,
  },
  {
    name: "connor",
    isMale: true,
    subject: "math",
    body: 1,
    ability: 0,
  },
  {
    name: "rose",
    isMale: false,
    subject: "engineering",
    body: 1,
    ability: 2,
  },
  {
    name: "steve",
    isMale: true,
    subject: "technology",
    body: 1,
    ability: 4,
  },

  // BODY 2
  {
    name: "adam",
    isMale: true,
    subject: "technology",
    body: 2,
    ability: 2,
  },
  {
    name: "julia",
    isMale: false,
    subject: "science",
    body: 2,
    ability: 0,
  },
  {
    name: "richard",
    isMale: true,
    subject: "math",
    body: 2,
    ability: 1,
  },
  {
    name: "wendy",
    isMale: false,
    subject: "engineering",
    body: 2,
    ability: 3,
  },

  // BODY 3
  {
    name: "abigail",
    isMale: false,
    subject: "engineering",
    body: 3,
    ability: 4,
  },
  {
    name: "justin",
    isMale: true,
    subject: "technology",
    body: 3,
    ability: 1,
  },
  {
    name: "rebecca",
    isMale: false,
    subject: "science",
    body: 3,
    ability: 0,
  },
  {
    name: "walter",
    isMale: true,
    subject: "math",
    body: 3,
    ability: 2,
  },

  // BODY 4
  {
    name: "emily",
    isMale: false,
    subject: "math",
    body: 4,
    ability: 3,
  },
  {
    name: "jimmy",
    isMale: true,
    subject: "engineering",
    body: 4,
    ability: 2,
  },
  {
    name: "linda",
    isMale: false,
    subject: "technology",
    body: 4,
    ability: 0,
  },
  {
    name: "warren",
    isMale: true,
    subject: "science",
    body: 4,
    ability: 1,
  },

  // BODY 5
  {
    name: "eric",
    isMale: true,
    subject: "science",
    body: 5,
    ability: 2,
  },
  {
    name: "jessica",
    isMale: false,
    subject: "math",
    body: 5,
    ability: 4,
  },
  {
    name: "liam",
    isMale: true,
    subject: "engineering",
    body: 5,
    ability: 1,
  },
  {
    name: "wanda",
    isMale: false,
    subject: "technology",
    body: 5,
    ability: 0,
  },

  // BODY 6
  {
    name: "emma",
    isMale: false,
    subject: "technology",
    body: 6,
    ability: 1,
  },
  {
    name: "colin",
    isMale: true,
    subject: "science",
    body: 6,
    ability: 3,
  },
  {
    name: "laura",
    isMale: false,
    subject: "math",
    body: 6,
    ability: 2,
  },
  {
    name: "scott",
    isMale: true,
    subject: "engineering",
    body: 6,
    ability: 0,
  },

  // BODY 7
  {
    name: "ethan",
    isMale: true,
    subject: "engineering",
    body: 7,
    ability: 0,
  },
  {
    name: "clara",
    isMale: false,
    subject: "technology",
    body: 7,
    ability: 2,
  },
  {
    name: "lucas",
    isMale: true,
    subject: "science",
    body: 7,
    ability: 4,
  },
  {
    name: "susan",
    isMale: false,
    subject: "math",
    body: 7,
    ability: 1,
  },
]

export default originalCards
