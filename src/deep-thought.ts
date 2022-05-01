const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const strAnswers: string[] = ["forty two", "fortytwo"];

const removeSpaces = (answer: string) => {
  return answer.replace(" ", "");
};

const getValidityAsync = async (answer: unknown) => {
  await delay(500);
  if (typeof answer === "number" && answer === 42) {
    return true;
  }
  if (typeof answer === "string" && parseInt(answer, 10) === 42) {
    return true;
  }
  if (typeof answer === "string" && strAnswers.includes(answer.toLowerCase())) {
    return true;
  }
  if (
    typeof answer === "string" &&
    strAnswers.includes(removeSpaces(answer).toLowerCase())
  ) {
    return true;
  }
  return false;
};

export interface AnswerApi {
  question: string;
  getValidityAsync(unknown: any): void;
}

export const answerApi = {
  question: "What is the answer to Life, the Universe and Everything?",
  getValidityAsync: (answer: any) => getValidityAsync(answer)
};
