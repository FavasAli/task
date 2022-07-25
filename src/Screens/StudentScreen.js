import React ,{useState,useEffect}from 'react'

const StudentScreen = ({reg,student}) => {
    const [students, setStudent] = useState([])
    
    useEffect(() => {
        console.log("item in student screen",students)
        // console.log("item in student reg",reg)
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
          await fetch('/students.json')
            .then((res) => res.json())
            .then((data)).map(item=>{
                console.log("item",item)
            })
        }
        fetchData()
    
      }, [])
  return (
    
    <div>StudentScreen
        {student?student.map(item=>setStudent(item)):"no data"}
    </div>
  )
}

export default StudentScreen