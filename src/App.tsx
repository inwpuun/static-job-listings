import { useState } from 'react'
import JobList from './components/JobList'
import './../css/style.css'
import TopHeader from './components/TopHeader'
import data from './../data.json'
import FilterBox from './components/FilterBox'

type Data = {id: number, company: string, logo: string, new: boolean, featured: boolean, position: string, role: string, level: string, postedAt: string, contract: string, location: string, languages: string[], tools: string[]}
// type Filter = {role: string[], level: string[], languages: string[], tools: string[]}

function App() {
  const [job, setJob] = useState([[""], [""], [""], [""]])
  

  function filterJob(data: Data[], filter: string[][]): Data[] {
    let result: Data[] = []

    data.forEach((item) => {
      if ((filter[0].length == 1 || filter[0].includes(item.role)) && (filter[1].length == 1 || filter[1].includes(item.level)) && (filter[2].length == 1 || filter[2].slice(0, -1).every(r => item.languages.includes(r))) && (filter[3].length == 1 || filter[3].slice(0, -1).every(r => item.tools.includes(r)))) {
        result.push(item)
      }
    })
    return result
  } 

  function addFilterJob(filter: string, type: string) {
    setJob(job => {
      if (type == "role") {
        if (job[0].includes(filter)) {
          return job
        }
        return [[filter].concat(job[0]), job[1], job[2], job[3]]
      } else if (type == "level") {
        if (job[1].includes(filter)) {
          return job
        }
        return [job[0], [filter].concat(job[1]), job[2], job[3]]
      } else if (type == "languages") {
        if (job[2].includes(filter)) {
          return job
        }
        return [job[0], job[1], [filter].concat(job[2]), job[3]]
      } else {
        if (job[3].includes(filter)) {
          return job
        }
        return [job[0], job[1], job[2], [filter].concat(job[3])]
      }
    }
    )
  }

  function delFilterJob(filter: string, type: string) {
    setJob(job => {
      if (type == "role") {
        return [job[0].filter(item => item != filter), job[1], job[2], job[3]]
      } else if (type == "level") {
        return [job[0], job[1].filter(item => item != filter), job[2], job[3]]
      } else if (type == "languages") {
        return [job[0], job[1], job[2].filter(item => item != filter), job[3]]
      } else {
        return [job[0], job[1], job[2], job[3].filter(item => item != filter)]
      }
    })
  }

  function clearFilterJob() {
    setJob(() => {return [[""], [""], [""], [""]]})
  }

  function countFilterJob(job: string[][]): number {
      let count = 0
      for (let i = 0; i < job.length; i++) {
        count += job[i].length - 1
      }
      return count
  }

  return (
    <>
      <TopHeader />
      {countFilterJob(job) > 0 && <FilterBox job={job} delFilterJob={delFilterJob} clearFilterJob={clearFilterJob}/>}
      <JobList listData={data} job={job} addFilterJob={addFilterJob} filterJob={filterJob}/>
    </>
  )
}

export default App
