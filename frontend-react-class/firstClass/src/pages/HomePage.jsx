
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    const goToProfileWithQuery = () => {
        navigate('/profile/123?showDetails=true')
    }

  return (
    <div>HomePage</div>
  )
}

export default HomePage