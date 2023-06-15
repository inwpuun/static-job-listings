// import React from 'react'

type Props = {job: string[][], delFilterJob: (filter: string, type: string) => void, clearFilterJob: () => void}

export default function FilterBox( { job, delFilterJob, clearFilterJob }: Props ) {
  return (
    <div className="filterBox">
        <ul>
            {job[0].map((item) => {
                if (item != "") {
                    return (
                        <li key={item}>
                            <p>{item}</p>
                            <button onClick={() => delFilterJob(item, "role")}>✕</button>
                        </li>
                    )
                }
            })}
            {job[1].map((item) => {
                if (item != "") {
                    return (
                        <li key={item}>
                            <p>{item}</p>
                            <button onClick={() => delFilterJob(item, "level")}>✕</button>
                        </li>
                    )
                }
            })}
            {job[2].map((item) => {
                if (item != "") {
                    return (
                        <li key={item}>
                            <p>{item}</p>
                            <button onClick={() => delFilterJob(item, "languages")}>✕</button>
                        </li>
                    )
                }
            })}
            {job[3].map((item) => {
                if (item != "") {
                    return (
                        <li key={item}>
                            <p>{item}</p>
                            <button onClick={() => delFilterJob(item, "tools")}>✕</button>
                        </li>
                    )
                }
            })}
        </ul>
        <div className="rightClear">
            <span onClick={() => clearFilterJob()}>Clear</span>
        </div>
    </div>
  )
}