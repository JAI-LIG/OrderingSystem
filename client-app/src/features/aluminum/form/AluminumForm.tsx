import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const AluminumForm = () => {
    return (
       <Segment>
           <Form>
               <Form.Input placeholder='Alumimum ID'/>
               <Form.Input placeholder='Alumimum Name'/>
           </Form>
       </Segment>
    )
}

export default AluminumForm
