import React,{useState, useEffect} from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    useEffect(()=> {
        const intervalId = setInterval(()=>
            {setTime(new Date())},1000);
        return() => {
            clearInterval(intervalId);
        }
    },[]);
    
    function Clock(){
        let houre = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const ap = houre >= 12 ? "PM" : "AM";
        houre = houre%12 || 12;

        return `${setZero(houre)}:${setZero(minute)}:${setZero(second)} ${ap}`
    }

    function setZero(number){
        if(number<10){
           number =  "0" + number
        }
        return(number)
    }

    return(<div className="container">
            <span>{Clock()}</span>
        </div>)
}

export default DigitalClock