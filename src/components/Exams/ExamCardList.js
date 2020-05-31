import React,{useEffect,useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import ExamCard from './ExamCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import {db} from "../../firebase"

function ExamCardList(props) {
    let [exams,setExams] = useState(<CircularProgress/>)

    useEffect(()=>{
        db.collection("classCodes").doc("CS2B").collection('tests').get()
        .then(function(snapshot) {

            let tempData = []
            snapshot.docs.map(doc=>{

                let data = doc.data()
                let key = doc.id

                tempData.push(
                    <ExamCard
                        key ={key}
                        title={data.title??"No title given"}
                        subjectCode={data.subjectCode??"NSCE"}
                        date={data.date?.toDate().toString().substring(0,24)??""}
                        submitLink={data.submitLink??""}
                        moreDetailsLink={data.moreDetailsLink??""}
                        description={data.description??""}/>
                )

            })

            setExams(tempData)

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
                {exams}
            

        </Grid>
    );
}

export default ExamCardList;