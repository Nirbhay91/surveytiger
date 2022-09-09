import React, { useState } from 'react';
import Options from './Options';
import Questions from './Questions';
import TypeSelector from './TypeSelector';
import { useHistory } from "react-router";
// import Publish from './Publish';


const CreateSurvey = ({squestion,setSquestion}) => {

    

    const history = useHistory();
    const getRandom =()=>{
        return Math.floor((Math.random() * 1000)+1);
    }
    const defaultOptionsState = [{uid:getRandom(),value:'',},{uid:getRandom(),value:'',}];
    const [qText, setQtext] = useState('');
    const [qType, setQtype] = useState(0);
    const [options,setOptions]= useState(defaultOptionsState);

    const addOptions =()=>{
         let newOption = {
             uid: getRandom(),
             value:''
         }

         let updatedOptions = [...options];
         updatedOptions.push(newOption);
         setOptions(updatedOptions);
    }

    const deleteOptions=()=>{
        console.log(options.length);
        if(options.length===2){
            alert("Error: A select type question should have atleast 2 options");
        }else {
        let updatedOptions= [...options];
        updatedOptions.pop();
        setOptions(updatedOptions);
        }
    }

    const updateOptiontext =(id, text)=>{
        let updatedOptions=[...options];
        let changeIndex = updatedOptions.findIndex(x=> x.uid === id);
        updatedOptions[changeIndex].value = text;
        setOptions(updatedOptions);
    }

    const updateSurveyQuestion = ()=>{
        let newSurveryQuestion = [...squestion];
        let newQ = {
            qtext:qText,
            qtype:qType,
            options:options,
        }
        newSurveryQuestion.push(newQ);
        setSquestion(newSurveryQuestion);
        setQtype(0);
        setQtext('');
        setOptions(defaultOptionsState);
    }

    const publishQuestion =()=>{
        updateSurveyQuestion();
        history.push('./publish');
        
    }

    return (
        <>
            <TypeSelector qtype={qType} setQtype={setQtype}/>
            {qType!==0?
                <>

                    <Questions onTextUpdate={setQtext} />
                    {options.map((opt,key)=>(
                
                        <Options 
                            key={key}
                            uid={opt.uid}
                            addOptions={addOptions}
                            deleteOptions = {deleteOptions}
                            updateText = {updateOptiontext}
                        />
                
                ))}
                <button className="btn btn-primary m-1" onClick={()=>updateSurveyQuestion()}>Add Question</button>
                <button className="btn btn-primary m-1" onClick={()=>publishQuestion()}>Publish</button>
            </>
            :null}

            
            
        </>
    )
}

export default CreateSurvey;