import React from "react";
import Hello from "../src/components/hello/hello";

const Home: React.FC = () => {
  return <Hello name="Prottay" />;
};

export default Home;


export async function getServerSideProps(context) {
  const tf = require('@tensorflow/tfjs-node');
  const qna = require('@tensorflow-models/qna');
  async function runQna() {
    const model = await qna.load();
    const passage = 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware'
    const question = "What's Google?"
    // Finding the answers
    const answers = await model.findAnswers(question, passage);

    console.log('Answers: ');
    console.log(answers);
  }

  runQna()
  return {
    props: {}, // will be passed to the page component as props
  }
}