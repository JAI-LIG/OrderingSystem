import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const ColorForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Fabric Color Id'/>
                <Form.Input placeholder='Fabric Color Name'/>
                <Form.Input placeholder='Division'/>
                <Form.Input placeholder='Fabric'/>
            </Form>
        </Segment>
    )
}

export default ColorForm
