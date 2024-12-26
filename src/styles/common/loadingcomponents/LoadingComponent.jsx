import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function LoadingComponent() {
  return (
    <div className="w-full flex items-center justify-center p-8">
    <FontAwesomeIcon className="text-4xl animate-spin" icon={faSpinner} />
  </div>
  )
}

export default LoadingComponent
