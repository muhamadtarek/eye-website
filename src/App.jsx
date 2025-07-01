import './framer/styles.css'

import SmallBadgeCardFramerComponent from './framer/small-badge-card'
import FeedbackFramerComponent from './framer/feedback'
// import GetTemplateCanDeleteThisFramerComponent from './framer/get-template-can-delete-this'
import AllFaQsFramerComponent from './framer/all-fa-qs'
import HeadingBadgeFramerComponent from './framer/heading-badge'
import ServiceFramerComponent from './framer/service'
import StatCardFramerComponent from './framer/stat-card'
import ExperienceFramerComponent from './framer/experience'
import ProcessFramerComponent from './framer/process'
import SkillFramerComponent from './framer/skill'
import ProjectFramerComponent from './framer/project'
import ButtonFramerComponent from './framer/button'
import MenuIconFramerComponent from './framer/menu-icon'
import FooterFramerComponent from './framer/footer'
import MenuButtonFramerComponent from './framer/menu-button'
import SecondaryButtonFramerComponent from './framer/secondary-button'
import FaqSingleFramerComponent from './framer/faq-single'
import NavFramerComponent from './framer/nav'
import MainSectionTagFramerComponent from './framer/main-section-tag'
import CursorFramerComponent from './framer/cursor'
import NavLinkFramerComponent from './framer/nav/nav-link'
import SocialMediaFramerComponent from './framer/elements/social-media'
import OnOffFramerComponent from './framer/elements/on-off'

export default function App() {
  return (
    <div className='min-h-screen w-full'>


      {/* Main Content */}
      <main className='flex flex-col items-center w-full'>
        {/* Navigation Section */}
        <nav className='w-full flex justify-center'>
          <div className='max-w-7xl mx-auto px-4'>
            <NavFramerComponent.Responsive />
            {/* <MenuIconFramerComponent.Responsive />
            <MenuButtonFramerComponent.Responsive /> */}
            {/* <NavLinkFramerComponent.Responsive /> */}
          </div>
        </nav>

        {/* Hero/Header Section */}
        <section className="flex flex-col items-center justify-center gap-6 w-full h-[625px] px-4 py-20" style={{ backgroundColor: '#111c3b' }}>
          {/* Main Headline */}
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center leading-tight max-w-3xl">
            Egypt's Leading Agency in <br /> Brand Consultancy & <br /> Textile Sourcing
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-gray-300 text-center max-w-xl text-lg">
            We turn your vision into reality. Our seasoned team is ready to transform your concepts into high-quality, market-ready apparel.
          </p>

          {/* Buttons Row */}
          <div className="flex gap-4 mt-4">
            {/* Button 1 */}
            {/* <button className="bg-white text-[#111c3b] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
      Get Started Now
    </button> */}

            {/* Button 2 */}
            {/* <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#111c3b] transition">
      See Projects
    </button> */}
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 opacity-80">
            {/* You can replace these with <img> or Framer components */}
            <span className="text-white text-sm uppercase tracking-widest">NAZEERAH</span>
            <span className="text-white text-sm uppercase tracking-widest">CONCRETTE</span>
            <span className="text-white text-sm uppercase tracking-widest">RAMSEY</span>
            <span className="text-white text-sm uppercase tracking-widest">DALYDRESS</span>
            <span className="text-white text-sm uppercase tracking-widest">GURU</span>
            <span className="text-white text-sm uppercase tracking-widest">SEKEM</span>
          </div>
        </section>

        {/* Badge Cards Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <SmallBadgeCardFramerComponent.Responsive
            text={"Brand Migration"}
          />
        </section>

        {/* Services Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <ServiceFramerComponent.Responsive
            text={"Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence."}
            title={"Brand Identity"}
          />
        </section>

        {/* Stats Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <StatCardFramerComponent.Responsive
            text={"design projects completed."}
            number={"180+"}
          />
        </section>

        {/* Experience Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <ExperienceFramerComponent.Responsive
            role={"Freelance"}
            year={"Currently"}
            company={"GreenLeaf Co"}
          />
        </section>

        {/* Process Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <ProcessFramerComponent.Responsive
            text={"Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly."}
            steps={"1"}
            title={"Define Your Vision"}
          />
        </section>

        {/* Skills Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <SkillFramerComponent.Responsive
            title={"Product Design"}
          />
        </section>

        {/* Projects Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <ProjectFramerComponent.Responsive
            link={"https://www.behance.net/"}
            newTab={true}
          />
        </section>

        {/* FAQ Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <AllFaQsFramerComponent.Responsive />
          <FaqSingleFramerComponent.Responsive />
        </section>

        {/* Feedback Section */}
        <section className='flex flex-col items-center gap-4 w-full py-4'>
          <FeedbackFramerComponent.Responsive
            bio={"Creative Director & Lead Designer"}
            title={"Richards Johnson"}
            description={"\"Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!\""}
            profileVisible={true}
          />
        </section>

        {/* Interactive Elements Section */}
        {/* <section className='flex flex-col items-center gap-4 w-full py-4'>
          <OnOffFramerComponent.Responsive />
          <SocialMediaFramerComponent.Responsive />
        </section> */}

        {/* Call to Action Section */}
        {/* <section className='flex flex-col items-center gap-4 w-full py-8'>
          <ButtonFramerComponent.Responsive
            link={"https://framer.link/Z1h7gsj"}
            title={"Get Started Now"}
            newTab={true}
          />
          <SecondaryButtonFramerComponent.Responsive
            text={"Learn More"}
            link={"#"}
            newTab={false}
          />
        </section> */}

        {/* Template Section */}
        {/* <section className='flex flex-col items-center gap-4 w-full py-4'>
          <GetTemplateCanDeleteThisFramerComponent.Responsive />
        </section> */}

        {/* Footer */}
        <div className="footer-container w-full flex justify-center">
          <div className='max-w-7xl mx-auto px-4'>
            <FooterFramerComponent.Responsive />
          </div>
        </div>
      </main>


    </div>
  );
};