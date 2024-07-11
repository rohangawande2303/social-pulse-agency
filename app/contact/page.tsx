"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  contact_number: z.string().min(1, "Contact number is required"),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Social Pulse for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Website Development",
    "Social Media Marketing",
    "UI/UX Design",
    "SEO",
    "Branding",
  ]),
  info: z.string(),
  terms: z.boolean(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      company_name: "",
      help: "Learn More",
      services: "Website Development",
      info: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our Team
          </div>
          <div className="py-4 text-gray-300">
            Let&apos;s talk about how Social Pulse can help your team work
            better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b">
              <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
              <ul>
                <li className="my-2 hover:text-gray-300 transition-all duration-300">
                  <a
                    className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
                    href="8451951123"
                  >
                    <FaPhoneSquareAlt className="text-xl" /> +91-8451951123
                  </a>
                </li>
                <li className="my-2 hover:text-gray-300 transition-all duration-300">
                  <a
                    className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
                    href="mailto:socialpulse23@gmail.com"
                  >
                    <FaEnvelope className="text-xl" /> socialpulse23@gmail.com
                  </a>
                </li>
                <li className="my-2 hover:text-gray-300 transition-all duration-300">
                  <a
                    className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
                    href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
                  >
                    <FaWhatsapp className="text-xl" /> What&apos;s App
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <ul className="flex justify-center gap-8 md:gap-8 items-center sm:text-center">
                <li>
                  <a
                    className="text-2xl hover:text-gray-300 transition-all duration-300"
                    href="https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-2xl hover:text-gray-300 transition-all duration-300"
                    href="https://www.threads.net/@socialpulseagency.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaThreads className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-2xl hover:text-gray-300 transition-all duration-300"
                    href="https://www.instagram.com/socialpulseagency.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-2xl hover:text-gray-300 transition-all duration-300"
                    href="https://www.linkedin.com/company/social-pulse-agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-2xl hover:text-gray-300 transition-all duration-300"
                    href="https://www.youtube.com/@SocialPulse23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3 w-full md:h-[60%]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email address *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Contact number *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Company name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      How can we help you?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="How can we help you?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Evaluate Social Pulse for my company">
                          Evaluate Social Pulse for my company
                        </SelectItem>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Services
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Services" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Website Development">
                          Website Development
                        </SelectItem>
                        <SelectItem value="Social Media Marketing">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="SEO">SEO</SelectItem>
                        <SelectItem value="Branding">Branding</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Additional information
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        You agree to our friendly privacy policy.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF416C, #FF4B2B)",
                  borderRadius: "24px",
                }}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <PiSmiley className="text-5xl text-green-500 mb-4" />
              <h2 className="text-2xl font-medium mb-4">
                Thank you for reaching out!
              </h2>
              <p className="text-gray-300">
                Your message has been received. We will get back to you shortly.
              </p>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {
//   FaEnvelope,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPhoneSquareAlt,
//   FaYoutube,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { FaThreads } from "react-icons/fa6";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { Textarea } from "@/components/ui/textarea";
// import { PiCheckLight, PiSmiley } from "react-icons/pi";
// import Navbar from "@/components/navbar";

// const FormSchema = z.object({
//   first_name: z.string(),
//   last_name: z.string(),
//   email: z.string().email(),
//   job_title: z.string(),
//   company_name: z.string(),
//   help: z.enum([
//     "Evaluate Social Pulse for my company",
//     "Learn More",
//     "Get a Quote",
//     "Other",
//   ]),
//   services: z.enum([
//     "Website Development",
//     "Social Media Marketing",
//     "Content Creation",
//     "SEO",
//     "Website Development",
//   ]),
//   info: z.string(),
//   terms: z.boolean(),
// });

// type FormValues = z.infer<typeof FormSchema>;

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       job_title: "",
//       company_name: "",
//       help: "Learn More",
//       services: "Mobile App Develoment",
//       info: "",
//     },
//   });

//   async function onSubmit(data: FormValues) {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         throw new Error("Something went wrong");
//       }

//       setSubmitted(true);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Something went wrong",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Navbar
//         scrollToWebsiteDesign={() => {}}
//         scrollToGraphicDesign={() => {}}
//         scrollToShopifyStores={() => {}}
//         scrollToBrands={() => {}}
//         scrollToServices={() => {}}
//       />
//       <div className="md:flex items-start justify-center md:py-20 px-6">
//         <div className="">
//           <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//             Contact our Team
//           </div>
//           <div className="py-4 text-gray-300">
//             Let&apos;s talk about how Social Pulse can help your team work
//             better.
//           </div>

//           <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
//             <div className="flex gap-4 border-b">
//               <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
//               <ul>
//                 <li className="my-2 hover:text-gray-300 transition-all duration-300">
//                   <a
//                     className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
//                     href="8451951123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaPhoneSquareAlt className="text-xl" /> +91-8451951123
//                   </a>
//                 </li>
//                 <li className="my-2 hover:text-gray-300 transition-all duration-300">
//                   <a
//                     className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="socialpulse23@gmail.com"
//                   >
//                     <FaEnvelope className="text-xl" /> socialpulse23@gmail.com
//                   </a>
//                 </li>
//                 <li className="my-2 hover:text-gray-300 transition-all duration-300">
//                   <a
//                     className="text-base flex items-center justify-center md:justify-start gap-2 sm:text-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://api.whatsapp.com/send?phone=8451951123&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
//                   >
//                     <FaWhatsapp className="text-xl" /> What&apos;s App
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* <div className="flex gap-4 border-b">
//               <div className="font-normal pb-4">
//                 Enterprise features to securely manage user access and security.
//               </div>
//             </div> */}
//             {/* <div className="flex gap-4">
//               <div className="font-normal pb-4">
//                 Dedicated support to work with you on your setup and help you
//                 build the best plan for your company.
//               </div>
//             </div> */}
//             <div className="mt-8">
//               <ul className="flex justify-center gap-8 md:gap-8 items-center sm:text-center">
//                 <li>
//                   <a
//                     className="text-2xl hover:text-gray-300 transition-all duration-300"
//                     href="https://www.facebook.com/profile.php?id=61553120560771&mibextid=ZbWKwL"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook className="w-6 h-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-2xl hover:text-gray-300 transition-all duration-300"
//                     href="https://www.threads.net/@socialpulseagency.in"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaThreads className="w-6 h-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-2xl hover:text-gray-300 transition-all duration-300"
//                     href="https://www.instagram.com/socialpulseagency.in/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram className="w-6 h-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-2xl hover:text-gray-300 transition-all duration-300"
//                     href="https://www.linkedin.com/company/social-pulse-agency/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn className="w-6 h-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-2xl hover:text-gray-300 transition-all duration-300"
//                     href="https://www.youtube.com/@SocialPulse23"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaYoutube className="w-6 h-6" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <Form {...form}>
//           {!submitted ? (
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3"
//             >
//               <div className="md:flex items-center gap-6">
//                 <FormField
//                   control={form.control}
//                   name="first_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         First name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="last_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         Last name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Email address *
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="company_name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Company name
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="help"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       How can we help you?
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger className="w-full">
//                           <SelectValue placeholder="How can we help you?" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Evaluate Bird for my company">
//                           Evaluate Bird for my company
//                         </SelectItem>
//                         <SelectItem value="Learn More">Learn More</SelectItem>
//                         <SelectItem value="Get a Quote">Get a Quote</SelectItem>
//                         <SelectItem value="Other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="services"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Services
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger className="w-full">
//                           <SelectValue placeholder="Services" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="SEO">
//                           SEO
//                         </SelectItem>
//                         <SelectItem value="Social Media Marketing">
//                           Social Media Marketing
//                         </SelectItem>
//                         <SelectItem value="UI/UX Design">
//                           UI/UX Design
//                         </SelectItem>
//                         <SelectItem value="Branding">Branding</SelectItem>
//                         <SelectItem value="Website Development">
//                           Website Development
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="info"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Additional information
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="terms"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                     <FormControl>
//                       <Checkbox
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                       />
//                     </FormControl>
//                     <div className="space-y-1 leading-none">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         You agree to our friendly privacy policy.
//                       </FormLabel>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={loading}
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, #FF416C, #FF4B2B)",
//                   borderRadius: "24px",
//                 }}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </Button>
//             </form>
//           ) : (
//             <div className="text-center">
//               <PiSmiley className="text-5xl text-green-500 mb-4" />
//               <h2 className="text-2xl font-medium mb-4">
//                 Thank you for reaching out!
//               </h2>
//               <p className="text-gray-300">
//                 Your message has been received. Well get back to you shortly.
//               </p>
//             </div>
//           )}
//         </Form>
//       </div>
//     </div>
//   );
// }
