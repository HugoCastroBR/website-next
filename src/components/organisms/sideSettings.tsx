import React from 'react'
import AccordionContainer from '../molecules/accordionContainer'
import SideSettingsContent from '../molecules/sideSettingsContent'

const SideSettings = () => {
  return (
    <AccordionContainer 
      title='Settings'
      value='settings'
    >
      <SideSettingsContent />
    </AccordionContainer>
  )
}

export default SideSettings