import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/projects';
import ImageModal from './ImageModal';

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [expandedSection, setExpandedSection] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: '',
    caption: ''
  });

  const openModal = (imageUrl: string, caption: string) => {
    setCurrentImage({ url: imageUrl, caption });
    setModalOpen(true);
  };
  
  // Direct to specific case study pages for certain IDs
  if (id === "2") {
    return <Navigate to="/case-study/2" />;
  }
  
  const project = projectsData.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl font-medium text-warmGray-800 mb-8">Booking Flow Revamp</h1>
          <Link to="/" className="inline-flex items-center text-warmOrange-600 hover:text-warmOrange-700 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-warmGray-800 text-white py-16 mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-warmOrange-400 hover:text-warmOrange-300 transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-warmGray-700 text-warmGray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-warmGray-300">{project.description}</p>
            <p className="text-lg text-warmGray-500 mt-4">10 mins read</p>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">Background</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Due to mental health counseling being a highly stigmatized topic in Asia, people could spend a long time "self-help" before deciding to seek counselling service – where Safe Space comes in. Safe Space is a mental health-tech platform that allows users to book and conduct counseling sessions directly through the platform.
            </p>
            <div className="bg-warmGray-100 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">Stakeholders</p>
                  <p className="text-warmGray-700 mb-4">Counselling, Support, Engineers, Sales Teams, Therapists</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Timeline</p>
                  <p className="text-warmGray-700 mb-4">Jul - Sep 2022: Research & Design<br></br>Oct 2022: Handoff & QA</p>
                </div>
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">My Role</p>
                  <p className="text-warmGray-700 mb-4">Product Designer & UX Researcher (Fully Remote)</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Tools</p>
                  <p className="text-warmGray-700">Figma, Miro, Optimal Workshop, G-Suites</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">The Problem</h2>
            <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
              <p className="text-warmGray-700 italic">
                The two high drop-off pages were the Intake Form page and the Select Date/Time page. 
                30% of users did not complete the intake form; and 30% of users did not make a decision about the date/time of the booking.
              </p>
            </div>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              From the conversion chart, if we increase the traffic to the Payment page, we will be able to increase the overall conversion rate, hence achieving the business goal of increasing the B2C revenue.
            </p>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Interestingly, from payment to actually completing booking, the drop was only 10%, meaning users who arrived at the payment page had 75% chance of completing the transaction.
            </p>
            <img
              src="/imgs/Counselling_Conversion.png"
              alt="Conversion Booking Flow Old"
              className="w-full h-auto object-contain rounded-lg mb-2"
              />
              <img
              src="/imgs/Counselling_ChartBefore.png"
              alt="User Flow Old"
              className="w-full h-auto object-contain rounded-lg mb-2"
              />
            <p className="text-warmGray-700 font-medium mb-8 mt-4">
              To increase the traffic to the Payment page, we needed to understand the journey before payment: the Aware, Explore, and Action phases. Thus, we conducted UX research to understand if what we offered matched with users' expectations.
            </p>
            <img
              src="/imgs/Counselling_UserFlow.png"
              alt="Conversion Booking Flow Old"
              className="w-full h-auto object-contain rounded-lg mb-2"
                          />
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">Research: "What are our website visitors looking for?"</h2>
          
            <p className="text-warmGray-700 mb-6 leading-relaxed">
                  I conducted two rounds of research with 8 strangers and 6 clients to understand the new and old perspectives about the client's JTBD (Jobs To Be Done) when they come to Safe Space mental health counselling platform.
                </p>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-2">Research Round #1</h4>
                  <p className="text-warmGray-700 font-medium mb-2">General usability testing of the booking flow with strangers</p>
                  <p className="text-warmGray-700 mb-4">
                    Each participant was given a scenario where they recall a time they felt stressed and were introduced to Safe Space by friends. As users who had never heard about Safe Space, their task was to perform the user journey of getting help from the recommended platform while thinking out loud.
                  </p>
                  
                  <h5 className="font-medium text-warmGray-700 mb-2">Objectives</h5>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-2">
                    <li>To understand from a fresh perspective, the thought process when landing on Safe Space's website with the goal of feeling better mentally.</li>
                    <li>To understand from a fresh perspective, the service exploratory behavior pattern and how the current flow aligns with their expectations.</li>
                  </ul>
                </div>
                
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-2">Research Round #2</h4>
                  <p className="text-warmGray-700 font-medium mb-2">General user interviews + usability testing of the booking flow with clients</p>
                  <p className="text-warmGray-700 mb-4">
                    Two-parts interview: we started with open-ended questions to understand the clients' thinking process of getting to know Safe Space, then we asked them to perform the task of booking an appointment while thinking out loud.
                  </p>
                  
                  <h5 className="font-medium text-warmGray-700 mb-2">Objectives</h5>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-2">
                    <li>To understand the thought process and behavior before a client chooses Safe Space.</li>
                    <li>To understand the decision making process and important factors when a client chooses + books a therapist.</li>
                  </ul>
                </div>

                <img
              src="/imgs/Counselling_Reserach.png"
              alt="Counselling Research"
              className="w-full h-auto object-contain rounded-lg mb-8 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Reserach.png', 'Counselling Research')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
              />

                <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">💡 Insights From The Research</h4>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[OBSERVATION]</p>
                  <p className="text-warmGray-700 mb-4">
                    Before users commit to go with Safe Space (commit = purchase a session), an important part of the exploratory process includes understanding the "supplies" and how the supplies can satisfy their needs. The actions involved in this exploratory process include:
                  </p>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-2">
                    <li>Playing around with the booking flow and experimenting with the filters, and comparing different therapists' profiles. This is a process that includes a lot of back and forth navigation.</li>
                    <li>Clicking on the "Therapist" page first when landed on the marketing website.</li>
                  </ul>
                </div>
                
                <div className="bg-warmGray-100 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[PROBLEM]</p>
                  <p className="text-warmGray-700 mb-2">
                    When user click "Book an appointment", their expectation was to book a session with a therapist, not answering questions (intake form). Their cursors moved around the screen to find a way to skip the questionnaire.
                  </p>
                </div>
                
                <div className="bg-warmGray-100 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[PROBLEM]</p>
                  <p className="text-warmGray-700 mb-2">
                    When user arrive at the therapist results page, all profiles look the same and they don't know which one is more suitable for them.
                  </p>
                </div>
                
                <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
                <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Client's Job-To-Be-Done (JTBD)</h4>
                <p className="text-warmGray-700 italic">
                When users enter the booking flow, they want to know which therapist is more suitable for their needs, so that they can book a session with the therapist in order to soothe their mental health needs as effectively as possible.
                 </p>
                </div>

                <img
              src="/imgs/Counselling_Pre-Revamp.png"
              alt="Counselling Pre-Revamp"
              className="w-full h-auto object-contain rounded-lg mb-4 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Pre-Revamp.png', 'Counselling Pre-Revamp')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
              />
            <figcaption className="text-sm text-warmGray-500 mb-8">
                The "mandatory intake form" that opens when user first entered the booking flow, which was against user's expectation.
              </figcaption>

            {/* Define */}
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mt-20 mb-6">Solutions: I divided it into two case studies</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
                  From the Discover phase, we've understood the user's expectation/motivation and how the old booking flow was going against that. I divided the challenge into two parts and split them into two case studies:
                </p>

                <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">1</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">Increase Conversion By Optimizing the Booking Flow (This Case Study)</h3>
              </div>


                <p className="text-warmGray-700 mb-4">
                  One of the major challengs we had to tackle was to rethink the mandatory intake form at the beginning of the flow, which we learned that it did not serve the user's JTBD (not relevant to their needs), it was confusing and delayed the expectation of "finding a suitable therapist", which frustrates the user.
                </p>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-4">
                  <h5 className="font-medium text-warmGray-700 mb-2">⚠️Constraint that we had to consider:</h5>
                  <p className="text-warmGray-700">
                    The purpose for the intake form was to provide data for the therapist to prepare before the session, and the data was also anonymized to give the HR manager (who partnered with Safe Space) insights on how their employees were feeling.
                  </p>
                </div>
                <p className="text-warmGray-700 mb-4">
                  Hence, we formed the problem statement:                </p>
                <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-6">
                <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Problem Statement</h4>
                <p className="text-warmGray-700 italic">
                How might we redesign the exploratory process of the booking journey to make it relevant to the user's expectation, while still providing value to the therapists and HR managers?
                 </p>
                </div>
                  
                  <h5 className="font-medium text-warmGray-700 mb-2">Questions to help answer the problem statement:</h5>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-10">
                    <li>What motivated them to book a session?</li>
                    <li>How much impact do the responses have on the quality of the session itself?</li>
                    <li>What is the least information we needed to provide to the therapists?</li>
                    <li>What information does the HR manager need to see to create an impact on B2B retention?</li>
                    <li>How can we balance the amount of data to collect while not impacting the conversion rate?</li>
                  </ul>

                  <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">2</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">Increase Conversion By Updating the Therapist Profile</h3>
              </div>

                <p className="text-warmGray-700 mb-6">
                  The therapist profiles were displayed in a way that users think "they all looked the same". The recommendation was very weak and didn't help them to understand which therapist is more suitable for their needs.
                </p>

                <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
                <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Problem Statement</h4>
                <p className="text-warmGray-700 italic">
                How might we re-design the therapist introduction card so users feel confident that the therapist they selected is "suitable", in order to increase the conversion rate to the payment page?
                 </p>
                </div>

                <div className="mb-20">
                  <a 
                    href="https://www.figma.com/file/dNDQE8empaoEHZ2QU4vw6A/Safe-Space-Corporate-%26-random-(Copy)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center py-3 border-warmOrange-500 border text-warmOrange-500 rounded-md hover:bg-warmOrange-700 transition-colors"
                  >
                    Go To Case Study
                  </a>
                </div>
            
            
            {/* Design */}
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mt-20 mb-6">Validating the Hypothesis Through User Testing</h2>

             <p className="text-warmGray-700 mb-6 leading-relaxed">
                  We came up with design hypothesis on the "first page" of the booking flow and tested it with users. The four design hypothesis displayed below were sequentially tested (e.g. Hypothesis 2 was informed by Hypothesis 1).
                </p>
                
                <div className="mb-8">
                  <div className="bg-warmGray-50 border border-warmGray-200 rounded-t-lg p-6">
                    <h5 className="font-medium text-warmGray-700 mb-2">[HYPOTHESIS 1]</h5>
                    <p className="text-warmGray-700 mb-4">
                      If we align the user's expectation by explaining the process clearly and why it's important to fill out the intake form, then users will be more willing to go through the intake form because it aligns with their expectations.
                    </p>
                    
                    <img
                      src="/imgs/Counselling_Hypothesis 1.png"
                      alt="Counselling_Hypothesis 1"
                      className="w-full h-auto object-contain rounded-lg mb-8 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Hypothesis 1.png', 'Hypothesis 1')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                    
                    <p className="text-warmGray-700 mb-2 font-medium">What did we change:</p>
                    <p className="text-warmGray-700 mb-4">
                      In this iteration, instead of throwing users the questions on the first page, we let them know what to expect before asking the questions. We also modified the copy to make it more welcoming.
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-medium mr-2">✕</div>
                      <p className="text-warmGray-700 font-medium">Hypothesis failed:</p>
                    </div>
                    <p className="text-warmGray-700 ml-8">
                      Users feel like there are a lot of steps to go through and they cannot find the immediate value. Plus adding a page in the booking flow meaning the conversion would decrease.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="bg-warmGray-50 border border-warmGray-200 rounded-t-lg p-6">
                    <h5 className="font-medium text-warmGray-700 mb-2">[HYPOTHESIS 2]</h5>
                    <p className="text-warmGray-700 mb-4">
                      If we align the user's expectation by showing the testimonial and therapists' pictures, then users will be more willing to go through the intake form because it aligns with their expectations.
                    </p>
                    
                    <img
                      src="/imgs/Counselling_Hypothesis 2.png"
                      alt="Counselling_Hypothesis 2"
                      className="w-full h-auto object-contain rounded-lg mb-8 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Hypothesis 2.png', 'Hypothesis 2')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                    
                    <p className="text-warmGray-700 mb-2 font-medium">What did we change:</p>
                    <p className="text-warmGray-700 mb-4">
                      In this iteration, we welcomed the users by displaying the pictures of our therapists (which matches with their expectation of finding a therapist) and testimonials.
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-medium mr-2">✕</div>
                      <p className="text-warmGray-700 font-medium">Hypothesis failed:</p>
                    </div>
                    <p className="text-warmGray-700 ml-8">
                      Users are attracted when seeing the testimonials but as they go through the mandatory questions they still feel frustrated as they cannot see the value. And the conversion rate is definitely impacted.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="bg-warmGray-50 border border-warmGray-200 rounded-t-lg p-6">
                    <h5 className="font-medium text-warmGray-700 mb-2">[HYPOTHESIS 3]</h5>
                    <p className="text-warmGray-700 mb-4">
                      If we display intake form in a way that the therapist is "asking" the question, then user will be more willing to go through the intake form because it aligns with their expectation.
                    </p>
                    
                    <img
                      src="/imgs/Counselling_Hypothesis 3.png"
                      alt="Counselling_Hypothesis 3"
                      className="w-full h-auto object-contain rounded-lg mb-8 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Hypothesis 3.png', 'Hypothesis 3')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                    
                    <p className="text-warmGray-700 mb-2 font-medium">What did we change:</p>
                    <p className="text-warmGray-700 mb-4">
                      We understand that the when user is answering the intake form questions, it's in fact a similar mentality when user is talking to the therapist about their problems. So it led to the idea of what if the therapist is the one who "asks" user the questions during the intake form. This iteration is to test out the hypothesis of user selecting a therapist before answering the intake form.
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-medium mr-2">✓</div>
                      <p className="text-warmGray-700 font-medium">Hypothesis validated:</p>
                    </div>
                    <p className="text-warmGray-700 ml-8">
                      Users had no confusion nor frustrations when going through the questions that are "coming from the therapist", some of them are even happy that they get to tell the therapist early.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="bg-warmGray-50 border border-warmGray-200 rounded-t-lg p-6">
                    <h5 className="font-medium text-warmGray-700 mb-2">[HYPOTHESIS 4]</h5>
                    <p className="text-warmGray-700 mb-4">
                      If we make intake form a "tool" get match with a therapist and user has to activate it themselves, then user will be more willing to go through the intake form because it aligns with their expectation.
                    </p>
                    
                    <img
                      src="/imgs/Counselling_Hypothesis 4.png"
                      alt="Counselling_Hypothesis 4"
                      className="w-full h-auto object-contain rounded-lg mb-8 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Hypothesis 4.png', 'Hypothesis 4')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                    
                    <p className="text-warmGray-700 mb-2 font-medium">What did we change:</p>
                    <p className="text-warmGray-700 mb-4">
                      The third hypothesis considers the use case when user has chosen a therapist by simply browsing, but it has not solve the issue of "therapists all look the same". In this iteration, we make the intake form as a Get Matched "tool" for user to use, we also revamped the questionnaire inside the intake form to match with the users' JTBD. (E.g. instead of asking "How are you feeling?", we asked "I would like to talk to the therapist about...")
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-medium mr-2">✓</div>
                      <p className="text-warmGray-700 font-medium">Hypothesis validated:</p>
                    </div>
                    <p className="text-warmGray-700 ml-8">
                      When user arrive at this page, they would browse the therapists first, then 80% of them clicked "Start Here" to get match. Of all who entered the questionnaires, 100% completed the questionnaires without hesitation nor confusion.
                    </p>
                  </div>
                </div>
                
                
                  <p className="text-warmGray-700 mb-4">
                    We conducted 24 user interviews & usability testings during the iteration process. With every round of iterations, we gathered more insights about the user behavior to help us make design decisions that can better drive conversion rates.
                  </p>
                  
                  <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-20">
                <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">We have validated our hypothesis that influenced the final design decisions:</h4>
                <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li>Users are more receptive to answering the intake form when the therapist is the one "asking" the questions</li>
                    <li>Users behavior during the exploratory process include browsing, filtering, and comparing.</li>
                    <li>Questions like "feelings, physical symptoms" are more personal and can be optional as they don't impact the quality of the session.</li>
                  </ul>
                </div>

            
            {/* Deliver */}
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mt-20 mb-6">Deliver: The Final Iteration with Design Decisions</h2>
            
            
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  To recap the problem statement, 'redesign the booking flow to make it relevant to the user's expectation, while still providing value to the therapists and HR managers?' We have arrived at the revamped flow as demonstrated below:
                </p>
                
                <ol className="list-decimal list-inside text-warmGray-700 space-y-2 mb-6">
                  <li>When user first entered the booking flow, they will see a list of therapists that Safe Space offers. —✅ Client JTBD matched</li>
                  <li>User can browse through the therapist list or click "Filter Therapists" to select any therapist. —✅ Client JTBD matched</li>
                  <li>User can click "Get Matched" to get match with a therapist based on their preferences. —✅ Client JTBD matched, Therapist's needs satisfied</li>
                  <li>If a user goes through the flow of selecting a therapist first, they will be redirected to answering the questionnaire after selecting the date/time. —✅ Client JTBD matched, Therapist's needs satisfied</li>
                  <li>After payment completed, at the Complete Booking page, user see the optional questionnaire that can "Help the therapist understand you better". —✅ Client JTBD matched, Therapist's needs satisfied, HR dashboard display satisfied</li>
                </ol>
                
                <img
                      src="/imgs/Counselling_ChartNew.png"
                      alt="Counselling Chart New"
                      className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_ChartNew.png')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                
                <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-8">Before v.s. After</h3>
                
                <h5 className="font-medium text-warmGray-700 mb-4">Booking Flow First Page & Select Therapist Page
                </h5>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                <img
                      src="/imgs/Counselling_Final1.png"
                      alt="Final 1"
                      className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Final1.png')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><strong>Aligned Expectations: </strong>Users now browse therapist lists first, aligning with their goal of quickly finding a suitable therapist. The intake form is split: mandatory questions as a "Get Matched" step, and optional questions after payment.</li>
                    <li><strong>Improved Readability: </strong>The questionnaire layout uses a single-column design for better readability and reduced cognitive load.</li>
                    <li><strong>Priming: </strong>A progress bar with a therapist icon at the end sets expectations during the questionnaire.</li>
                    <li><strong>Optimized Profile: </strong>Therapist profile overview cards emphasize key decision factors—affordability, capability, and comfort.</li>
                  </ul>
                  </div>

                  
                
                <h5 className="font-medium text-warmGray-700 mb-4">The Time Selection Page
                </h5>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                <img
                      src="/imgs/Counselling_Final2.png"
                      alt="Final 2"
                      className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Final2.png')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><strong>Slot Availability: </strong> Show the number of slots available in upcoming months to manage expectations if current-month slots are full.</li>
                    <li><strong>Time Slot Display: </strong>List all available slots on the page, categorized into Morning and Afternoon/Night, for easier navigation and fewer clicks.</li>
                    <li><strong>Increased Trust: </strong>Display therapist booking details in the left column to provide a sense of security and reduce cognitive load.</li>
                    <li><strong>Clearer Back Navigation: </strong>Relocate the "Back" button for better visibility and fewer misclicks.</li>
                  </ul>
                </div>

                <h5 className="font-medium text-warmGray-700 mb-4">The Sign Up / Log In Wall
                </h5>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                <img
                      src="/imgs/Counselling_Final3.png"
                      alt="Final 3"
                      className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Final3.png')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><strong>Seamless Experience: </strong> Replaced the interruptive signup/login prompt with a design that retains booking details in the left column.</li>
                    <li><strong>Benefits Reminder: </strong>Added helper text under the title to highlight the benefits of signing up.</li>
                    <li><strong>Safe Exit and Return: </strong>Introduced unique URLs for each booking step, ensuring booking details are saved even if users exit and return.</li>
                  </ul>
                </div>

                <h5 className="font-medium text-warmGray-700 mb-4">The Booking Confirmation Page
                </h5>
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                <img
                      src="/imgs/Counselling_Final4.png"
                      alt="Final 4"
                      className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Counselling_Final4.png')}/>
              <ImageModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              imageUrl={currentImage.url}
              caption={currentImage.caption}
                    />
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><strong>Contextual Display: </strong> Divided the Intake Form into mandatory questions within the booking process and optional questions shown after payment on the complete booking page.</li>
                    <li><strong>User Reassurance: </strong>Highlighted the therapist's photo on the complete booking page to provide assurance and build confidence.</li>
                    <li><strong>Consistent Components: </strong>Reused the booking details component from the left column to ensure design consistency and minimize tech effort.</li>
                  </ul>
                </div>

                <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-8">Access Production Link: <a href="https://app.safespace.sg/booking"> 🔗https://app.safespace.sg/booking</a></h3>
                <div class="bg-white overflow-hidden flex items-center justify-center">
                <div class="p-4">
                  <img
                      src="/imgs/Counselling_Demo.gif"
                      alt="Demo"
                      className="w-60 h-auto object-contain rounded-lg -mt-8 pl-10 cursor-pointer"
                      onClick={() => openModal('/imgs/Counselling_Demo.gif')}/>
                      <ImageModal
                      isOpen={modalOpen}
                      onClose={() => setModalOpen(false)}
                      imageUrl={currentImage.url}
                      caption={currentImage.caption}
                    />
                  </div>
                  
                </div>
                
          </section>
          
          {/* Results */}
          <h2 className="font-serif text-3xl font-medium text-warmGray-800 mt-20 mb-6">The Revamp Increased Unique Users / Month by 20%</h2>
          <div className="bg-warmOrange-50 border-l-4 border-warmOrange-600 p-6 mb-8">
                  <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Results</h4>
                  <p className="text-warmGray-700 mb-2">
                    After implementing the redesigned booking flow, Safe Space saw:
                  </p>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><span className="font-medium">20% increase</span> in conversion rate from the landing page to payment page</li>
                    <li><span className="font-medium">56% increase</span> in total appointments per month</li>
                    <li><span className="font-medium">$17,200 increase</span> in B2C revenue</li>
                  </ul>
                </div>
          
           <p className="text-warmGray-700 mb-6 leading-relaxed">
           What our clients said after the flow revamp:</p>
           <p className="text-warmGray-700 mb-6 leading-relaxed">🥰 “The website is extremely user friendly and encouraging for people to use, especially for first timers.”</p>
           <p className="text-warmGray-700 mb-6 leading-relaxed">😆 “SafeSpace has made my entry into getting professional help for my mental health a lot easier and much more convenient. I really glad I was able to find this platform and will definitely recommend it to friends who wish to seek help as well.”</p>
           <p className="text-warmGray-700 mb-6 leading-relaxed">😊 “Thankful to discovered this platform. Have already shared on my social media. This platform needs to reach more people, it is helpful!”</p>
           <p className="text-warmGray-700 mb-6 leading-relaxed">😎 "It's safe and private. Good match too"</p>
           <p className="text-warmGray-700 mb-10 leading-relaxed">🤩 “Thank you for creating this safe space. It was hard, really hard to reach out for help until this space makes it so fuss free with a click.</p>

           <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-6">My Thoughts After the Project</h4>
           <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li>A key learning from this project was the importance of always keeping the problem statement in mind and not becoming too attached to design solutions, as they can often be assumptions. This shift in mindset was guided by my Product Manager and became integral to my problem-solving approach.

</li>
                    <li>I thoroughly enjoyed the research process, engaging with users to uncover their thoughts, and balancing stakeholder requirements. It was rewarding to see user confusion turn into smooth booking flows through usability testing.</li>
                    <li>Looking back, I would have spent more time considering future scenarios, like if Art Therapy would become one of our therapy options, the revamped intake form might need to be adjusted.</li>
                    <li>Overall, the project was an incredibly rewarding experience with valuable lessons, and it’s fulfilling to see how our platform positively impacts clients’ lives, whether it’s their first time or they choose Safe Space for ongoing mental healthcare.</li>
                  </ul>

          {/* Next Project Link */}
          <div className="border-t border-warmGray-200 pt-10 mt-16">
            <Link to="/" className="inline-flex items-center text-warmOrange-600 hover:text-warmOrange-700 transition-colors">
              <ArrowLeft size={18} className="mr-2" /> Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;