import React, { useState } from 'react'
import data from '../data.json';

const Tickets = () => {
    const [copyData, setCopyData]= useState(data.data)
    const handleFilBtn_1 = () =>{
        const newTickets = data?.data?.filter((items) =>items["Status to be filled by the POC"] == 'New')
        setCopyData(newTickets)
    }

    const handleFilBtn_2 = () =>{
        const newTickets = data?.data?.filter((items) =>items["Status to be filled by the POC"] == 'Pending')
        setCopyData(newTickets)
    }

    const handleFilBtn_3 = () =>{
        const newTickets = data?.data?.filter((items) =>items["Status to be filled by the POC"] == 'Waiting')
        setCopyData(newTickets)
    }

    const handleFilBtn_4 = () =>{
        const newTickets = data?.data?.filter((items) =>items["Status to be filled by the POC"] == 'Resolved')
        setCopyData(newTickets)
    }

    return (
        <section className='ticket_section' >
            <div className='search_bar' >
                <h2>All Tickets</h2>
                
            </div>
            <div className='status_option' >
                <div className='ticket_status_card' onClick={handleFilBtn_1} >
                    <span>Not yet responded</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z" fill="#FF6422" />
                        <path d="M15.4305 11.5886L14.2515 12.7366L14.5305 14.3596C14.5785 14.6406 14.4655 14.9176 14.2345 15.0836C14.0055 15.2516 13.7065 15.2726 13.4545 15.1386L11.9995 14.3736L10.5415 15.1396C10.4335 15.1966 10.3155 15.2266 10.1985 15.2266C10.0455 15.2266 9.89446 15.1786 9.76446 15.0846C9.53446 14.9176 9.42146 14.6406 9.46946 14.3596L9.74746 12.7366L8.56846 11.5886C8.36446 11.3906 8.29346 11.0996 8.38146 10.8286C8.47046 10.5586 8.70046 10.3666 8.98146 10.3266L10.6075 10.0896L11.3365 8.61262C11.4635 8.35862 11.7175 8.20062 11.9995 8.20062H12.0015C12.2845 8.20162 12.5385 8.35962 12.6635 8.61362L13.3925 10.0896L15.0215 10.3276C15.2995 10.3666 15.5295 10.5586 15.6175 10.8286C15.7065 11.0996 15.6355 11.3906 15.4305 11.5886Z" fill="#FF6422" />
                    </svg>
                </div>
                <div className='ticket_status_card' onClick={handleFilBtn_2}>
                    <span>Pending to staff</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M21.9998 11.9999C21.9998 17.5239 17.5228 21.9999 11.9998 21.9999C6.47676 21.9999 1.99976 17.5239 1.99976 11.9999C1.99976 6.47788 6.47676 1.99988 11.9998 1.99988C17.5228 1.99988 21.9998 6.47788 21.9998 11.9999Z" fill="#4A4DE6" />
                        <path d="M15.5734 15.8144C15.4424 15.8144 15.3104 15.7804 15.1894 15.7094L11.2634 13.3674C11.0374 13.2314 10.8984 12.9864 10.8984 12.7224V7.67535C10.8984 7.26135 11.2344 6.92535 11.6484 6.92535C12.0624 6.92535 12.3984 7.26135 12.3984 7.67535V12.2964L15.9584 14.4194C16.3134 14.6324 16.4304 15.0924 16.2184 15.4484C16.0774 15.6834 15.8284 15.8144 15.5734 15.8144Z" fill="#4A4DE6" />
                    </svg>
                </div>
                <div className='ticket_status_card' onClick={handleFilBtn_3}>
                    <span>Waiting response</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9968 15.1746C7.68376 15.1746 3.99976 15.8546 3.99976 18.5746C3.99976 21.2956 7.66076 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z" fill="#8C18E2" />
                        <path opacity="0.4" d="M11.9967 12.5837C14.9347 12.5837 17.2887 10.2287 17.2887 7.29169C17.2887 4.35469 14.9347 1.99969 11.9967 1.99969C9.05971 1.99969 6.70471 4.35469 6.70471 7.29169C6.70471 10.2287 9.05971 12.5837 11.9967 12.5837Z" fill="#8C18E2" />
                    </svg>
                </div>
                <div className='ticket_status_card' onClick={handleFilBtn_4}>
                    <span>Closed or resolved</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.3402 1.99982H7.67024C4.28024 1.99982 2.00024 4.37982 2.00024 7.91982V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91982C22.0002 4.37982 19.7302 1.99982 16.3402 1.99982Z" fill="#4CAF50" />
                        <path d="M10.8133 15.2479C10.5893 15.2479 10.3653 15.1629 10.1943 14.9919L7.82132 12.6189C7.47932 12.2769 7.47932 11.7229 7.82132 11.3819C8.16332 11.0399 8.71632 11.0389 9.05832 11.3809L10.8133 13.1359L14.9413 9.0079C15.2833 8.6659 15.8363 8.6659 16.1783 9.0079C16.5203 9.3499 16.5203 9.9039 16.1783 10.2459L11.4323 14.9919C11.2613 15.1629 11.0373 15.2479 10.8133 15.2479Z" fill="#4CAF50" />
                    </svg>
                </div>
            </div>
            <div className='tickets_container' >
                <div className='tickets_header tickets_row'>
                    <div className='tickets_items' >
                        <input type='checkbox' />
                        <span>Case ID</span>
                    </div>
                    <span className='tickets_items'>Bug ID</span>
                    <span className='tickets_items'>Status</span>
                    <span className='tickets_items'>Date Case Received</span>
                    <span className='tickets_items'>ToneTag POC Name</span>
                </div>
                <div>
                    {
                        copyData?.map((items, index) => {
                            return (
                                <div key={index} className='tickets_data_row tickets_row'>
                                    <div className='tickets_items' >
                                        <input type='checkbox' />
                                        <span className='tickets_items'>{items["Case ID's"]}</span>
                                    </div>
                                    <span className='tickets_items'>{items["Bug ID"]}</span>
                                    <span className='tickets_items'>{items["Status to be filled by the POC"]}</span>
                                    <span className='tickets_items'>{items["Date Case Received"]}</span>
                                    <span className='tickets_items'>{items["ToneTag POC Name"]}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </section>
    )
}

export default Tickets