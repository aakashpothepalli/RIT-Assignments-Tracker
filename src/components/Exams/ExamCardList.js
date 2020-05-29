import React from 'react';
import {Container, Grid} from '@material-ui/core';
import ExamCard from './ExamCard';

function ExamCardList(props) {
    return (
        <Grid
            alignItems="center"
            container="container"
            spacing={3}
            direction="column"
            justify="center">
        
             <ExamCard
             key="3"
                subjectName="FOC asssignment test"
                subjectCode="CS26"
                date="31th may evening"
                contentLink="https://drive.google.com/file/d/1Wxbm7lJn27ErEthZ76Fen1F_XyVFs7H7/view?usp=sharing"
                content="
                    Final time for the quiz is not yet announced
                "/>
            <ExamCard
            key="4"
                subjectName="Chemistry lab and assignment"
                subjectCode="CY22"
                date="1st june"
                type="test"
                // submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                contentLink="https://drive.google.com/file/d/12R8aDpbqJbLETejMbZZy_CsbUdzIkUw0/view?usp=sharing"
                content="
                    Prepare for MCQ based lab viva test and assignment test , 
                    Syllabus :CIE 1
                "/>
          

        </Grid>
    );
}

export default ExamCardList;