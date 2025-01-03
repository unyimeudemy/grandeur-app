import styled, { keyframes } from "styled-components";
import iphone from "../images/iphone.webp";
import microwave from "../images/microwave.webp";
import thermostat from "../images/thermostat.webp";
import doorLock from "../images/realtime-smart-door-lock.png";
import vacuumCleaner from "../images/vacuumCleaner.png";
import lightbulb from "../images/bulb.webp";
import camera from "../images/trueview-camera.webp";
import realtimeicon from "../images/realtimeIcon.webp";
import sensiIcon from "../images/sensiIcon.webp";
import roboIcon from "../images/roboIcon.webp";
import philipsIcon from "../images/philipsIcon.webp";   
import samsungIcon from "../images/samsungIcon.webp";
import trueviewIcon from "../images/trueviewIcon.webp";
import GranduerApp from "../images/grandeurApp.svg"
import { useAnimationControls, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StraightLineLT from "./StraightLineLT";

import StraightLineRT from "./StraightLineRT";
import SevenL from "./SevenL";
import SevenR from "./SevenR";
import BottomSevenL from "./BottomSevenL";
import BottomSevenR from "./BottomSevenR";

import _SevenLTop from "./_SevenLTop";
import _SevenLBottom from "./_SevenLBottom";
import _SevenRTop from "./_SevenRTop";
import _SevenRBottom from "./_SevenRBottom";
import _BottomSevenL from "./_BottomSevenL"
import _BottomSevenR from "./_BottomSevenR"








const Container = styled.div`
    height: 700px;
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;

`

const Iphone = styled.img`
    height: 450px;
    width: 450px;
    margin-top: 280px;
    margin-left: 300px;
    // background-image: url(${iphoneWallPaper});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    object-fit: contain;
`

const Microwave = styled.img`
    position: absolute;
    height: 100px;
    width: 150px;
    bottom: 70px;
    left: 500px;
    // border: 1px solid #5C755E;

`

const Thermostat = styled.img`
    position: absolute;
    height: 100px;
    width: 100px;
    bottom: 330px;
    left: 500px;
    // border: 1px solid #5C755E;

`

const DoorLock = styled.img`
    position: absolute;
    height: 150px;
    width: 150px;
    top: 120px;
    left: 670px;
    // border: 1px solid #5C755E;


`

const VacuumCleaner = styled.img`
    position: absolute;
    height: 100px;
    width: 100px;
    top: 160px;
    right: 410px;
    // border: 1px solid #5C755E;

`

const Lightbulb = styled.img`
    position: absolute;
    height: 135px;
    width: 160px;
    bottom: 340px;
    right: 260px;
    // border: 1px solid #5C755E;


`

const Camera = styled.img`
    position: absolute;
    height: 100px;
    width: 100px;
    bottom: 70px;
    right: 270px;
    // border: 1px solid #5C755E;

`

const AppsWrapper = styled.div`
    height: 150px;
    width: 170px;
    position: absolute;
    bottom: 250px;
    right: 487px;

`

const AppRow = styled.div`
    height: 55px;
    width: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const App = styled(motion.img)`
    height: 35px;
    width: 35px;
    border-radius: 5px;
`

const GranduerAppIcon = styled.img`
    height: 35px;
    width: 35px;
`
const GranduerAppWrapper = styled(motion.div)`
    height: 37px;
    width: 37px;
    border-radius: 5px;
    position: relative;
    right: -67px;
    bottom: -25px;
    background: #FFFFFF;
    padding: 2px;
    border: 1px solid #5C755E;
`

const Describtion = styled.div`
    font-family: Helvetica;
    font-weight: bold;
    font-size: 53px;
    color: #212121;
    width: 600px;
    height: 700px;
    position: absolute;
    top: 230px;
    left: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const First = styled.div`
    width: 600px;
    height: 70px;

`

const Second = styled.div`
    width: 450px;
    height: 70px;
`

const Third = styled.div`
    width: 350px;
    height: 70px;
    display: flex;
    align-items: center;
`

// Keyframes for typing effect
const typing = keyframes`
  from { width: 0; }
  to { width: 70%; }
`;

// Keyframes for blinking cursor effect
const blink = keyframes`
  50% { border-color: transparent; }
`;

// Styled components
const TypingWrapper = styled.div`
  display: inline-block; /* Keep the text inline */
  font-family: Helvetica;
  color: #e63900;
  margin-left: 20px;
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden; /* Hide overflowing text */
  border-right: 2px solid black; /* Cursor */
  width: 0; /* Start hidden */
  animation: 
    ${typing} 4s steps(9, end) forwards, /* Typing effect for 'stressful' */
    ${blink} 0.6s step-end infinite; /* Cursor blink effect */
`;

const TypingWrapper2 = styled.div`
  display: inline-block; /* Keep the text inline */
  font-family: Helvetica;
  color: #5C755E;
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden; /* Hide overflowing text */
  border-right: 2px solid black; /* Cursor */
  width: 0; /* Start hidden */
  animation: 
    ${typing} 4s steps(9, end) forwards, /* Typing effect for 'stressful' */
    ${blink} 0.6s step-end infinite; /* Cursor blink effect */
`;




const MultipleApps = () => {
    const sensiIconAnimate = useAnimationControls();
    const realtimeiconAnimate = useAnimationControls();
    const roboIconAnimate = useAnimationControls();
    const philipsIconAnimate = useAnimationControls();
    const samsungIconAnimate = useAnimationControls();
    const trueviewIconAnimate = useAnimationControls();
    const granduerAppWrapperAnimate = useAnimationControls();


    const animateArrow_1 = useAnimationControls();
    const straightLineLR = useAnimationControls();
    const straightLineRL = useAnimationControls();
    const sevenL = useAnimationControls();
    const sevenR = useAnimationControls();
    const bottomSevenL = useAnimationControls();
    const bottomSevenR = useAnimationControls();

    const _sevenLTop = useAnimationControls();
    const _sevenLBottom = useAnimationControls();
    const _sevenRTop = useAnimationControls();
    const _sevenRBottom = useAnimationControls();
    const _bottomSevenL = useAnimationControls();
    const _bottomSevenR = useAnimationControls();



    const [changeText, setChangeText] = useState(true)
    const [showLines, setShowLines] = useState(true)


    const handleAnimate = async () => {

        animateArrow_1.set("initial")
        straightLineLR.set("initial")
        straightLineRL.set("initial")
        sevenL.set("initial")
        sevenR.set("initial")
        bottomSevenL.set("initial")
        bottomSevenR.set("initial")

        _sevenLTop.set("initial")
        _sevenLBottom.set("initial")
        _sevenRTop.set("initial")
        _sevenRBottom.set("initial")
        _bottomSevenL.set("initial")
        _bottomSevenR.set("initial")


        samsungIconAnimate.set("initial")
        sensiIconAnimate.set("initial")
        realtimeiconAnimate.set("initial")
        roboIconAnimate.set("initial")
        philipsIconAnimate.set("initial")
        trueviewIconAnimate.set("initial")
        granduerAppWrapperAnimate.set("initial")

        await animateArrow_1.start("animate")
        await bottomSevenR.start("animate")
        await straightLineRL.start("animate")
        await sevenL.start("animate")
        await sevenR.start("animate")
        await straightLineLR.start("animate")
        await bottomSevenL.start("animate")





        await new Promise((resolve) => setTimeout(resolve, 1000));
        setChangeText(!changeText)
        await new Promise((resolve) => setTimeout(resolve, 3000));


        setShowLines(!showLines)
        await samsungIconAnimate.start("samsungIconAnimate")
        await sensiIconAnimate.start("sensiIconAnimate")
        await realtimeiconAnimate.start("realtimeiconAnimate")
        await roboIconAnimate.start("roboIconAnimate")
        await philipsIconAnimate.start("philipsIconAnimate")
        await trueviewIconAnimate.start("trueviewIconAnimate")
        await granduerAppWrapperAnimate.start("granduerAppWrapperAnimate")


        await Promise.all([
            _sevenLTop.start("animate"),
            _sevenLBottom.start("animate"),
            _sevenRTop.start("animate"),
            _sevenRBottom.start("animate"),
            _bottomSevenL.start("animate"),
            _bottomSevenR.start("animate")
          ]);
    }

    useEffect(() => {
        handleAnimate();
    },[])


    return (
        <Container>
            { showLines ? <div>
            <StraightLineLT animateLine={straightLineLR}/>
            <StraightLineRT animateLine={straightLineRL}/>
            <SevenL animateLine={sevenL}/>
            <SevenR animateLine={sevenR}/>
            <BottomSevenL animateLine={bottomSevenL}/>
            <BottomSevenR animateLine={bottomSevenR}/>
            </div>:
            <div>
                <_SevenLTop animateLine={_sevenLTop}/>
                <_SevenLBottom animateLine={_sevenLBottom}/>
                <_SevenRTop animateLine={_sevenRTop}/>
                <_SevenRBottom animateLine={_sevenRBottom}/>
                <_BottomSevenL animateLine={_bottomSevenL}/>
                <_BottomSevenR animateLine={_bottomSevenR}/>

            </div>
            
            }
            <AnimatePresence>
                <motion.div
                    key={changeText ? 'first' : 'second'} // Change the key to force remount on text change
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                >
                {   changeText ?
                    <Describtion>
                    <First>Operating </First>
                    <First>devices from </First>
                    <Second>different</Second>
                    <Second>Manufacturers</Second>
                    <Third>is <TypingWrapper> stressful</TypingWrapper></Third>
                </Describtion> :
                <Describtion>
                    <First>The Grandeur </First>
                    <First>app brings  </First>
                    <Second>everything</Second>
                    <Third><TypingWrapper2> together</TypingWrapper2></Third>
                </Describtion>}
                </motion.div>
            </AnimatePresence>
            {/* <Arrow animateArrow={animateArrow_1}/> */}
            <Iphone src={iphone}></Iphone>
            <Microwave src={microwave}></Microwave>
            <Thermostat src={thermostat}></Thermostat>
            <DoorLock src={doorLock}></DoorLock>
            <VacuumCleaner src={vacuumCleaner}></VacuumCleaner>
            <Lightbulb src={lightbulb}></Lightbulb>
            <Camera src={camera}></Camera>
            <AppsWrapper>
                <AppRow>
                    <App
                        src={sensiIcon}
                        variants={{
                            initial:{ x:0, y:0},
                            sensiIconAnimate:{ x:67, y:125} 
                        }}
                        initial="initial"
                        animate={sensiIconAnimate}
                        transition={{duration: 1.5}}
                    />
                    <App 
                        src={realtimeicon}
                        variants={{
                            initial:{ x:0, y:0},
                            realtimeiconAnimate:{ x:21.9, y:125} 
                        }}
                        initial="initial"
                        animate={realtimeiconAnimate}
                        transition={{duration: 1.5}}
                    />
                    <App 
                        src={roboIcon}
                        variants={{
                            initial:{ x:0, y:0},
                            roboIconAnimate:{ x:-22.9, y:125} 
                        }}
                        initial="initial"
                        animate={roboIconAnimate}
                        transition={{duration: 1.5}}
                    />
                    <App 
                        src={philipsIcon}
                        variants={{
                            initial:{ x:0, y:0},
                            philipsIconAnimate:{ x:-68, y:125} 
                        }}
                        initial="initial"
                        animate={philipsIconAnimate}
                        transition={{duration: 1.5}}
                    />
                </AppRow>
                <AppRow>
                    <App 
                        src={samsungIcon}
                        variants={{
                            initial:{ x:0, y:0},
                            samsungIconAnimate:{ x:68, y:70} 
                        }}
                        initial="initial"
                        animate={samsungIconAnimate}
                        transition={{duration: 1.5}}
                    />
                    <App 
                        src={trueviewIcon}
                        variants={{
                            initial:{ x:0, y:0},
                            trueviewIconAnimate:{ x:-68, y:70} 
                        }}
                        initial="initial"
                        animate={trueviewIconAnimate}
                        transition={{duration: 1.5}}
                    />
                </AppRow>
                <GranduerAppWrapper
                    variants={{
                        initial: { opacity: 0, scale: 1 }, // Initially invisible and original size
                        granduerAppWrapperAnimate: {
                        opacity: 1,  
                        scale: [1, 1.2, 1], 
                        },
                    }}
                    initial="initial"
                    animate={granduerAppWrapperAnimate}
                    transition={{
                        opacity: { duration: 1.5 }, // Fade-in effect
                        scale: { duration: 1.5, times: [0, 0.5, 1] }, // Grow and shrink
                    }}
                >
                    <GranduerAppIcon src={GranduerApp}/>
                </GranduerAppWrapper>
            </AppsWrapper>
        </Container>
    )
}

export default MultipleApps;