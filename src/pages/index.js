import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl lg:text-3xl xl:text-3xl font-bold leading-none">
            Sustainable business solutions and technology products
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Polymagix is an Ruby on Rails Consulting, Web Application and Mobile Application
            development firm.It took a fairly long time to get started building this site as we are
            all remote developers and all our business so far has come via recommendations from
            previous clients.
          </p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Tech Consultation</p>
              <p className="mt-4">
                Architecture Design. API Design. App Performance Review. Research and Algorithm
                Development
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Web Application</p>
              <p className="mt-4">Ruby on Rails. React/Vue. UI/UX Design. Full stack</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mobile Development</p>
              <p className="mt-4">Flutter.React Native</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Tech Consultation</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Architecture Design. API Design. App Performance Review. Research and Algorithm
            Development
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Web Application</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ruby on Rails. React/Vue. UI/UX Design. Full stack
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Mobile Development</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">Flutter.React Native</p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Quality" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Delivery in Time" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Customer Support" />
          </div>
        </div>
      </div>
    </section>
    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section
      id="about"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">About Us</h3>
      <p className="mt-8 text-xl font-light">
        We create handcrafted web apps using Ruby and Rails. So the challenge became how to build
        the simplest, yet maintainable static site to present who we are and what we can do to help
        clients. It needed to be hosted cheaply and have minimal lag time. As long-time github users
        we had tried jekyll before and its simplicity was appealing. In a nutshell, it's a text
        transformation tool that generates static html. End of story.
      </p>
      <p className="mt-8 text-xl font-light">
        Now where to host it? We are headquartered in Singapore but our clients could come from
        anywhere. For now, since we are putting some focus on generating regional business, we opted
        for hosting it on DigitalOcean in the Singapore region to better serve Southeast Asia and
        also to gain expertise in their platform as an added bonus.
      </p>
    </section>
  </Layout>
);

export default Index;
