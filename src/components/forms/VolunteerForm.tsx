import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { capitalize } from "../../utils/captialize";

// Zod Schema
const volunteerSchema = z.object({
    // personal information
    fullName: z.string().min(2, { message: "Full name must be at least 3 characters long." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number." }),
    address: z.string().min(3, { message: "Address must be at least 3 characters long." }),

    // other question
    profession: z.string().min(3, { message: "Please tell us about your profession background." }),

    areaOfInterest: z.array(z.string()).min(1, { message: "Please select at least one area of interest." }),
    areaOfInterestOther: z.string().optional(),

    howDidYouHearAboutUs: z.array(z.string()).min(1, { message: "Please select at least one option." }),
    howDidYouHearAboutUsOther: z.string().optional(),

    availability: z.union([
        z.literal("occasionally"),
        z.literal("weekly"),
        z.literal("internship"),
        z.string().min(1, { message: "Please specify your availability." })
    ]).optional(),

    availabilityOther: z.string().optional(),

});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

const VolunteerForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, 
        reset,
        watch,
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
                <p><strong>Name:</strong> ${data.fullName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>phone:</strong>${data.phoneNumber}</p>
                <p><strong>Address:</strong>${data.address}</p>
                <hr/>
                <p><strong>profession:</strong></p>
                <p>${data.profession}</p>
                <br>
                <p><strong>Area of interest:</strong></p>
                <p>${data.areaOfInterest}</p>
                <p><strong>Other:</strong> ${data.areaOfInterestOther}</p>
                <br/>
                <p><strong>How did you hear about us:</strong></p>
                <p>${data.howDidYouHearAboutUs}</p>
                <p><strong>Other:</strong> ${data.howDidYouHearAboutUsOther}</p>
                <br/>
                <p><strong>Availability:</strong></p>
                <p>${data.availability}</p>
                <p><strong>Other:</strong> ${data.availabilityOther}</p>

              </body>
            </html>
          `;
            const response = await fetch('https://oflad-website.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${capitalize(data.fullName)}`,
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
        <div className=" bg-white md:p-6 rounded-md shadow-md" style={{ border: "1px #80808033 solid" }}> 
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                {/* Full Name */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="fullName" className="block text-md font-medium text-gray-800">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}
                        className={` block md:w-1/2  p-3 rounded-md border ${errors.fullName ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                </div>

                {/* email */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="block text-md font-medium text-gray-800">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={` block md:w-1/2  p-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                {/* phoneNumber */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="phoneNumber" className="block text-md font-medium text-gray-800">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        {...register("phoneNumber")}
                        className={` block md:w-1/2  p-3 rounded-md border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
                </div>

                {/* address */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="address" className="block text-md font-medium text-gray-800">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        {...register("address")}
                        className={` block md:w-1/2 p-4 rounded-md border ${errors.address ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                </div>

                <hr className="my-6" />

                {/* profession */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="profession" className="block text-md font-medium text-gray-800">
                        Please tell us about your profession background
                    </label>
                    <textarea
                        id="profession"
                        {...register("profession")}
                        className={` block md:w-1/2 p-4 rounded-md border ${errors.profession ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                    />
                    {errors.profession && <p className="text-sm text-red-500">{errors.profession.message}</p>}
                </div>

                {/* how did you hear about us? */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="howDidYouHearAboutUs" className="block text-md font-medium text-gray-800">
                        How did you hear about us ?
                    </label>
                    <div className="flex flex-col gap-2 px-4 md:w-1/2">
                        {[
                            { value: "facebook_instagram", label: "Oflad Facebook or Instagram" },
                            { value: "telegram", label: "Oflad Telegram channel" },
                            { value: "linkedin", label: "Oflad LinkedIn page" },
                            { value: "website", label: "Oflad official website" },
                            { value: "mass_media_tv", label: "Mass media or Television" },
                            { value: "ics_event", label: "ICS event" },
                            { value: "word_of_mouth", label: "Word of mouth or personal referral" },
                            { value: "public_event", label: "Public Events" },
                            { value: "other", label: "Other (please specify)" },
                        ].map((option) => (
                            <label key={option.value} className="flex items-center gap-2">
                                <input
                                    id={`howDidYouHearAboutUs_${option.value}`}
                                    type="checkbox"
                                    value={option.value}
                                    {...register("howDidYouHearAboutUs")}
                                    className="accent-blue-600"
                                />
                                {option.label}
                            </label>
                        ))}

                        {Array.isArray(watch("howDidYouHearAboutUs")) && watch("howDidYouHearAboutUs").includes("other") && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Please specify how you heard about us"
                                    {...register("howDidYouHearAboutUsOther")}
                                    className={`mt-2 block md:w-1/2 p-3 rounded-md border ${errors.availabilityOther ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                                />
                            </div>
                        )}
                    </div>
                    {errors.howDidYouHearAboutUs && <p className="text-sm text-red-500">{errors.howDidYouHearAboutUs.message}</p>}
                </div> 


                {/* area of interest */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="areaOfInterest" className="block text-md font-medium text-gray-800">
                        Which of the following areas would you like to volunteer in?
                    </label>
                    <div className="flex flex-col gap-2 px-4 md:w-1/2">
                        {[
                            { value: "reading_activities", label: "Supporting reading activities in public libraries" },
                            { value: "children_literacy", label: "Assisting with children’s literacy programs" },
                            { value: "digital_literacy", label: "Teaching digital literacy / basic computer skills" },
                            { value: "community_events", label: "Organizing community reading events or book drives" },
                            { value: "library_resources", label: "Managing library resources (cataloging, sorting, etc.)" },
                            { value: "social_media", label: "Social media or content creation (blog posts, photos, videos)" },
                            { value: "fundraising", label: "Fundraising / outreach / partnerships" },
                            { value: "other", label: "Other (please specify)" },
                        ].map((option) => (
                            <label key={option.value} className="flex items-center gap-2">
                                <input
                                    id={`areaOfInterest_${option.value}`}
                                    type="checkbox"
                                    value={option.value}
                                    {...register("areaOfInterest")}
                                    className="accent-blue-600"
                                />
                                {option.label}
                            </label>
                        ))}
                        {Array.isArray(watch("areaOfInterest")) && watch("areaOfInterest").includes("other") && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Please specify your area of interest"
                                    {...register("areaOfInterestOther")}
                                    className={`mt-2 block md:w-1/2 p-3 rounded-md border ${errors.availabilityOther ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                                />
                            </div>
                        )}
                    </div>
                    {errors.areaOfInterest && <p className="text-sm text-red-500">{errors.areaOfInterest.message}</p>}
                </div> 
                
                {/* availability */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="availability" className="block text-md font-medium text-gray-800">
                        Availability
                    </label>
                    <div className="flex flex-col gap-2 px-4 md:w-1/2">
                        {[
                            { value: "occasionally", label: "Occasionally" },
                            { value: "weekly", label: "Weekly" },
                            { value: "internship", label: "Internship" },
                            { value: "other", label: "Other (please specify)" },
                        ].map((option) => (
                            <label key={option.value} className="flex items-center gap-2">
                                <input
                                    id={`availability_${option.value}`}
                                    type="radio"
                                    value={option.value}
                                    {...register("availability")}
                                    className="accent-blue-600"
                                />
                                {option.label}
                            </label>
                        ))}
                        {watch("availability") === "other" && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Please specify your availability"
                                    {...register("availabilityOther")}
                                    className={`mt-2 block md:w-1/2 p-3 rounded-md border ${errors.availabilityOther ? "border-red-500" : "border-gray-300"
                                        } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                                />
                            </div>
                        )}
                    </div>
                    
                    {errors.availability && <p className="text-sm text-red-500">{errors.availability.message}</p>}
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
