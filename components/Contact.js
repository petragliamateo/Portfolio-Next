import React from "react";

export default function Contact(){

    const [formData, setFormData] = React.useState({
        Name: "", Email: "", Message: "",
    })
    const inputStyle = "mx-10 mb-5 h-10 bg-dark-2 text-white p-5 outline-dark-3 caret-dark-6"

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData)
        window.alert("Sended")
    }

    function handleChange(event){
        setFormData(prev => ({
            ...prev,
            [event.target.name] : event.target.value,
        }))
    }

    return(
        <div className="w-full bg-dark-4 flex flex-col shadow-xl " id="contact">

            <form onSubmit={handleSubmit} 
                className="flex flex-col self-center w-4/5 max-w-xl bg-dark-1 
                            my-16">

            <h1 className="self-center my-12 text-3xl font-semibold text-gray-300">Contacto</h1>

                <input type="text" placeholder="Name" onChange={handleChange}
                        name="Name" required
                        className={inputStyle} />

                <input type="email" placeholder="Email" onChange={handleChange}
                        name="Email" required
                        className={inputStyle} />

                <textarea name="Message" placeholder="Message" onChange={handleChange}
                        className={`${inputStyle} h-64`} />

                <button className="btn btn-dark border-dark-3 active:border-dark-4">Submit</button>

            </form>

        </div>
    )
}