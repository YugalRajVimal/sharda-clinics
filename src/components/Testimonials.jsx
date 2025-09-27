import React from "react"; 
import { FaStar } from "react-icons/fa";
import test1 from "../assets/testimonials/test1.avif"
import test2 from "../assets/testimonials/test2.avif"
import test3 from "../assets/testimonials/test3.avif"

const testimonials = [
  {
    name: "Kiran Bhadoriya",
    role: "Patient",
    testimonial:
      "Dr. Vishwa Deepak is one of the best physicians I've visited. They truly care about your health and don’t rush through appointments. I always leave the clinic feeling reassured and well taken care of.",
    rating: 5,
    image: test1,
  },
  {
    name: "Abhishek Bhadoriya",
    role: "Patient",
    testimonial:
      "Had a great experience here. The doctor was attentive and diagnosed my issue quickly. The medicines prescribed worked perfectly. I would highly recommend this clinic to family and friends.",
    rating: 5,
    image: test2,
  },
  {
    name: "Ajay Rawat",
    role: "Patient",
    testimonial:
      "This clinic stands out for its exceptional patient care. The physician is approachable and thorough. Booking an appointment is easy, and follow-ups are handled well.",
    rating: 5,
    image: test3,
  },
  {
    name: "Ajay Kumar",
    role: "Patient",
    testimonial:
      "Clean and well-maintained clinic with minimal wait times. Dr. Vishwa Deepak is calm, composed, and listens patiently. A very reassuring and skilled physician.",
    rating: 5,
    image: test1,
  },
  {
    name: "Amit Tomer",
    role: "Patient",
    testimonial:
      "Excellent doctor with a great attitude. The diagnosis was spot on, and I recovered quickly. Thank you for the outstanding care and attention to detail.",
    rating: 5,
    image: test2,
  },
  {
    name: "Archana Mishra",
    role: "Patient",
    testimonial:
      "Very thankful for the excellent service. Dr. Vishwa Deepak is experienced and compassionate. It’s rare to find doctors who combine expertise with a personal touch these days.",
    rating: 5,
    image: test3,
  },
  {
    name: "Pravesh Kumar",
    role: "Patient",
    testimonial:
      "Honest and genuine opinion as he is an ex-Indian Army Officer. Always trustworthy.",
    rating: 5,
    image: test1,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="mx-auto container px-6">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="font-bold text-3xl mb-4">
            What Our <span className="text-medical-gradient">Patients Say</span>
          </h2>
          <p className="text-gray-600">
            Hear from our patients about their experiences at{" "}
            <span className="font-semibold">Sharda Clinic, Agra</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl border p-8 border-gray-100"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400 h-4 w-4"
                        : "text-yellow-400 opacity-30 h-4 w-4"
                    }`}
                  />
                ))}
              </div>

              {/* Card */}
              <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full h-10 mr-3 object-cover w-10"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
