import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { capitalize } from "../../utils/captialize";

// Zod Schema
const volunteerSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number." }),
    skill: z.string().optional(),
    reason: z.string().min(10, { message: "Reason must be at least 10 characters long." }),
});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

const VolunteerForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm<VolunteerFormValues>({
        resolver: zodResolver(volunteerSchema),
    });
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit = async (data: VolunteerFormValues) => {
        try {
            setIsLoading(true)
            const htmlForm = `
            <html>
              <body>
                <h1>Volunteer Form Submission</h1>
                <p><strong>Name:</strong> ${data.firstName}  ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>phone:</strong>${data.phoneNumber}</p>
                <p><strong>skill:</strong>${data.skill}</p>
                <p><strong>reason:</strong></p>
                <p>${data.reason}</p>
              </body>
            </html>
          `;
            const response = await fetch('http://localhost:8000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${capitalize(data.firstName)} ${capitalize(data.lastName)} `,
                    from: data.email,
                    html: htmlForm,
                    subject: 'New Volunteer Form Submission',
                }),
            });

            if (response.ok) {
                reset();
                alert('Your message has been sent successfully!');
                setIsLoading(false)
            } else {
                alert('There was an error sending your message. Please try again later.');
                setIsLoading(false)
            }
        } catch (error) {
            console.error('Error sending form data:', error);
            alert('There was an error sending your message. Please try again later.');
            setIsLoading(false)
        }


    };

    return (
        <div className=" bg-white md:p-6 rounded-md shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* First Name */}
                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        className={` block  p-3 md:w-1/2 rounded-md border ${errors.firstName ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        className={` block md:w-1/2  p-3 rounded-md border ${errors.lastName ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`block md:w-1/2  p-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        {...register("phoneNumber")}
                        className={`block md:w-1/2 p-3 rounded-md border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        Skill (Optional)
                    </label>
                    <input
                        type="text"
                        id="skill"
                        {...register("skill")}
                        className="block md:w-1/2 p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="firstName" className="block text-md font-medium text-gray-800">
                        Why do you want to participate?
                    </label>
                    <textarea
                        id="reason"
                        {...register("reason")}
                        className={` block md:w-1/2 p-4 rounded-md border ${errors.reason ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.reason && <p className="text-sm text-red-500">{errors.reason.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-[80px] ${isLoading ? "opacity-50" : "opacity-100"} bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark`}
                >
                    {isLoading ? "Sending..." : "Submit"}
                </button>
            </form>

        </div>
    );
};

export default VolunteerForm;
