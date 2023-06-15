type Props = { title: string, name: string, featured: string[], languages: string[], time: string, type: string, location: string, img: string}

export default function JobList( {title, name, featured, languages, time, type, location, img}: Props ) {
  return (
    <div className="job-list-item">
        <img src={img} alt="logo" />
        <div className="job-list-item__info">
            <div className="job-list-item__info__top">
                <h1>{title}</h1>
                <div className="job-featured">
                    <ul>
                        {featured.map((item) => {
                            if (item == "FEATURED") {
                                return <li key={item} className="featured">{item}</li>
                            } else {
                                return <li key={item}>{item}</li>
                            }
                        })}
                    </ul>
                </div>
            </div>
            <h2>{name}</h2>
            <div className="job-list-item__info__buttom">
                <p>{time}</p>
                <p>·</p>
                <p>{type}</p>
                <p>·</p>
                <p>{location}</p>
            </div>
        </div>
        <div className="job-languages">
            <ul>
            {languages.map((item) => {
                return <li key={item}>{item}</li>
            })}
            </ul>
        </div>
    </div>
  )
}