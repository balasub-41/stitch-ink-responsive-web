
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  quantity: z.string().min(1, "Quantity is required"),
  hasVectorVersion: z.enum(["yes", "no", "not_certain"]),
  targetDate: z.date().optional(),
  projectDetails: z.string().min(1, "Project details are required"),
});

type QuoteFormValues = z.infer<typeof formSchema>;

interface QuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteForm = ({ open, onOpenChange }: QuoteFormProps) => {
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      service: "",
      quantity: "",
      hasVectorVersion: "not_certain",
      projectDetails: "",
    },
  });

  const onSubmit = (values: QuoteFormValues) => {
    console.log(values);
    alert("Quote request submitted! We'll get back to you soon.");
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Request for Quote
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground">
            One Stop Shop for Screen Printing, Embroidery, Vinyl Signs, & Banners.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Please complete the below quote request form. Screen Printing Minimum is 24 and Embroidery is 12.
          </p>
        </DialogHeader>

        <div className="p-4 bg-gradient-to-b from-cyan-500/20 to-cyan-700/50 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact *</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <FormControl>
                        <select
                          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
                          {...field}
                        >
                          <option value="">Please Select An Option...</option>
                          <option value="screen_printing">Screen Printing</option>
                          <option value="embroidery">Embroidery</option>
                          <option value="vinyl_signs">Vinyl Signs</option>
                          <option value="banners">Banners</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="Quantity Needed" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="hasVectorVersion"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Do you have a vector version of your logo?</FormLabel>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            checked={field.value === "yes"} 
                            onChange={() => field.onChange("yes")}
                            className="h-4 w-4" 
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            checked={field.value === "no"} 
                            onChange={() => field.onChange("no")}
                            className="h-4 w-4" 
                          />
                          <span>No</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            checked={field.value === "not_certain"} 
                            onChange={() => field.onChange("not_certain")}
                            className="h-4 w-4" 
                          />
                          <span>Not Certain</span>
                        </label>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="targetDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Target Completion Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Choose Date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List the details about your project. Please be as specific as possible. Screen Printing Minimum is 24 and Embroidery is 12." 
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <p className="mb-2 text-xs font-medium">FILES:</p>
                <p className="text-xs mb-2">Please upload your files below. Maximum upload size per file is 25mb</p>
                <p className="text-xs mb-4">Note: the only file types accepted are: ai, .jpg, .jpeg, .pdf, .eps, .cdr, .png, .docx, .xls, .xlsx, .tif, .tiff, .pdf</p>

                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                  </div>
                  <p className="text-sm mt-2">Drop and Drag or</p>
                  <Button type="button" variant="outline" size="sm" className="mt-2">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2 py-4">
                <Checkbox id="recaptcha" />
                <label htmlFor="recaptcha" className="text-sm">I'm not a robot</label>
              </div>

              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                Request Quote
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
