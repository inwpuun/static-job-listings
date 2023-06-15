import JobItem from "./JobItem"

type Data = {id: number, company: string, logo: string, new: boolean, featured: boolean, position: string, role: string, level: string, postedAt: string, contract: string, location: string, languages: string[], tools: string[]}
// type Filter = {role: string[], level: string[], languages: string[], tools: string[]}
type Props = { listData: Data[], job: string[][], addFilterJob: (filter: string, type: string) => void, filterJob: (data: Data[], filter: string[][]) => Data[] }

export default function JobList( {listData, job, addFilterJob, filterJob}: Props ) {
    return (
        <ul id="joblist">
        {filterJob(listData, job).map(item => {
          return (
            <JobItem key={item.id} company={item.company} logo={item.logo} new1={item.new} featured={item.featured} position={item.position} role={item.role} level={item.level} postedAt={item.postedAt} contract={item.contract} location={item.location} languages={item.languages} tools={item.tools} addFilterJob={addFilterJob} />
          )
        })}
      </ul>
    )
}