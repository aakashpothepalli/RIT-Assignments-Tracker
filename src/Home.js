import React from 'react';
import AssignmentsList from './components/Assignments/AssignmentsList';
import Appbar from './components/Appbar';

import ExamCardList from './components/Exams/ExamCardList';
import NoticeCardList from './components/notices/NoticeCardList';

function Home({match}) {
    return (<> 
    
    <Appbar />
    <h2 style={{color:"#bdbdbd",textAlign:"center"}} >{match.params?.classCode?.toString().toUpperCase()?? "CS2B"}</h2>
    
    <h3 style={{color:"#bdbdbd",textAlign:"center"}} >Notices</h3>
    <NoticeCardList classCode={match.params?.classCode?.toString().toUpperCase()??"CS2B"}/>
    <br/>

    <h3 style={{color:"#bdbdbd",textAlign:"center"}} >Assignments</h3>
    <AssignmentsList classCode={match.params?.classCode?.toString().toUpperCase()??"CS2B"}/>
    <br/>
    <h3 style={{color:"#bdbdbd",textAlign:"center"}} >Exams</h3>

    <ExamCardList classCode={match.params?.classCode?.toString().toUpperCase()??"CS2B"}/>

    </>);
}

export default Home;