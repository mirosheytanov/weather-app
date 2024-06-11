import React from "react"
import { IoLocationSharp } from "react-icons/io5"
import Button from '../components/Button/Button'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'

export default { 
    title: 'Components/WelcomeScreen', 
    component: WelcomeScreen,
  }

const Template = args => (
  <WelcomeScreen {...args}>
    <Button text={<IoLocationSharp />} />
  </WelcomeScreen>
)

export const DefaultWelcomeScreen = Template.bind({})