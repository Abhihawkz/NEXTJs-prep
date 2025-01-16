import { getServerSession } from 'next-auth';
import React from 'react'

const page =  async () => {
    const serssion = await getServerSession()

    return (
    <div>{JSON.stringify(serssion)}
    </div>
  )
}

export default page;