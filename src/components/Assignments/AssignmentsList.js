import React from 'react';
import {Container, Grid} from '@material-ui/core';
import AssignmentsCard from './AssignmentsCard';

function AssignmentsList(props) {
    return (
        <Grid
            alignItems="center"
            container="container"
            spacing={3}
            direction="column"
            justify="center">
            <AssignmentsCard
                key="1"
                subjectName="FOC lab manual submission"
                subjectCode="CS26"
                deadline="30th may"
                // type="test"
                submitLink="https://forms.gle/T9fwBVMVHNTHED666"
                contentLink="https://drive.google.com/file/d/1RmrunfV0JDFYMnPyztjXO083W6kjuLjY/view?usp=sharing"
                content="
                Write programs of sessions 7 to 12 , scan it and upload it to the given link
                "/>

            <AssignmentsCard
            key="2"
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

export default AssignmentsList;