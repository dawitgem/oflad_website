import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(3, 'Name is required').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type FormData = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  // Setup react-hook-form with Zod resolver
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission
    reset(); // Reset the form after submission
  };

  return (
    <div id="contact-us" className="bg-gray-50 py-16">
      <div className="container mx-auto space-y-10 lg:p-16 ">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center text-secondary-dark font-montserrat ">
          Contact Us
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-wrap items-start justify-between gap-12">
          {/* Contact Form */}
          <div className="bg-white w-full lg:w-2/5 p-8 rounded-lg shadow-md space-y-10">
            <h3 className="text-2xl font-semibold text-gray-800 font-montserrat">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  placeholder="Your Name"
                  className={`block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:border-transparent`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  placeholder="Your Email"
                  className={`block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Your Message"
                  rows={5}
                  className={`block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:border-transparent`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-secondary-dark text-white px-6 py-3 rounded-lg hover:bg-secondary-dark/80 transition focus:outline-none focus:ring-2 focus:ring-secondary-dark"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Organization Details */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-10">
              <h3 className="text-2xl font-semibold text-gray-800 font-montserrat ">
                Find Us
              </h3>
              <div className="space-y-8 text-gray-700">
                <p>
                  <strong>Address:</strong> 1234 Education Street, Addis Ababa,
                  Ethiopia
                </p>
                <p>
                  <strong>Email:</strong> info@oflad.org
                </p>
                <p>
                  <strong>Phone:</strong> +251 123 456 789
                </p>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6927425373127!2d76.93022581526007!3d10.788078692321226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a89106ffdcba0e9%3A0xddf0e6c4f3a6e5e6!2sGoogle%20India!5e0!3m2!1sen!2sin!4v1634543209367!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
