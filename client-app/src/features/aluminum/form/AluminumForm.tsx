import React, { useState } from 'react'
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

    const [aluminum, setAluminum] = useState<IAluminum>(initialFormState)

    return (
       <Segment clearing>
           <Form>
               <Form.Input placeholder='Alumimum ID' value={aluminum.aluminumId}/>
               <Form.Input placeholder='Alumimum Name' value={aluminum.aluminumName}/>
               <Button floated='right' positive type='submit' content='Submit'/>
               <Button onClick={()=> setEditModeAlu(false)}floated='right' type='button' content='Cancel'/>
           </Form>
       </Segment>
    )
}

export default AluminumForm
