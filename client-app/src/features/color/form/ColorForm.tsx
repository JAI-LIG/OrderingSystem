import React, { useState, FormEvent } from 'react'
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

    const [color , setColor] = useState<IColor>(initializeForm)

    const handleSubmit = () =>
    {
        console.log(color);
    }
    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setColor({...color, [name]: value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='colorId' placeholder='Fabric Color Id' value={color.colorId}/>
                <Form.Input onChange={handleInputChange} name='colorName' placeholder='Fabric Color Name' value={color.colorName}/>
                <Form.Input onChange={handleInputChange} name='divisionId' placeholder='Division' value={color.divisionId}/>
                <Form.Input onChange={handleInputChange} name='fabricId' placeholder='Fabric' value={color.fabricId}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={()=> setEditModeColor(false)}floated='right' type='Button' content='Cancel'/>
            </Form>
        </Segment>
    )
}

export default ColorForm
