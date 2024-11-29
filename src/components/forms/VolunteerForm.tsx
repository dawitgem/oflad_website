import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
        formState: { errors },
    } = useForm<VolunteerFormValues>({
        resolver: zodResolver(volunteerSchema),
    });

    const [submittedData, setSubmittedData] = useState<VolunteerFormValues | null>(null);

    const onSubmit = (data: VolunteerFormValues) => {
        setSubmittedData(data);
        console.log("Submitted Data:", data);
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
                    className="w-[80px] bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark"
                >
                    Submit
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <h3 className="text-lg font-semibold text-green-700">Submitted Data</h3>
                    <pre className="text-sm text-gray-700">{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default VolunteerForm;
