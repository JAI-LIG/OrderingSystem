import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IColor } from '../../../app/models/color'

interface IProps {
    setEditModeColor: (editModeColor: boolean) => void;
}

const ColorForm:React.FC<IProps> = ({setEditModeColor}) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Fabric Color Id'/>
                <Form.Input placeholder='Fabric Color Name'/>
                <Form.Input placeholder='Division'/>
                <Form.Input placeholder='Fabric'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={()=> setEditModeColor(false)}floated='right' type='Button' content='Cancel'/>
            </Form>
        </Segment>
    )
}

export default ColorForm
