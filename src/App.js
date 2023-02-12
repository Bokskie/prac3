import React, {useState} from 'react'

 const App = () => {
    const [loop, setLooping] = useState(0)
 

const looping = () => {
    setLooping(loop + 1)
}
return(
    <div>
        <div>Add: {loop}</div>
        <button onClick={looping}>Add</button>
    </div>
)
 
}
 export default App 