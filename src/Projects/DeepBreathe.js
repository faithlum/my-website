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
        isExpanded1: true,
        isExpanded2: false,
        isExpanded3: false,
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
                                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#F6A000' }}/> } sx={{ marginTop: "20px" }}>
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
                                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#F6A000' }}/>} sx={{ marginTop: "20px" }}>
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
                                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#F6A000' }}/>} sx={{ marginTop: "20px" }}>
                                    <Typography variant="h6" color="#F6A000" fontFamily="'Quicksand', sans-serif" fontSize="40px" fontWeight='500'>Takeaways</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ paddingTop: "0px" }}>
                                    <Typography variant="body1" color="white" fontFamily="'Quicksand', sans-serif" fontWeight='100' >
                                        <p>I have a more nuanced appreciation for what it takes to ideate, design, implement, and test a project.</p>
                                        <p>The tension between imagining my ideal version release on paper and realizing the time and effort it takes to actually write code taught me how to listen to different perspectives, prioritize what is most important, and deliver a product users actually need.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-sub">
                        <div>
                            <img src="/lungs.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parent2">
                <Grid container spacing={2} justify="center" style={{borderWidth: '10vh', borderStyle: 'solid', borderColor: 'transparent' }}>
                    <Grid container spacing={2} justify="center">
                        {/* Column 1 */}
                        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                                <h1 style={{ color: "white", fontFamily: "'Quicksand', sans-serif", fontWeight: "bold" }}>Problem Definition</h1>
                                <br/>
                                <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif" }}>What is the app's purpose?</h3>
                                <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif"}}>Who are our users?</h3>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                                <h1 style={{ color: "white", fontFamily: "'Quicksand', sans-serif", fontWeight: "bold" }}>Brainstorming</h1>
                                <br/>
                                <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif" }}>What features would help support our research?</h3>
                                <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif" }}>Any cool ideas you've wanted to try?</h3>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={8} spacing={2}>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: 'Quicksand'}}>                                
                                    <ol style={{ listStyleType: "none", padding: 0 }}>
                                        <li style={{ color: "white", fontFamily: "'Quicksand', sans-serif", fontSize: "23px"}}>
                                            <p>Internal tool for clinicans to test machine learning models with different parameters and visualize results</p>
                                            <br />
                                            Goals: 
                                            <ul style={{ listStyleType: "disc", marginLeft: "2em" }}>
                                                <li>
                                                    Improve user understanding of how the model performs
                                                </li>
                                                <li>
                                                    Create workflow to automatically run samples without ML engineers
                                                </li>
                                                <li>
                                                    Present prediction data intuitively
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <ul style={{ listStyleType: "disc", marginLeft: "2em", color: "white", fontFamily: "'Quicksand', sans-serif", fontSize: "23px"}}>
                                        <li>
                                            Surveyed clinical members about what features they envisioned
                                        </li>
                                        <li>
                                            Prioritized features to determine project scope, presenting to team for feedback
                                        </li>
                                        <li>
                                            Shadowed critical care physicians in hospital
                                            <ul style={{ marginLeft: "2em"}}>
                                                <li>
                                                    Experienced their workflow of collecting lung ultrasound samples and testing for clinical validation
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="parent2">
                <Grid container spacing={2} justify="center" style={{borderWidth: '10vh', borderStyle: 'solid', borderColor: 'transparent' }}>
                    <Grid container spacing={2} justify="center">
                        {/* Column 1 */}
                        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                                <h1 style={{ color: "white", fontFamily: "'Quicksand', sans-serif", fontWeight: "bold" }}>Wireframes</h1>
                                <br/>
                                {/* <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif" }}>Hand-Drawn</h3>
                                <h3 style={{ color: "white", fontFamily: "'Quicksand', sans-serif"}}>Figma</h3> */}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={8} spacing={2}>
                            <Grid item>
                                <div style={{ height: "40vh", display: "flex", backgroundColor: "green", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: 'Quicksand'}}>                                
                                    <img src="wireframe-upload-file.png" style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ height: "40vh", backgroundColor: "green", display: "flex", justifyContent: "left", alignItems: "left" }}>
                                    <img src="wireframe-results.png" style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
                                </div>
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