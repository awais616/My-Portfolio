import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col xl:flex-row gap-20"
    >
      {/* part One */}
      <div className="pt-14 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]"> 2016- 2024</p>
        <h2 className="text-4xl font-bold">Education</h2>
      </div>

      {/* part two */}

      <div className="w-full md:full lgl:w-1/2 h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="ADP in Computer Science"
          subTitle="Superior University 2023-2024"
          des="Provides students with foundational knowledge and skills in computer programming, software development,computer systems, and data analysis."
        />

        <ResumeCard
          title="Intermediate in Computer Science"
          subTitle="Government Khawaja Rafique Shaheed College 2016-2017"
          des=" Individuals at this stage have a solid understanding of fundamental programming languages, data structures, algorithms, and software development principles."
        />
      </div>
    </motion.div>
  );
};

export default Education;
