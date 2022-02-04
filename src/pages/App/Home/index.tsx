import { AuthContext } from "~/context/authContext";
import React, { useContext, useState } from "react";

import data from "./data";
import { Container, Header, Question, Body } from "./styles";

interface QuestionsProps {
  id_user: string | undefined;
  movie: number | null;
  music: number | null;
  pet: number | null;
  travel: number | null;
  essence: number | null;
}

const Home: React.FC = () => {
  const [listQuestions, setListQuestions] = useState<QuestionsProps>(
    {} as QuestionsProps
  );
  const [question, setQuestion] = useState(1);
  const [titleQuestion, setTitleQuestion] = useState("");
  const { user } = useContext(AuthContext);

  const handleSelectQuestion = (id: number, category: string) => {
    data.forEach((item) => {
      if (question !== item.id) {
        setQuestion(item.id);
      }
    });
    setListQuestions({
      id_user: user.id,
      movie: category === "movie" ? id : null,
      music: category === "music" ? id : null,
      pet: category === "pet" ? id : null,
      travel: category === "travel" ? id : null,
      essence: category === "essence" ? id : null,
    });
  };

  console.log(listQuestions);

  return (
    <Container>
      <Header>
        <Question>{titleQuestion}</Question>
      </Header>
      <Body>
        <ul>
          {data
            .filter((item) => item.id === question)
            .map((value) => {
              return (
                <>
                  {value.question}
                  {/* {setTitleQuestion(value.question)} */}
                  {value.data.map((itemData) => {
                    return (
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectQuestion(itemData.id, value.category)
                        }
                        key={itemData.id}
                      >
                        <li>{itemData.title}</li>
                      </button>
                    );
                  })}
                </>
              );
            })}
        </ul>
      </Body>
    </Container>
  );
};

export default Home;
