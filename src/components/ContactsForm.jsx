"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ContactsForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredTime: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
        if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            toast.success("Form submitted successfully!");
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                preferredTime: '',
                agree: false,
            });
        } else {
            toast.error("Unable to submit form! Please fill all fields.");
        }
    };

        return (
            <form onSubmit={handleSubmit} className='bg-[#f5f7fa] w-full md:w-[450px] border-2 border-[#1e4145e6] rounded-[8px] flex flex-col p-6 gap-8 text-[#1e4145e6]'>
                <div className='flex flex-col gap-2 items-center text-center '>
                    <div className='text-xl font-bold'>Get In Touch</div>
                    <div className='text-[14px]'>Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.</div>

                </div>

                <div className="flex flex-col gap-3 font-[500]">
                    <div>
                        Name
                        <input 
                            name='name' 
                            type="text" 
                            placeholder="Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full rounded-[6px] px-3 py-2 border-2 border-[#1e4145e6] mt-1" />
                        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        Email
                        <input 
                            name='email' 
                            type="text" 
                            placeholder="you@example.com" 
                            onChange={handleChange} 
                            value={formData.email} 
                            className="w-full rounded-[6px] px-3 py-2 border-2 border-[#1e4145e6] mt-1" />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        Phone
                        <input 
                            name='phone' 
                            type="text" 
                            placeholder="(555) 234-5678" 
                            onChange={handleChange} 
                            value={formData.phone} 
                            className="w-full rounded-[6px] px-3 py-2 border-2 border-[#1e4145e6] mt-1" />
                        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                    </div>
                    <div>
                        Message
                        <textarea 
                            name='message' 
                            placeholder='What brings you here?' 
                            onChange={handleChange} 
                            value={formData.message} 
                            rows={2} 
                            className="w-full rounded-[6px] px-3 py-2 border-2 border-[#1e4145e6] mt-1"></textarea>
                        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                    </div>
                    <div>
                        Preferred time to reach you
                        <input 
                            name='preferredTime' 
                            type="text" 
                            placeholder="e.g. Mornings, Afternoon, Weekends" 
                            onChange={handleChange} 
                            value={formData.preferredTime} 
                            className="w-full rounded-[6px] px-3 py-2 border-2 border-[#1e4145e6] mt-1" />
                        {errors.preferredTime && <p className="text-red-600 text-sm">{errors.preferredTime}</p>}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input 
                            name="agree" 
                            type="checkbox" 
                            checked={formData.agree} 
                            onChange={handleChange} />
                        <label>I agree to be contacted</label>
                    </div>
                    {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}
                    <div>
                        <button className='w-full py-2 text-[#B5DBDF] rounded-[6px] bg-[#1e4145e6] hover:bg-[#f5f7fa] hover:border-4 border-[#1e4145e6] hover:text-[#1e4145e6]'>
                            Submit
                        </button>
                    </div>
                    <div className='text-[14px]'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-info h-3 w-3 inline m-auto"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        By submitting, you confirm you are 18+ and agree to our <u className='cursor-pointer'>Privacy Policy & TOS </u> and to receive emails & texts from Ellie Shumaker.
                    </div>

                </div>

            </form>
        );
};

export default ContactsForm
