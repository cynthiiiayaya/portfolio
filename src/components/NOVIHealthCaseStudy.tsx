import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ImageModal from '/src/components/ImageModal.tsx'; // Ensure this is the correct path to your ImageModal component


const NOVIHealthCaseStudy = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [modalCaption, setModalCaption] = useState('');
  
    const openModal = (imageUrl: string, caption?: string) => {
      setModalImageUrl(imageUrl);
      setModalCaption(caption || '');
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setModalImageUrl('');
      setModalCaption('');
    };

  
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-warmGray-800 text-white py-16 mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-warmOrange-400 hover:text-warmOrange-300 transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">How I transformed complex emotional data into a digital experience that scales health impact</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {["UI/UX Design", "Concept Testing", "Design System"].map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-warmGray-700 text-warmGray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-warmGray-300">Scaling personalized health screening consultations into a digital product that maintains trust and emotional resonance.</p>
            <p className="text-lg text-warmGray-500 mt-4">4 mins read</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">Project Overview</h2>
            <div className="bg-warmGray-100 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">Stakeholders</p>
                  <p className="text-warmGray-700 mb-4">Product, Growth Teams</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Timeline</p>
                  <p className="text-warmGray-700 mb-4">Aug - Sep 2024: Research & Design<br></br>Oct 2024: Handoff & QA</p>
                </div>
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">My Role</p>
                  <p className="text-warmGray-700 mb-4">Product Designer & UX Researcher</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Tools</p>
                  <p className="text-warmGray-700">Figma, Figjam, G-Suites</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">1. The Problem We Set Out to Solve</h2>
            <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
              <p className="text-warmGray-700 italic">
                "How might we scale this personalized, doctor-led experience into a product—without losing the trust, clarity, and emotional resonance that makes it so impactful?"
              </p>
            </div>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              At NOVI, we noticed something both exciting and challenging: our health screening consultations were deeply meaningful to patients—often described as "The first time I really understood my health." But they were also time-intensive for our doctors and not scalable.
            </p>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              This question sparked a research-driven journey that led to the design of NOVI's health screening dashboard.
            </p>
            
            <img 
              src="/imgs/doctor-consultation.png"
              alt="Doctor Consultation"
              className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/doctor-consultation.png', 'Doctor Consultation')}/>
              <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={modalImageUrl}
        caption={modalCaption}
      />
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">2. Research to Understand the Journey</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              We began by speaking with 11 people who had gone through or were interested in health screenings. Many of them cared deeply about longevity—not just living longer, but living better. These were people who regularly tracked their health, spent $300–500/month on wellness, and were highly proactive about staying well.
            </p>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              During the concept testing, we asked,<i>"Imagine you finished health screening and the next day you received an interactive dashboard with all your health screening results. You will only book a consultation if there are questions / abnormalities. How much of a differentiator would this be compared to a post-consultation with a doctor?"</i>
            </p>
            
              <img 
                src="/imgs/concept-testing.png"
                alt="Concept Testing"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/concept-testing.png', 'Concept Testing')}/>
              <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={modalImageUrl}
        caption={modalCaption}
      />
              <figcaption className="text-sm text-warmGray-500 mb-8">
                The interactive health screening dashboard we shared with interviewees.
              </figcaption>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Across stories, a clear pattern emerged:
            </p>
            <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
              <p className="text-warmGray-700 italic">
              Fear and awareness were powerful triggers, sparking a journey from passive health management to active optimization.
              </p>
            </div>
            <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-warmGray-100 p-6 rounded-lg">
                <h4 className="font-medium text-warmGray-700 mb-2">Longevity is emotionally driven</h4>
                <p className="text-warmGray-600">Fears about illness, dependency, and family loss prompt action.</p>
              </div>
              <div className="bg-warmGray-100 p-6 rounded-lg">
                <h4 className="font-medium text-warmGray-700 mb-2">People want to take control</h4>
                <p className="text-warmGray-600">Many are already proactive and spend significant time and money to optimize health.</p>
              </div>
              <div className="bg-warmGray-100 p-6 rounded-lg">
                <h4 className="font-medium text-warmGray-700 mb-2">Health screenings are key touchpoints</h4>
                <p className="text-warmGray-600">Used to measure progress, seek clarity, and guide behavior.</p>
              </div>
              <div className="bg-warmGray-100 p-6 rounded-lg">
                <h4 className="font-medium text-warmGray-700 mb-2">Personalized advice is critical</h4>
                <p className="text-warmGray-600">Users expect the dashboard to display personalized results, advice catered for them.</p>
              </div>
            </div>
            
          </section>

          {/* Design Opportunities */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">3. From Insights to Design Opportunities</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              With these motivations and needs in mind, we translated the research into concrete Jobs To Be Done (JTBDs) to guide product decisions.
            </p>
            <p className="text-warmGray-700 mb-6 leading-relaxed font-medium">
              We asked: When someone looks at their dashboard, what are they really trying to achieve?
            </p>
            
            <div className="bg-warmGray-100 p-6 rounded-lg mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="min-w-12 h-12 bg-warmOrange-100 rounded-full flex items-center justify-center text-warmOrange-600 font-medium mr-4">1</div>
                  <div>
                    <p className="font-medium text-warmGray-800">"I need to know if I'm on track."</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-12 h-12 bg-warmOrange-100 rounded-full flex items-center justify-center text-warmOrange-600 font-medium mr-4">2</div>
                  <div>
                    <p className="font-medium text-warmGray-800">"When I see a score, I need to understand what it means for me."</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-12 h-12 bg-warmOrange-100 rounded-full flex items-center justify-center text-warmOrange-600 font-medium mr-4">3</div>
                  <div>
                    <p className="font-medium text-warmGray-800">"I want to track progress over time and see how my lifestyle impacts results."</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-12 h-12 bg-warmOrange-100 rounded-full flex items-center justify-center text-warmOrange-600 font-medium mr-4">4</div>
                  <div>
                    <p className="font-medium text-warmGray-800">"What can I do now, and will it actually help?"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-12 h-12 bg-warmOrange-100 rounded-full flex items-center justify-center text-warmOrange-600 font-medium mr-4">5</div>
                  <div>
                    <p className="font-medium text-warmGray-800">"I want trusted, contextual recommendations—not generic advice."</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-warmGray-700 mb-8 leading-relaxed">
              We organized the JTBDs into three main categories, and prioritized them according to impact and feasibility:
            </p>
            
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-medium mr-4">P1</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">Health Trends & Progress</h3>
              </div>
              <div className="pl-14">
                <ul className="list-disc list-inside text-warmGray-700 space-y-2 mb-6">
                  <li>Design intuitive navigation so users could find the results they are looking for</li>
                  <li>Show where a user stands on a spectrum of health</li>
                  <li>Motivate users through clear visibility of past progress (across testings)</li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium mr-4">P2</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">Coaching on Results</h3>
              </div>
              <div className="pl-14">
                <ul className="list-disc list-inside text-warmGray-700 space-y-2 mb-6">
                  <li>Interpret data in personal context (age, lifestyle, goals)</li>
                  <li>Highlight correlations between lifestyle and results</li>
                  <li>Offer personalized next steps and lifestyle recommendations</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium mr-4">P3</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">Sharing & Social</h3>
              </div>
              <div className="pl-14">
                <ul className="list-disc list-inside text-warmGray-700 space-y-2 mb-6">
                  <li>Make it easy to share health reports with other providers</li>
                  <li>Display comparison of metrics compared to people in the same age group</li>
                </ul>
              </div>
            </div>
            
          </section>

          {/* The Design Process */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">4. The Design Process</h2>
            <p className="text-warmGray-700 mb-8 leading-relaxed">
              The design process for the dashboard evolved through several stages, with each iteration focused on refining both functionality and user experience.
            </p>
            
            <div className="mb-12 border-l-4 border-warmOrange-200 pl-6">
              <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">4-1: Wireframing</h3>
              <p className="text-warmGray-700 mb-6 leading-relaxed">
                I listed the prioritized JTBDs on the side to create the wireframes. The wireframes would highlight what content and features to include in each key screens.
              </p>
              <img 
                src="/imgs/Scoping.png"
                alt="Wireframing"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
              onClick={() => openModal('/imgs/Scoping.png', 'Wireframing')}/>
              <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={modalImageUrl}
        caption={modalCaption}
      />
                <figcaption className="text-sm text-warmGray-500 mb-8">
                Visualizing the JTBDs in key screens.
              </figcaption>
            </div>
            
            <div className="mb-12 border-l-4 border-warmOrange-200 pl-6">
              <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">4-2: First Iteration: Exploring Concepts</h3>
              <p className="text-warmGray-700 mb-6 leading-relaxed">
                In the first design iteration, I incorporated all three key Jobs To Be Done (JTBDs) to explore the full potential of the experience. 
                The goal was to get feedback from both the product team and tech stakeholders on feasibility and user value. 
                For this phase, I utilized the existing components of our design system to ensure consistency and cohesion. 
                Notable examples include the health graph and impact card, which were designed to provide clear, actionable insights.
              </p>
              <img 
                src="/imgs/Recommendation2.png"
                alt="Exploring Concepts"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
                onClick={() => openModal('/imgs/Recommendation2.png', 'Exploring Concepts')}/>
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageUrl={modalImageUrl}
                  caption={modalCaption}
                />
              <img 
                src="/imgs/Explorations.png"
                alt="UI Explorations"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
                onClick={() => openModal('/imgs/Explorations.png', 'UI Explorations')}/>
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageUrl={modalImageUrl}
                  caption={modalCaption}
                />
              <img 
                src="/imgs/Main.png"
                alt="Concept Explorations"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
                onClick={() => openModal('/imgs/Main.png', 'Concept Explorations')}/>
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageUrl={modalImageUrl}
                  caption={modalCaption}
                />
                <figcaption className="text-sm text-warmGray-500 mb-8">
                Explorations of UI, concepts, and content for product discussions.
              </figcaption>
            </div>
            
            <div className="mb-12 border-l-4 border-warmOrange-200 pl-6">
              <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">4-3: Scoping For MVP</h3>
              <p className="text-warmGray-700 mb-6 leading-relaxed">
                Following multiple rounds of product feedback, I refined the design to focus on delivering a minimal viable product (MVP). 
                This required trimming down the more complex features, particularly the personalized coaching elements. 
                Instead of dynamic, contextual guidance, I replaced this with static text to streamline the experience while maintaining core value. 
              </p>
              <img 
                src="/imgs/Lab-MVP.png"
                alt="MVP Handoff"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
                onClick={() => openModal('/imgs/Lab-MVP.png', 'MVP Handoff')}/>
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageUrl={modalImageUrl}
                  caption={modalCaption}
                />
                 <figcaption className="text-sm text-warmGray-500 mb-8">
                The core flow of the dashboard (MVP version), where users navigate from lab overview page, to undersatnding the results of a biomarker.
              </figcaption>
            </div>
            
            <div className="mb-8 border-l-4 border-warmOrange-200 pl-6">
              <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">4-4: Front-End Team Discussion</h3>
              <p className="text-warmGray-700 mb-6 leading-relaxed">
                During the handoff phase, I worked closely with the front-end development team to review and discuss the new components I had designed. 
                We explored alternatives and ensured that all interactions were feasible from a technical standpoint. 
              </p>
              <img 
                src="/imgs/New Component.png"
                alt="New Component Discussion"
                className="w-full h-auto object-contain rounded-lg mb-2 cursor-pointer"
                onClick={() => openModal('/imgs/New Component.png', 'New Component Discussion')}/>
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageUrl={modalImageUrl}
                  caption={modalCaption}
                />
                 <figcaption className="text-sm text-warmGray-500 mb-8">
                I listed down all new components to discuss with the FE. Each new components include an existing relevant component, how it doesn't satisfy the new user need, and provided other alternative components considered. 
              </figcaption>
            </div>

            <div className="mb-8 border-l-4 border-warmOrange-200 pl-6">
              <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">4-5: Handoff</h3>
              <p className="text-warmGray-700 mb-6 leading-relaxed">
                During the handoff phase, I worked closely with the front-end development team to review and discuss the new components I had designed. 
                We explored alternatives and ensured that all interactions were feasible from a technical standpoint. 
              </p>
              <video width="100%" height="100%" controls className="w-full h-auto object-contain rounded-lg mb-2">
    <source src="/imgs/Lab-Demo.mov" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
            </div>
            <div className="bg-warmGray-100 p-6 rounded-lg">
              <a 
                href="https://www.figma.com/proto/ShbjFcWSxQMLBdN8VSFOLf/NOVI-Patient-App?page-id=11244%3A49844&node-id=11252-63298&p=f&viewport=474%2C252%2C0.37&t=LohrXZOOeIFKAIgL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11254%3A66821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center py-3 bg-warmOrange-600 text-white rounded-md hover:bg-warmOrange-700 transition-colors"
              >
                View Figma Prototype
              </a>
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">6. Outcomes & Retrospectives</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
            The interactive dashboard was successfully launched as a key feature of our premium health screening plan, offering clients a user-friendly way to engage with their health data. While no formal metrics were collected to measure usage or the feature's impact post-launch, the rollout provided valuable insights into the design process and opportunities for improvement in future projects.
            </p>
            
            <div className="bg-warmOrange-50 border-l-4 border-warmOrange-600 p-6 mb-8">
              <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Outcomes</h4>
              <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                
                <li>Successfully launched as a key feature of the premium health screening plan.</li>
                <li>No metrics collected post-launch. The team is working on setting up the measurement.</li>
              </ul>
            </div> 
            
            <h3 className="font-serif text-2xl font-medium text-warmGray-800 mb-4">If I were to do the project again...
              </h3>
            <div className="mb-4"> 
              <h4 className="font-medium text-warmGray-700 mb-2">Collaborating Earlier with Engineers</h4>
                <p className="text-warmGray-600">In hindsight, involving engineers at the wireframing stage would have streamlined the process significantly. Their early input could have reduced the back-and-forth during iterations, ensuring alignment on feasibility and technical constraints from the start.
                </p>
                </div>

                <div className="mb-4"> 
              <h4 className="font-medium text-warmGray-700 mb-2">Clarifying Key Details Early</h4>
                <p className="text-warmGray-600">One challenge arose from a miscommunication about the "tiers" used for biomarker levels. During the design phase, the categories were defined as Optimal, Normal, and Needs Attention, with "Normal" represented in yellow. Post-handoff feedback highlighted that yellow implied caution, which conflicted with the intention of portraying "Normal" as a positive state. After several iterations, we adjusted the colors to a combination of light green and dark green. If I had sought more precise clarification on this during the design phase, the issue—and subsequent rework—could have been avoided.
                </p>
                </div>
              
          </section>
          
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

export default NOVIHealthCaseStudy;