import React from "react";
import Hello from "../src/components/hello/hello";
import axios from "axios"


const Home: React.FC = () => {
  const passage =
    "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware";
  const question = "What's Google?";

  const handleClick = async (): void => {
    axios.post("/api/hello", { data: "Hi there" }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  };

  return (
    <div>
      <Hello name="Prottay" />
      <button onClick={handleClick}>Get Result</button>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   const tf = require("@tensorflow/tfjs-node");
//   const qna = require("@tensorflow-models/qna");
//   const model = await qna.load();

//   return {
//     props: { model }, // will be passed to the page component as props
//   };
// }


// export async function getStaticProps(context) {
//   const tf = require("@tensorflow/tfjs-node");
//   const qna = require("@tensorflow-models/qna");
//   let model = await qna.load();
//   model = JSON.parse(JSON.stringify(model))

//   return {
//     props: { model }, // will be passed to the page component as props
//   };
// }