import React from 'react'

import Menu from './Menu'
import Account from './Account'
import Preference from './Preference'
import Notification from './Notification'
import Localization from './Localization' 

const UserProfile = () => {
  return (
    <div>
      <Menu />
      <Account />
      <Preference />
      <Notification />
      <Localization />
    </div>
  )
}

export default UserProfile