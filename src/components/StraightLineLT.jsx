
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 405px;
  right: 350px;
`;

const HorizontalLine = styled.div`
  position: relative;
  width: 150px; /* Length of the horizontal line */
  height: 2px;
  background-color: #e6e6e6;
`;

const FillLineHorizontal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Match the width of the horizontal line */
  height: 2px;
  background-color: #67b2e4;
  transform-origin: left;
`;

const StraightLineLT = ({ animateLine }) => {
  const fillLineHorizontalVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <ArrowContainer>
      <HorizontalLine>
        <FillLineHorizontal
          variants={fillLineHorizontalVariants}
          initial="initial"
          animate={animateLine}
        />
      </HorizontalLine>
    </ArrowContainer>
  );
};

export default StraightLineLT;
