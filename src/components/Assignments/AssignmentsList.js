import React,{useEffect,useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import AssignmentsCard from './AssignmentsCard';
import {db} from "../../firebase"
import CircularProgress from '@material-ui/core/CircularProgress';

function AssignmentsList(props) {

    let [assignments,setAssignments] = useState(<CircularProgress/>)

    useEffect(()=>{
        db.collection("classCodes").doc("CS2B").collection('assignments').get()
        .then(function(snapshot) {

            let tempData = []
            snapshot.docs.map(doc=>{

                let data = doc.data()
                let key = doc.id
                tempData.push(
                    <AssignmentsCard
                        key={key}
                        title={data.title??"No title given"}
                        subjectCode={data.subjectCode??"NSCE"}
                        deadline={data.deadline.toDate().toString().substring(0,24)??""}
                        submitLink={data.submitLink??""}
                        moreDetailsLink={data.moreDetailsLink??""}
                        description={data.description??""}/>
                )

            })

            setAssignments(tempData)

        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    },[])
    return (
        <Grid
            alignItems="center"
            container="container"
            spacing={3}
            direction="column"
            justify="center">
                
            {assignments}

        </Grid>
    );
}

export default AssignmentsList;