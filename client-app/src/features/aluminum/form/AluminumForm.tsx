import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

interface IProps {
    setEditModeAlu: (editModeAlu: boolean) =>  void;
}

const AluminumForm:React.FC<IProps> = ({setEditModeAlu}) => {
    return (
       <Segment clearing>
           <Form>
               <Form.Input placeholder='Alumimum ID'/>
               <Form.Input placeholder='Alumimum Name'/>
               <Button floated='right' positive type='submit' content='Submit'/>
               <Button onClick={()=> setEditModeAlu(false)}floated='right' type='button' content='Cancel'/>
           </Form>
       </Segment>
    )
}

export default AluminumForm
