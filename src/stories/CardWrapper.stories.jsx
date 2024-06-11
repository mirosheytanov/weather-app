import React from "react"
import Card from '../components/Card/Card'
import CardWrapper from '../components/CardWrapper/CardWrapper'

export default { 
    title: 'Components/CardWrapper', 
    component: CardWrapper,
    // argTypes: {
    //   numberOfChildren: { type: 'number', defaultValue: 5}
    // }
  }

const cardMock = {
  day: 'Mon',
  title: '20 Jun',
  icon: 'http://openweathermap.org/img/wn/01d@2x.png',
  temp: 30,
}

const Template = (args) => (
  <CardWrapper {...args}>
    {<Card {...cardMock} />}
  </CardWrapper>
)

export const DefaultCardWrapper = Template.bind({})
DefaultCardWrapper.args = {
  title: 'Card Wrapper'
}