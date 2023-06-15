// import { useState } from 'react'
import JobList from './components/JobList'
import './../css/style.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <JobList title="Photosnap" name="Senior Frontend Developer" featured={["NEW!", "FEATURED"]} languages={["HTML", "CSS", "JavaScript"]} time="1d ago" type="Full Time" location="USA Only" img="/photosnap.svg" />
      <JobList title="Photosnap" name="Senior Frontend Developer" featured={["NEW!", "FEATURED"]} languages={["HTML", "CSS", "JavaScript"]} time="1d ago" type="Full Time" location="USA Only" img="/photosnap.svg" />
      <JobList title="Photosnap" name="Senior Frontend Developer" featured={["NEW!", "FEATURED"]} languages={["HTML", "CSS", "JavaScript"]} time="1d ago" type="Full Time" location="USA Only" img="/photosnap.svg" />
      <JobList title="Photosnap" name="Senior Frontend Developer" featured={["NEW!", "FEATURED"]} languages={["HTML", "CSS", "JavaScript"]} time="1d ago" type="Full Time" location="USA Only" img="/photosnap.svg" />
      <JobList title="Photosnap" name="Senior Frontend Developer" featured={["NEW!", "FEATURED"]} languages={["HTML", "CSS", "JavaScript"]} time="1d ago" type="Full Time" location="USA Only" img="/photosnap.svg" />
    </>
  )
}

export default App
