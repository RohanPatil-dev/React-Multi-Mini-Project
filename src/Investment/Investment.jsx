import React, { useState } from "react";

export default function Investment() {

    const [currentSaving, setCurrentSaving] = useState("")
    const [yearlySaving, setYearlySaving] = useState("")
    const [expectedInterest, setExpectedInterest] = useState("")
    const [investmentDuration, setInvestmentDuration] = useState("")
    const [result, setResult] = useState([])


    function calculateFutureValue() {
        const currentSavingValue = parseFloat(currentSaving)
        const yearlySavingValue = parseFloat(yearlySaving)
        const interestRate = parseFloat(expectedInterest) / 100;
        const duration = parseInt(investmentDuration)

        const futureVal = currentSavingValue * Math.pow(1 + interestRate, duration) + yearlySavingValue * ((Math.pow(1 + interestRate, duration) - 1) / interestRate)
    
      return futureVal.toFixed(2)
    }


    const handleOnSubmit = () => {

        const datas = calculateFutureValue()

        console.log(datas);

        const updatedData = {currentSaving : currentSaving,yearlySaving : yearlySaving,expectedInterest : expectedInterest,investmentDuration : investmentDuration,futureValue : datas}

        setResult([updatedData,...result])  // this is descending 
        // setResult([...result,updatedData]) <-------  this is ascending order
    }

    console.log(result);
    



    return (
        <>
        <h1 className="text-center mt-5" style={{fontWeight : "bold",fontStyle : "oblique",color : "red"}}>Investment Calculator</h1>
            <div className="container bg-dark text-light mt-5" style={{ borderRadius: "20px" }}>
                <div style={{ padding: "20px" }}>
              
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "20px 20px" }}>

                            <div className="form-group">
                                <label htmlFor="exampleInputText">Current Savings</label>
                                <input type="number" value={currentSaving} onChange={(event)=>{return setCurrentSaving(event.target.value)}} className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Current Savings" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputText">Yearly Savings</label>
                                <input type="number" value={yearlySaving} onChange={(event)=>{return setYearlySaving(event.target.value)}} className="form-control" id="exampleInputText" placeholder="Enter Yearly Savings" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputText">Expected Interest</label>
                                <input type="number" value={expectedInterest} onChange={(event)=>{return setExpectedInterest(event.target.value)}} className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Expected Interest" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputText">Investment Duration</label>
                                <input type="number" value={investmentDuration} onChange={(event)=>{return setInvestmentDuration(event.target.value)}} className="form-control" id="exampleInputText" placeholder="Enter Investment Duration" />
                            </div>


                        </div>
                        <button className="btn btn-primary p-2 mt-2" style={{ marginLeft: "380px", width: "300px"}} onClick={()=>{handleOnSubmit()}}>Submit</button>
                
                </div>
            </div>

            <div className="mt-5 w-75" style={{marginLeft : "200px"}}>
               <table className="table table-dark text-light text-center">
                 <thead>
                    <th>Sr No.</th>
                    <th>current saving</th>
                    <th>yearly saving</th>
                    <th>expected interest</th>
                    <th>investment duration</th>
                    <th>Result</th>
                 </thead>
                 
                 <tbody>
                    {
                        result.map((data,index)=>{
                            return(
                                <>

                                   <tr key={index}>
                                       <td>{index + 1}</td>
                                       <td>{data.currentSaving}</td>
                                       <td>{data.expectedInterest}</td>
                                       <td>{data.investmentDuration}</td>
                                       <td>{data.yearlySaving}</td>
                                       <td>{data.futureValue}</td>
                                   </tr>
                                </>
                            )
                        })
                    }

                    
                 </tbody>
               </table>
            </div>

        </>
    )
}