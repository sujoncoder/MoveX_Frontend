import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../lib/faqData";



const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-green-600" />
                            ) : (
                                <Plus className="w-5 h-5 text-green-600" />
                            )}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 p-5" : "max-h-0 p-0"
                                } overflow-hidden text-gray-600`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default FAQ;