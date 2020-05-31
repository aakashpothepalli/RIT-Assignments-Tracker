import React,{useState} from 'react';
import { Container ,Button,Box} from '@material-ui/core';
import Appbar from './components/Appbar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {randomColor} from "randomcolor"
import {useHistory} from "react-router-dom"
function ClassSelector(props) {

    var color = useState(randomColor())[0];
    let history = useHistory()

    const branches = ["CS","IS","EC","EE","ME","BT","IM","ML"]
    let [branch,setBranch] = useState("")
    function _onBranchSelect(value){
        setBranch(value)
    }
    
    const sections = []
    for(let n=0;n<26;n++){
        var sec = String.fromCharCode(65 + n);
        sections.push(sec)
    }
    let [section,setSection] = useState("")
    function _onSectionSelect(value){
        setSection(value)
    }
    
    const sems = []
    for(let n=1;n<=8;n++){
        sems.push(n)
    }
    let [sem,setSem] = useState("")
    function _onSemSelect(value){
        setSem(value)
    }

    return (
        <>
        <Appbar/>

        <Box display="flex" flexDirection="column" style={{textAlign:"center"}} >
            <h2 style={{color:"#bdbdbd"}}>Choose your branch</h2>
            <Dropdown options={branches}  onChange={_onBranchSelect} value={branch} placeholder="Choose your branch" />;

            <h2 style={{color:"#bdbdbd"}}>Choose your section</h2>
            <Dropdown options={sections}  onChange={_onSectionSelect} value={section} placeholder="Choose your section" />;

            <h2 style={{color:"#bdbdbd"}}>Choose your semester</h2>
            <Dropdown options={sems}  onChange={_onSemSelect} value={sem} placeholder="Choose your semester" />;
        <br/>
        <br/>
            <Button 
            variant="contained" 
            color="primary"
            
                onClick={() => {
                    if(branch!=="" && sem!=="" && section!==""){
                        // console.log(branch.value+sem.value+section.value)
                        history.push(branch.value+sem.value+section.value)

                    }
                    history.push(branch.value+sem.value+section.value)
                }}
                >
                GO
            </Button>

        </Box>
        </>
    );
} 

export default ClassSelector;