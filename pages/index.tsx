import React from "react";
import Hello from "../src/components/hello/hello";
import axios from "axios"


const Home: React.FC = () => {

  const handleClick = async () => {
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