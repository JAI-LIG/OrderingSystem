import React, { useState, FormEvent } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IAluminum } from '../../../app/models/aluminum'

interface IProps {
    setEditModeAlu: (editModeAlu: boolean) =>  void;
    aluminum: IAluminum;
}

const AluminumForm:React.FC<IProps> = ({setEditModeAlu, aluminum: initialFormState}) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        }else {
            return {
                aluminumId: '',
                aluminumName: ''
            }
        }
    };

    const [aluminum, setAluminum] = useState<IAluminum>(initializeForm)

    const handleSubmit = () => {
        console.log(aluminum);
    }
    

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setAluminum({...aluminum, [name]: value})
    }
    return (
       <Segment clearing>
           <Form onSubmit={handleSubmit}>
               <Form.Input onChange={handleInputChange} placeholder='Alumimum ID' name='aluminumId' value={aluminum.aluminumId}/>
               <Form.Input onChange={handleInputChange} name='aluminumName' placeholder='Alumimum Name' value={aluminum.aluminumName}/>
               <Button floated='right' positive type='submit' content='Submit'/>
               <Button onClick={()=> setEditModeAlu(false)}floated='right' type='button' content='Cancel'/>
           </Form>
       </Segment>
    )
}

export default AluminumForm
