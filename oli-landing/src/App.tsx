import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedOli() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <AnimatePresence>
        {show && (
          <motion.div
            key="oli"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-6xl animate-pulse"
          >
            🤖
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ChatbotLandingPage() {
  const [oliResponse, setOliResponse] = useState("Hello there! I'm Oli. How can I help you today?");
  const [memory, setMemory] = useState<string[]>([]);

  const handleUserQuery = (query: string) => {
    const newResponse = `I remember you asked about: "${query}". Here's an update!`;
    setMemory((prev) => [...prev, query]);
    setOliResponse(newResponse);
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 via-indigo-700 to-blue-900 text-gray-100 min-h-screen">
      <section className="text-center py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedOli />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet <span className="text-yellow-300">Oli</span> Your AI Support Assistant
          </h1>
          <p className="text-xl mb-8">
            Oli is friendly, patient, and always ready to help. He understands your
            customers and responds with care—like a digital teammate who never sleeps.
          </p>
          <Button className="text-lg px-6 py-3 rounded-2xl shadow-lg">Try It Free</Button>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="bg-indigo-600 rounded-2xl p-6 max-w-lg mx-auto shadow-md">
          <p className="text-lg text-white animate-pulse">{oliResponse}</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {[
          {
            title: "Upload FAQs",
            desc: "Oli learns your support content instantly."
          },
          {
            title: "Embed Anywhere",
            desc: "Easily add Oli to your site or chat platform."
          },
          {
            title: "Let Oli Help",
            desc: "Oli responds kindly, solves problems fast."
          }
        ].map((item, idx) => (
          <div key={idx}>
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-indigo-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Teams Love Oli</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["No-Code Setup", "GPT-4o Conversations", "Analytics Dashboard", "Multi-Language Support", "Human Escalation Logic", "GDPR-Compliant"].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$49/mo",
              features: ["1 bot", "500 chats/mo", "Basic dashboard"]
            },
            {
              name: "Pro",
              price: "$199/mo",
              features: ["5K chats", "CRM/API integration", "Advanced reporting"]
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["Unlimited bots", "SLA & support", "White-label"]
            }
          ].map((plan, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="text-left space-y-2">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400 w-5 h-5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-indigo-700 to-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let Oli Take Care of Your Customers</h2>
        <p className="text-lg mb-8">Start your free trial today and let Oli handle the repetitive questions with empathy and speed.</p>
        <Button className="text-lg px-6 py-3 rounded-2xl bg-white text-indigo-700">Start Free Trial</Button>
      </section>

      <footer className="py-10 px-6 bg-black text-gray-400 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SupportBot AI. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="underline">Privacy Policy</a> · <a href="#" className="underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}