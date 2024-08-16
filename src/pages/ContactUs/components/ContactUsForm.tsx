import { useForm } from "react-hook-form";
import { Message } from "@/types";

const ContactUsForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: Message) => {
        console.log(data);
    };
    return (
        <div>
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 lg:grid lg:grid-cols-2 gap-8 max-lg:space-y-4 mb-12"
            >
                <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        className="focus:outline-none"
                        id="firstname"
                        {...register("firstname")}
                    />
                </div>
                <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        className="focus:outline-none"
                        id="lastname"
                        {...register("lastname")}
                    />
                </div>
                <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="focus:outline-none"
                        id="email"
                        {...register("email")}
                    />
                </div>
                <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                    <label htmlFor="phone">Phone</label>
                    <input
                        className="focus:outline-none"
                        id="phone"
                        {...register("phone")}
                    />
                </div>
                <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2 col-span-full">
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows={5}
                        className="focus:outline-none"
                        id="message"
                        {...register("message")}
                    ></textarea>
                </div>
                <button className="flex items-center justify-center gap-2 font-semibold text-xl px-10 py-5 text-white bg-primary rounded-lg hover:opacity-70 transition-all w-48 whitespace-nowrap">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;
