import React, { useState } from 'react'
import { Segment, Form, Button, Icon } from 'semantic-ui-react'
import { IColor } from '../../../app/models/color'

interface IProps {
    setEditModeColor: (editModeColor: boolean) => void;
    color: IColor;
}

const ColorForm:React.FC<IProps> = ({setEditModeColor, color: initializeFormState}) => {
    
    const initializeForm = () => {
        if(initializeFormState) {
            return initializeFormState;
        }else {
            return {
                colorId: '',
                fabricId: '',
                divisionId: '',
                colorName: ''
            }
        }
    };

    const [color , setColor] = useState<IColor>(initializeFormState)

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Fabric Color Id' value={color.colorId}/>
                <Form.Input placeholder='Fabric Color Name' value={color.colorName}/>
                <Form.Input placeholder='Division' value={color.divisionId}/>
                <Form.Input placeholder='Fabric' value={color.fabricId}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={()=> setEditModeColor(false)}floated='right' type='Button' content='Cancel'/>
            </Form>
        </Segment>
    )
}

export default ColorForm
