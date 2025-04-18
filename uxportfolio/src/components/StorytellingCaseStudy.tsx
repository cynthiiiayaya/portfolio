import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';

const StorytellingCaseStudy = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-warmGray-800 text-white py-16 mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-warmOrange-400 hover:text-warmOrange-300 transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">Storytelling Game (Lead-Gen Flow)</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {["UX Design", "User Testing", "Lead Generation", "AI-Assisted Design"].map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-warmGray-700 text-warmGray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-warmGray-300">Designing an interactive storytelling experience to drive engagement and improve lead generation for a SaaS platform.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">Background</h2>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Our client, a leading SaaS platform in the productivity space, was facing challenges with their lead generation process. 
              Traditional forms were not engaging users, resulting in low conversion rates and poor-quality leads. They approached us 
              to redesign their lead generation flow to be more engaging, interactive, and effective at capturing qualified leads.
            </p>
            <div className="bg-warmGray-100 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-medium text-warmGray-800 mb-4">Project Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">Client</p>
                  <p className="text-warmGray-700 mb-4">SaaSify (Productivity Platform)</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Timeline</p>
                  <p className="text-warmGray-700 mb-4">6 Weeks</p>
                </div>
                <div>
                  <p className="text-sm text-warmGray-500 mb-1">My Role</p>
                  <p className="text-warmGray-700 mb-4">Lead UX Designer</p>
                  
                  <p className="text-sm text-warmGray-500 mb-1">Tools</p>
                  <p className="text-warmGray-700">Figma, FigJam, ChatGPT, Midjourney</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">The Challenge</h2>
            <div className="bg-warmOrange-50 border-l-4 border-warmOrange-500 p-6 mb-8">
              <p className="text-warmGray-700 italic">
                How might we transform a standard lead generation form into an engaging experience that 
                increases conversion rates while collecting qualified leads?
              </p>
            </div>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              The existing lead capture form had a 12% conversion rate, well below the industry average of 24%. 
              Analytics revealed that 68% of users abandoned the form after viewing just the first field, indicating 
              a significant engagement problem. Additionally, sales reported that many of the leads that did come through 
              were low quality, resulting in wasted follow-up efforts.
            </p>
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Through initial stakeholder interviews, we identified three key requirements:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-warmGray-700 mb-8 ml-6">
              <li>Increase lead form completion rates by at least 40%</li>
              <li>Maintain or improve lead quality</li>
              <li>Differentiate the brand through an innovative approach</li>
            </ol>
            <div className="relative h-64 bg-warmGray-200 rounded-lg mb-8 flex items-center justify-center">
              <p className="text-warmGray-500">Analytics dashboard showing form abandonment rates</p>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">The Design Process</h2>
            
            {/* Research */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">1</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">RESEARCH: Understanding User Motivations</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  We began with a comprehensive research phase to understand why users were abandoning the traditional form and what might engage them more effectively.
                </p>
                
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-2">Research Methods</h4>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-4">
                    <li>User interviews with 12 potential customers</li>
                    <li>Competitive analysis of innovative lead generation approaches</li>
                    <li>Heatmap analysis of the current form</li>
                    <li>Surveys of 200+ existing customers about their initial onboarding experience</li>
                  </ul>
                </div>
                
                <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">Key Insights</h4>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[INSIGHT 1]</p>
                  <p className="text-warmGray-700 mb-4">
                    Users didn't see the immediate value in providing their information. The perceived effort outweighed the perceived benefit.
                  </p>
                </div>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[INSIGHT 2]</p>
                  <p className="text-warmGray-700 mb-4">
                    Interactive experiences that provided immediate value were significantly more engaging than static forms.
                  </p>
                </div>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">[INSIGHT 3]</p>
                  <p className="text-warmGray-700 mb-4">
                    Storytelling and game-based approaches were particularly effective at maintaining user attention and creating emotional connections.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ideation */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">2</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">IDEATION: Exploring Interactive Concepts</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  Based on our research findings, we explored several concepts that could transform the lead generation process from a transactional form into an engaging experience.
                </p>
                
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-2">Ideation Techniques</h4>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li>AI-assisted brainstorming using GPT-4</li>
                    <li>Collaborative ideation workshops with the client team</li>
                    <li>Competitive analysis and inspiration gathering</li>
                    <li>Rapid sketching and storyboarding</li>
                  </ul>
                </div>
                
                <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">Concept Exploration</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-warmGray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-warmGray-700 mb-2">Concept 1: Productivity Quiz</h5>
                    <p className="text-warmGray-600 text-sm">An interactive quiz that helps users identify their productivity style while collecting lead information.</p>
                  </div>
                  <div className="bg-warmGray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-warmGray-700 mb-2">Concept 2: ROI Calculator</h5>
                    <p className="text-warmGray-600 text-sm">A calculator tool that estimates potential time/money savings with the product.</p>
                  </div>
                  <div className="bg-warmOrange-50 p-4 rounded-lg border-2 border-warmOrange-200">
                    <h5 className="font-medium text-warmGray-700 mb-2">Concept 3: Interactive Story</h5>
                    <p className="text-warmGray-600 text-sm">A branching narrative where users make choices that affect the outcome while providing lead information.</p>
                    <p className="text-xs text-warmOrange-600 mt-2">✓ Selected for development</p>
                  </div>
                </div>
                
                <p className="text-warmGray-700 mb-6">
                  After evaluating all concepts against our success criteria, we selected the Interactive Story concept because it:
                </p>
                <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-6">
                  <li>Created the highest level of emotional engagement in preliminary testing</li>
                  <li>Allowed for natural integration of form fields within the narrative</li>
                  <li>Provided a unique, memorable experience that aligned with the brand's innovative positioning</li>
                </ul>
                
                <div className="relative h-48 bg-warmGray-200 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-warmGray-500">Early concept sketches of the storytelling game</p>
                </div>
              </div>
            </div>
            
            {/* Design */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">3</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">DESIGN: Creating the Storytelling Experience</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  We developed a choose-your-own-adventure style narrative where users took on the role of a professional trying to overcome productivity challenges in their workday.
                </p>
                
                <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">Key Design Decisions</h4>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">Narrative Structure</p>
                  <p className="text-warmGray-700 mb-4">
                    We created a branching story with 3 main paths and 5 possible endings, each highlighting different product benefits relevant to the user's choices.
                  </p>
                  <div className="relative h-40 bg-warmGray-200 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-warmGray-500">Story flow diagram</p>
                  </div>
                </div>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">Form Field Integration</p>
                  <p className="text-warmGray-700 mb-4">
                    Rather than presenting form fields all at once, we integrated them naturally into the story. For example, asking for the user's name when a character in the story introduces themselves.
                  </p>
                  <div className="relative h-40 bg-warmGray-200 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-warmGray-500">Form field integration examples</p>
                  </div>
                </div>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">Visual Design</p>
                  <p className="text-warmGray-700 mb-4">
                    We used AI-generated illustrations (via Midjourney) to create a consistent visual style that supported the narrative while maintaining a professional feel appropriate for a B2B SaaS product.
                  </p>
                  <div className="relative h-40 bg-warmGray-200 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-warmGray-500">AI-generated illustration samples</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testing */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">4</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">TESTING: Validating the Concept</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  We conducted rigorous testing to ensure the storytelling game not only engaged users but also effectively captured qualified leads.
                </p>
                
                <div className="bg-warmGray-100 p-6 rounded-lg mb-6">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-2">Testing Approach</h4>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li>Usability testing with 15 participants from the target audience</li>
                    <li>A/B testing against the traditional form with 2,000 users</li>
                    <li>Heatmap and session recording analysis</li>
                    <li>Qualitative feedback collection</li>
                  </ul>
                </div>
                
                <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">Key Findings</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-warmGray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-warmGray-700 mb-2">Engagement Metrics</h5>
                    <p className="text-warmGray-600 text-sm mb-2">Average time spent:</p>
                    <ul className="list-disc list-inside text-xs text-warmGray-600">
                      <li>Traditional form: 45 seconds</li>
                      <li>Storytelling game: 3.5 minutes</li>
                    </ul>
                  </div>
                  <div className="bg-warmGray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-warmGray-700 mb-2">Conversion Rate</h5>
                    <p className="text-warmGray-600 text-sm mb-2">Form completion rate:</p>
                    <ul className="list-disc list-inside text-xs text-warmGray-600">
                      <li>Traditional form: 12%</li>
                      <li>Storytelling game: 42%</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-warmGray-50 border border-warmGray-200 rounded-lg p-6 mb-6">
                  <p className="font-medium text-warmGray-700 mb-2">Usability Issues Identified</p>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li>Some users found the initial story introduction too long</li>
                    <li>Form field validation errors disrupted the narrative flow</li>
                    <li>Users wanted a way to save their progress or return to previous choices</li>
                  </ul>
                </div>
                
                <p className="text-warmGray-700 mb-6">
                  Based on testing feedback, we made several iterations to the design:
                </p>
                <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-6">
                  <li>Shortened the introduction and added a progress indicator</li>
                  <li>Implemented inline form validation that maintained the narrative context</li>
                  <li>Added a "story map" feature allowing users to review their journey</li>
                </ul>
              </div>
            </div>
            
            {/* Results */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-warmOrange-600 text-white flex items-center justify-center font-medium mr-4">5</div>
                <h3 className="font-serif text-2xl font-medium text-warmGray-800">RESULTS: Impact & Outcomes</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-warmGray-700 mb-6 leading-relaxed">
                  The storytelling game approach dramatically transformed the lead generation process for our client, exceeding all success metrics.
                </p>
                
                <div className="bg-warmOrange-50 border-l-4 border-warmOrange-600 p-6 mb-8">
                  <h4 className="font-serif text-xl font-medium text-warmGray-800 mb-2">Key Results</h4>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-1">
                    <li><span className="font-medium">250% increase</span> in form completion rates (from 12% to 42%)</li>
                    <li><span className="font-medium">35% improvement</span> in lead quality as measured by sales qualification rates</li>
                    <li><span className="font-medium">62% increase</span> in user-reported satisfaction with the sign-up process</li>
                    <li>Featured in multiple industry publications as an innovative approach to lead generation</li>
                  </ul>
                </div>
                
                <p className="text-warmGray-700 mb-6">
                  Beyond the quantitative results, the storytelling approach created several additional benefits:
                </p>
                <ul className="list-disc list-inside text-warmGray-700 space-y-1 mb-8">
                  <li>Sales team reported that leads were better primed for conversations about the product</li>
                  <li>The approach generated valuable data about user pain points based on their story choices</li>
                  <li>The interactive experience became a talking point that increased word-of-mouth referrals</li>
                </ul>
                
                <div className="relative h-64 bg-warmGray-200 rounded-lg mb-8 flex items-center justify-center">
                  <p className="text-warmGray-500">Final design screenshots of the storytelling game</p>
                </div>
                
                <div className="bg-warmGray-100 p-6 rounded-lg">
                  <h4 className="font-serif text-lg font-medium text-warmGray-800 mb-4">Lessons Learned</h4>
                  <ul className="list-disc list-inside text-warmGray-700 space-y-2">
                    <li>Interactive storytelling can transform mundane transactions into engaging experiences</li>
                    <li>AI tools can significantly speed up content creation when used thoughtfully</li>
                    <li>Lead generation doesn't have to feel transactional - creating value during the sign-up process leads to better outcomes for both users and businesses</li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://www.figma.com/file/example-storytelling-game" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center py-3 bg-warmOrange-600 text-white rounded-md hover:bg-warmOrange-700 transition-colors"
                  >
                    View Figma Prototype
                  </a>
                </div>
              </div>
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

export default StorytellingCaseStudy;