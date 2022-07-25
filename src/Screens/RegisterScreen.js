import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom'
import StudentScreen from './StudentScreen'

const RegisterScreen = () => {

  const navi=useNavigate()
   const [reg, setReg] = useState([])
   const [student, setStudent] = useState([])
   console.log("ddd",student)
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/students.json')
        .then((res) => res.json())
        .then((data) => {setStudent(data.students)})
    }
    fetchData()

  }, [])
    const submitHandler=()=>{
  
      navi("/students")
    }
  return (
    <div>
        <input value={reg} type="taxt"  onChange={e=>setReg(e.target.value)}></input>
        <input type="date" ></input>
        <button type='submit' onClick={submitHandler}>submit</button>
        
        <StudentScreen reg={reg} student={student}/>
      

    </div>
  )
}

export default RegisterScreen