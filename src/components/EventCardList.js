import React from 'react';
import EventCard from './EventCard';
import {Container, Grid} from '@material-ui/core';

function EventCardList(props) {
    return (
        <Grid
            alignItems="center"
            container="container"
            spacing={3}
            direction="column"
            justify="center">
            <EventCard
                subjectName="FOC lab manual submission"
                subjectCode="CS26"
                deadline="30th may"
                // type="test"
                submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                contentLink="https://drive.google.com/file/d/1RmrunfV0JDFYMnPyztjXO083W6kjuLjY/view?usp=sharing"
                content="
                Write programs of sessions 7 to 12 , scan it and upload it to the given link
                "/>
             <EventCard
                subjectName="FOC asssignment test"
                subjectCode="CS26"
                deadline="31th may evening"
                type="test"
                // submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                contentLink="https://drive.google.com/file/d/1Wxbm7lJn27ErEthZ76Fen1F_XyVFs7H7/view?usp=sharing"
                content="
                    Final time for the quiz is not yet announced
                "/>
            <EventCard
                subjectName="Chemistry lab and assignment test"
                subjectCode="CY22"
                deadline="1st june"
                type="test"
                // submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                contentLink="https://drive.google.com/file/d/12R8aDpbqJbLETejMbZZy_CsbUdzIkUw0/view?usp=sharing"
                content="
                    Prepare for MCQ based lab viva test and assignment test , 
                    Syllabus :CIE 1
                "/>
            <EventCard
                subjectName="ED record submission"
                subjectCode="AL21"
                deadline="13th june"
                type="assignment"
                // submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                // contentLink="https://drive.google.com/file/d/12R8aDpbqJbLETejMbZZy_CsbUdzIkUw0/view?usp=sharing"
                content="
                    Link for questions and submission will be enabled soon
                "/>

        </Grid>
    );
}

export default EventCardList;