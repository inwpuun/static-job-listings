import React from 'react'

type Props = {company: string, logo: string, new1: boolean, featured: boolean, position: string, role: string, level: string, postedAt: string, contract: string, location: string, languages: string[], tools: string[], addFilterJob: (filter: string, type: string) => void}

export default function JobItem( {company, logo, new1, featured, position, role, level, postedAt, contract, location, languages, tools, addFilterJob}: Props ) {
    const style: React.CSSProperties = {
        borderLeft: featured ? "5px solid hsl(180, 29%, 50%)" : "none"
    }
    return (
        <div className="job-list-item" style={style}>
            <img src={logo.slice(8, logo.length)} alt="logo" />
            <div className="job-list-item__info">
                <div className="job-list-item__info__top">
                    <h1>{company}</h1>
                    <div className="job-featured">
                        <ul>
                            {[new1 ? "NEW!" : "", featured ? "FEATURED" : ""].map((item) => {
                                if (item == "FEATURED") {
                                    return <li key={item} className="featured">{item}</li>
                                } else if (item == "NEW!") {
                                    return <li key={item}>{item}</li>
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <h2>{position}</h2>
                <div className="job-list-item__info__buttom">
                    <p>{postedAt}</p>
                    <p>·</p>
                    <p>{contract}</p>
                    <p>·</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="job-languages">
                <ul>
                {/* {[role, level].concat(languages).concat(tools).map((item) => {
                    return (
                    <li key={item} onClick={() => addFilterJob(item)}>
                        {item}
                    </li>)
                })} */}
                {role ? <li onClick={() => addFilterJob(role, "role")}>{role}</li> : ""}
                {level ? <li onClick={() => addFilterJob(level, "level")}>{level}</li> : ""}
                {languages.map((item) => {
                    return <li key={item} onClick={() => addFilterJob(item, "languages")}>{item}</li>
                }
                )}
                {tools.map((item) => {
                    return <li key={item} onClick={() => addFilterJob(item, "tools")}>{item}</li>
                }
                )}
                </ul>
            </div>
        </div>
    )
}