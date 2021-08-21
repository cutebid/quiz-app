import  {useState, useEffect } from 'react'

function Timer({timer, setTimer}) {
    const [stops, setstops] = useState(false)
    // const [questionNumbers, setquestionNumbers] = useState(1)
    

    useEffect(() => {
        if(timer === 0){
            return setstops(true)
        }
        const interval= setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
        return () => {
            clearInterval(interval)  
        }
    }, [setstops, timer, setTimer])
   
    // useEffect(() => {
    //   setTimer(10);
    //  }, [questionNumbers]);

    return (
        timer 
    )
}

export default Timer

