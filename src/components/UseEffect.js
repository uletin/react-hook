import React, {useState, useEffect} from "react";

function MyFunction(){
    console.log('-> Function Init')

    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(prevState => {
            return prevState+1
        })
    }

    //LifeCycle

    // run on every render
    useEffect(() => {
        console.log('my first effect')
    })

    //componentDidMount
    useEffect(() => {
        console.log('ComponentDidMount equivalent')
    }, [])

    //componenDidUpdate
    useEffect(() => {
        if (count > 0) {
            console.log('ComponentDidUpdate equivalent')
        } 
    }, [count])

    // ComponentWillUnMount
    useEffect(() => {
        // clean up function
        return(
            () => {
                console.log("ComponentWillUnMount equivalent")
            }
        ) 
    }, [])

    console.log(`-> Start Render (${count})`)
    return(
        <div>
                <h1>Function Component</h1>
                <p>
                    <button onClick={handleCount}>Count</button>
                    {count}
                </p>
        </div>
    )
}

export default MyFunction