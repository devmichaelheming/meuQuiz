interface DataQuestionsProps {
  id: number;
  title: string;
}

interface ListQuestionsProps {
  id: number;
  category: string;
  question: string;
  data: DataQuestionsProps[];
}

const data: ListQuestionsProps[] = [
  {
    id: 1,
    category: "movie",
    question: "Qual seu genêro de filme favorito?",
    data: [
      {
        id: 1,
        title: "Terror",
      },
      {
        id: 2,
        title: "Comédia",
      },
      {
        id: 3,
        title: "Ação",
      },
      {
        id: 4,
        title: "Romance",
      },
      {
        id: 5,
        title: "Aventura",
      },
    ],
  },
  {
    id: 2,
    category: "music",
    question: "Qual seu genêro de musica favorita?",
    data: [
      {
        id: 1,
        title: "funk",
      },
      {
        id: 2,
        title: "sertanejo",
      },
      {
        id: 3,
        title: "pagode",
      },
      {
        id: 4,
        title: "pop",
      },
      {
        id: 5,
        title: "rock",
      },
    ],
  },
  {
    id: 3,
    category: "pet",
    question: "Qual seu pet favorito?",
    data: [
      {
        id: 1,
        title: "Cachorro",
      },
      {
        id: 2,
        title: "Gato",
      },
      {
        id: 3,
        title: "Tartaruga",
      },
      {
        id: 4,
        title: "Coelho",
      },
    ],
  },
  {
    id: 4,
    category: "travel",
    question: "Qual seria a viajem dos seus sonhos?",
    data: [
      {
        id: 1,
        title: "Estados unidos",
      },
      {
        id: 2,
        title: "Dubai",
      },
      {
        id: 3,
        title: "Ilhas Maldivas",
      },
      {
        id: 4,
        title: "Fernando de noronha",
      },
      {
        id: 5,
        title: "Paris",
      },
    ],
  },
  {
    id: 5,
    category: "essence",
    question: "Qual seu sabor de essência favorita?",
    data: [
      {
        id: 1,
        title: "Menta",
      },
      {
        id: 2,
        title: "Maracuja",
      },
      {
        id: 3,
        title: "Love 66",
      },
      {
        id: 4,
        title: "Cereja",
      },
      {
        id: 5,
        title: "Melancia",
      },
    ],
  },
];

export default data;
