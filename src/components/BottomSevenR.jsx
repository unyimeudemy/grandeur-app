import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-top: 22px;
  position: absolute;
  top: 438px;
  left: 600px; /* Adjusted position for visibility */
`;

const ArrowLine = styled.div`
  position: relative;
  width: 2px;
  height: 200px;
  background-color: #e6e6e6;
  overflow: hidden;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 0px; /* Keep the line at the top of the vertical line */
  left: 2px; /* Position the horizontal line to extend leftward */
  width: 180px; /* Length of the horizontal line */
  height: 2px;
  background-color: #e6e6e6;
`;

const FillLineVertical = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #67b2e4;
  transform-origin: top;
`;

const FillLineHorizontal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0; /* Ensure the animation starts from the left side */
  width: 100%;
  height: 2px;
  background-color: #67b2e4;
  transform-origin: right; /* Ensures the animation flows from left to right */
`;

const BottomSevenR = ({ animateLine }) => {

    const fillLineHorizontalVariants = {
        initial: { scaleX: 0 },
        animate: {
          scaleX: 1,
          transition: { duration: 2, duration: 1, ease: "easeInOut" },
        },
      };

  const fillLineVerticalVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { delay: 2, ease: "easeInOut" },
    },
  };



  return (
    <ArrowContainer>
      {/* Vertical Line */}
      <ArrowLine>
        <FillLineVertical
          variants={fillLineVerticalVariants}
          initial="initial"
          animate={animateLine}
        />
      </ArrowLine>
      {/* Horizontal Line */}
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

export default BottomSevenR;
