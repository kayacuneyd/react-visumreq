import React from 'react'

export default function CountryCards(props) {
  return (
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
        <h2 className="text-4xl">{props.name}</h2>
        <p>{props.talimat}</p>
    </div>
  )
}
