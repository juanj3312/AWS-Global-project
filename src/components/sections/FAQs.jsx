import React, { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you keep your user group active and growing throughout the year?",
      answer: "Consistency is key. Even if only two people show up to your first event, keep it regular — same time, same place. Try to hold it at least once a month. Always consider your audience's schedule: work hours, exam periods, family time, and holidays. Avoid long weekends and major holidays, especially around Thanksgiving or Christmas."
    },
    {
      question: "What's the best way to attract new members who actually stay engaged?",
      answer: "Focus on education and networking — not marketing. People can watch tutorials online, but they come to user groups for real-world stories, peer conversations, and community connection. Keep it authentic, not corporate."
    },
    {
      question: "How do you find and secure great speakers for your events?",
      answer: "It's a challenge, but doable. AWS Community Managers can often help, but give them a few months' notice. Also look at local tech events and see who's presenting relevant topics (like data, AI, or cloud). Reach out to them — many will speak for free if they're already traveling for another event. Persistence and framing the opportunity right go a long way."
    },
    {
      question: "What's your approach to sponsorships or partnerships for meetups?",
      answer: "Similar to finding speakers — start with AWS connections, but also research who's sponsoring other local tech events. The AWS Marketplace and partner ecosystem are full of great leads. Sponsors appreciate community-driven events, especially if you can show that funds go back into education or charity."
    },
    {
      question: "How do you make your events stand out from other tech meetups?",
      answer: "Be consistent and make it fun. Always think, \"If I were an attendee, why would I come?\" Most people are giving up personal time to be there, so it has to be worth it — interesting content, relaxed atmosphere, and a genuine sense of community."
    },
    {
      question: "What tools or platforms do you use to manage communication and logistics?",
      answer: "WhatsApp or Discord for volunteer communication. Confluence for shared knowledge (venues, sponsors, etc. — free for 10 users). Jira for large events like AWS Community Day (also free for small teams). Lu.ma, Meetup, and LinkedIn for event promotion and RSVPs. Sessionize for managing speaker submissions (if you can prove non-profit status)."
    },
    {
      question: "How do you motivate volunteers and avoid burnout?",
      answer: "Recognize two groups — pre/post-event volunteers and day-of volunteers. Day-of volunteers are easier to find (they want visibility), but pre/post volunteers are the backbone. Many will flake — don't take it personally. The reliable ones become lifelong friends and collaborators. Avoid burnout by not letting anyone overcommit. Empower them with ownership, but remember that only you have the full vision — so communicate it clearly and keep them excited."
    },
    {
      question: "How do you approach diversity and inclusion?",
      answer: "We focus on three guiding principles: Educate the community. Bring people together. Give back through charity. We also partner with a disability and diversity consultant (a free service in Canada) to review accessibility and inclusion. Our venues must have ramps and accessible facilities — inclusion starts with access."
    },
    {
      question: "How do you measure the success of your events?",
      answer: "Attendance and return rate. We usually see 50% returning attendees, which shows strong community health. We also send post-event surveys to collect feedback and ideas for improvement."
    },
    {
      question: "What are some low-cost ways to make meetups feel more professional or exciting?",
      answer: "Food always helps — even bottled water and cookies go a long way. Don't stress about catering if budgets are tight; people come for content and connection. Keep the event relaxed but organized. A \"too corporate\" feel can actually hurt networking."
    },
    {
      question: "How do you balance technical depth for beginners and advanced attendees?",
      answer: "Ideally, have two talks per event — one beginner-friendly and one advanced. If only one talk is possible, aim for a Level 200 session. Beginners will appreciate the challenge, and advanced users will still find value in seeing how others approach similar problems."
    },
    {
      question: "What are some creative ideas for making events memorable?",
      answer: "Each December, we host a social meetup at a local pub and decorate the tables with pillow stuffing to look like clouds — simple, cheap, and fun. Past creative ideas include: Escaping a straightjacket live on stage. Controlling a drone with AWS Workspaces. Running a race between AWS and Azure to boot VMs the fastest. You don't need to go that far, but do something memorable. People want good talks and good company — in a consistent, well-run, and safe space."
    },
    {
      question: "What's your biggest lesson learned from running AWS events?",
      answer: "Live by the Amazon Leadership Principles — Attendee Obsession, Ownership, Bias for Action, Frugality, Earn Trust. These apply perfectly to community leadership too."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C' }}>
            AWS User Group Leaders - Tips & Tricks
          </h2>
          <p className="text-[17px]" style={{ color: '#000000E5' }}>
            Provided by AWS UG leaders around the world
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-colors ${
                openIndex === index ? 'bg-[#ff9900]' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors ${
                  openIndex === index ? 'bg-[#ff9900]' : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-[17px] pr-4" style={{ color: '#000000E5' }}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#ff9900] text-black rounded">
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 bg-[#ff9900]">
                  {index === 11 ? (
                    <div className="text-[17px] leading-relaxed" style={{ color: '#000000E5' }}>
                      <p className="mb-3">
                        Each December, we host a social meetup at a local pub and decorate the tables with pillow stuffing to look like clouds — simple, cheap, and fun.
                      </p>
                      <p className="mb-2">Past creative ideas include:</p>
                      <ul className="list-disc pl-5 mb-3 space-y-1">
                        <li>Escaping a straightjacket live on stage.</li>
                        <li>Controlling a drone with AWS Workspaces.</li>
                        <li>Running a race between AWS and Azure to boot VMs the fastest.</li>
                      </ul>
                      <p>
                        You don't need to go that far, but do something memorable. People want good talks and good company — in a consistent, well-run, and safe space.
                      </p>
                    </div>
                  ) : (
                    <p className="text-[17px] leading-relaxed" style={{ color: '#000000E5' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://tally.so/r/pbee4b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 pb-1 text-[17px] relative group transition-all duration-300"
            style={{ fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400 }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            <span>Submit Your Tips and Tricks</span>
            <span className={`transition-all duration-300 ${hoveredButton ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
              →
            </span>
            <span 
              className="absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300"
              style={{ width: hoveredButton ? 'calc(100%)' : 'calc(100% - 28px)' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
