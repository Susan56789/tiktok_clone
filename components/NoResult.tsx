import React from 'react'
import { NextPage } from 'next'

interface Iprops {
    text: string
}

const NoResult: NextPage<Iprops> = ({ text }) => {
    return (
        <div>NoResult</div>
    )
}

export default NoResult