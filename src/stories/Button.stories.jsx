import React from "react"
import Button from '../components/Button/Button'

export default { 
    title: 'Components/Button', 
    component: Button,
    argTypes: { onClick: { action: "onClick"}},
  }

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  text: 'C°'
}