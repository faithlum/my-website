import React, {Fragment, useState} from "react";
import "./DeepBreathe.css"
// import PredTimeGraph from "../../Components/GraphAndViewer/PredTimeGraph";
// import FrameViewer from "../../Components/GraphAndViewer/FrameViewer.js"
import { Grid, Paper } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";


function DeepBreathe() {
    const [state, setState] = useState({
        probsList: [0.1,0.5,0.3,0.8,0.5,0.6,0.7,0.2,0.3],
        classThresh: 0.5,
        videoURL: "https://www.youtube.com/watch?v=O9XtK6R1QAk",
        isExpanded1: false,
        isExpanded2: false,
        isExpanded3: true,
        isExpanded4: true,
    })

    const handleState = (data) => {
        setState((prevState) => ({
            ...prevState, ...data
        }));
    }

    const toggleExpansion1 = () => {
        let isExpanded = !(state.isExpanded1)
        const data = {
            isExpanded1: isExpanded,
        }
        handleState(data);
    };

    const toggleExpansion2 = () => {
        let isExpanded = !(state.isExpanded2)
        const data = {
            isExpanded2: isExpanded,
        }
        handleState(data);
    };

    const toggleExpansion3 = () => {
        let isExpanded = !(state.isExpanded3)
        const data = {
            isExpanded3: isExpanded,
        }
        handleState(data);
    };

    const toggleExpansion4 = () => {
        let isExpanded = !(state.isExpanded4)
        const data = {
            isExpanded4: isExpanded,
        }
        handleState(data);
    };

    return (
        <>
            <div className="parent">
                <div className="left">
                    <div className="left-sub">
                        <h1>Deep Breathe</h1>
                        <div>
                            <Accordion expanded={state.isExpanded1} onChange={toggleExpansion1} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMore/>} sx={{ marginTop: "20px" }}>
                                    <Typography variant="h6" color="#F6A000" fontFamily="'Quicksand', sans-serif" fontSize="40px" fontWeight='500'>Reflection </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ paddingTop: "0px" }}>
                                    <Typography variant="body1" color="white" fontFamily="'Quicksand', sans-serif" fontWeight='100' >
                                        <p>Grateful to be part of such an interdisciplinary and collaborative team of engineers, clinicians, and researchers.</p>
                                        <p>As a student, it was inspiring to meet mentors, experts in their field, with the open-mindedness, foresight, and energy to innovate upon systems they've used for years. </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion expanded={state.isExpanded2} onChange={toggleExpansion2} sx={{ backgroundColor: "transparent", boxShadow: "none" }} >
                                <AccordionSummary expandIcon={<ExpandMore/>} sx={{ marginTop: "20px" }}>
                                    <Typography variant="h6" color="#F6A000" fontFamily="'Quicksand', sans-serif" fontSize="40px" fontWeight='500'>Learning</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ paddingTop: "0px" }}>
                                    <Typography variant="body1" color="white" fontFamily="'Quicksand', sans-serif" fontWeight='100' >
                                        <p>Working independently, I learned how to use a wider array of technologies throughout the design process and gained a deeper understanding on how they work and connect.</p>
                                        <p>I not only had to technically implement each feature but also consider how to architect my codebase to allow for efficient iteration.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion expanded={state.isExpanded3} onChange={toggleExpansion3} sx={{ backgroundColor: "transparent", boxShadow: "none" }} >
                                <AccordionSummary expandIcon={<ExpandMore/>} sx={{ marginTop: "20px" }}>
                                    <Typography variant="h6" color="#F6A000" fontFamily="'Quicksand', sans-serif" fontSize="40px" fontWeight='500'>Takeaways</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ paddingTop: "0px" }}>
                                    <Typography variant="body1" color="white" fontFamily="'Quicksand', sans-serif" fontWeight='100' >
                                        <p>I think I have a more nuanced appreciation for  the work that goes into ideating, designing, and implementing a project.</p>
                                        <p>The tension between designing my ideal version release on paper and realizing the time and effort it takes to actually write code taught me how to listen to different perspectives, prioritize what is most important, and deliver a product users actually need.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-sub">
                        <div>
                            <img src="/memory_palace_lungs_upscaled.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parent2">
            <Grid container spacing={2} justify="center" style={{borderWidth: '10vh', borderColor: 'blue', borderStyle: 'solid' }}>
                <Grid container spacing={2} justify="center">
                    {/* Column 1 */}
                    <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                        <Grid item>
                            <Paper style={{ height: "40vh", background: "orange", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                               <h1>Problem Definition</h1>
                               <h3>What is the app's purpose?</h3>
                               <h3>Who are our users?</h3>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: "40vh", background: "green", display: "flex", justifyContent: "center", alignItems: "center" }}>TEST2</Paper>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={8} spacing={2}>
                        <Grid item style={{ marginLeft: "auto" }}>
                            <div style={{ height: "40vh", width: "60vh", background: "orange", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: 'Quicksand'}}>                                
                                <ol>
                                    <li>
                                        Internal tool for clinicans to test machine learning models with different parameters so they can provide nuanced feedback on results and analyze complex cases
                                        <ul style={{ listStyleType: "disc", marginLeft: "1em" }}>
                                            <li>
                                                Improve their understanding of how the model performs in different situations
                                            </li>
                                            <li>
                                                Efficiently test samples with a standard workflow
                                            </li>
                                            <li>
                                                Visualize results
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: "40vh", background: "green", display: "flex", justifyContent: "center", alignItems: "center" }}>Content2</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
            {/* <div className="parent2"> 
                <div className="left2">
                    <div className="left-sub2">
                        <h1 style={{fontSize: "40px", fontWeight: 700, color: "white"}}>Feature Highlight</h1>
                        <Typography variant="body1" color="white" fontFamily="'Quicksand', sans-serif" fontWeight='100' fontSize='25px' marginTop="20px">
                            <p>Grateful to be part of such an interdisciplinary and collaborative team of engineers, clinicians, and researchers.</p>
                        </Typography>
                    </div>
                </div>
                <div className="right2">
                    <div className="right-sub">
                        <Grid container spacing={2} style={{ height: '100vh' }}s>
                            <Grid item xs={12} style={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FrameViewer videoURL={state.videoURL} frame={state.frame} />
                            </Grid>
                            <Grid item xs={12} style={{ backgroundColor: 'white', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{ height: "40vh", width: "100vh" }}>
                                    <PredTimeGraph probsList={state.probsList} setState={handleState} classThresh={state.classThresh}/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div> */}
            {/* <div className="parent3">
                <div className="parent2-sub" style={{ display: "flex", flexDirection: "column" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: 700, color: "#0F0F10", marginBottom: "20px", textAlign: "left" }}>Design Process</h1>
                    <div className="parent3-center"> 
                        <img src="/flowchart.png" alt="Flowchart" style={{ maxWidth: "100%" }} />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default DeepBreathe