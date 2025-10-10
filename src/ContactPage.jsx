import Footer from './Footer.jsx'
import React from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

function ContactPage() {
    
    const { 
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm();

    function onSubmit(data) {
        console.log("Form submitted:", data);
        Swal.fire(`Thank ${data.name} for contacting us!`)
        reset();
    }

    return (
        <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
            <div className="mx-auto col-8">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded">
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                        })}
                    />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        className="form-control"
                        placeholder="Type your message"
                        {...register("message", { required: "Message cannot be empty" })}
                    ></textarea>
                    {errors.message && <span className="text-danger">{errors.message.message}</span>}
                    </div>

                    <div className="text-center">
                    <button type="submit" className="btn btn-dark px-4">Send Message</button>
                    </div>
                </form>

            </div>
        </div>
        </div>
    )
}

export default ContactPage