import React from "react"
import Card from '../components/Card/Card'

export default { 
    title: 'Components/Card', 
    component: Card,
  }

const Template = args => <Card {...args} />

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  day: 'Mon',
  title: '20 Jun',
  icon: 'http://openweathermap.org/img/wn/01d@2x.png',
  temp: 30,
}