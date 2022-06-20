import React, { useState, useEffect } from 'react'

const StateData = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json()
            setData(actualData.statewise)
        } catch (error) {
            console.log("error");
        }
    }

    useEffect(() => {
        getCovidData()
    }, [])


    return (
        <>
            <section>
                <div className="container">
                    <h1 className='text-center'>India Covid-19 Dashboard</h1>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr className='fw-bold'>
                                    <th scope="col">State/UT</th>
                                    <th className='text-end' scope="col">Confirmed</th>
                                    <th className='text-end' scope="col">Active</th>
                                    <th className='text-end' scope="col">Recoverd</th>
                                    <th className='text-end' scope="col">Deceased</th>
                                    <th className='text-end' scope="col">Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{v.state}</td>
                                                <td style={{ color: '#ff073a' }} className='text-end'>{v.confirmed}</td>
                                                <td className='text-end'>{v.active}</td>
                                                <td style={{ color: '#28a745' }} className='text-end'>{v.recovered}</td>
                                                <td style={{ color: 'rgba(32,26,162, 0.8)' }} className='text-end'>{v.deaths}</td>
                                                <td className='text-end'>{v.lastupdatedtime}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StateData