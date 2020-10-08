import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Timeline, TimelineItem }  from '../../node_modules/vertical-timeline-component-for-react';


const CareerPage = () => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="Career" />
    <h1>My Career Path</h1>
    
    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText="06/2019 – Present"
        style={{ color: '#a861ff' }}
        dateInnerStyle={{ background: '#a861ff'}}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3 style={{ color: '#a861ff' }}>Twitch, Inc.</h3>
        <h4>Data Analyst II</h4>
        <p></p>
        <p>
          Define key product metrics and work with cross-functional teams to understand their data
          needs and build dashboards using Mode, RShiny and Tableau to monitor user growth,
          engagement and retention and report key product health regularly to high level executives
        </p>
        <p>
          Design and conduct A/B testing as primary rollout mechanism and deliver actionable and
          insightful analysis results and communicate findings with product managers for data-
          informed decision making and size opportunities to inform product roadmap
        </p>
        <p>
          Partner closely with engineering to ensure proper instrumentation of new features, and
          implement tracking specs of event triggering for both frontend and backend service requests
          for data gathering and transferring into warehouse
        </p>
        <p>
          Work closely with machine learning engineers to monitor model deployment and
          continuously improve performance of recommendation algorithms for each user
          segmentation and lifecycle stage
        </p>
      </TimelineItem>

      <TimelineItem
        key="002"
        dateText="08/2017 – 05/2019"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff'}}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
      <h3 style={{ color: '#61b8ff' }}>Fitbit, Inc.</h3>
      <h4 style={{ color: '#61b8ff' }}>Data Analyst</h4>
      <p></p>
      <p>
        Conducted time series analysis to predict monthly trend of customer contact volume 
        with product breakdowns and investigated high-volume anomalies for holiday spike planning 
        to optimize budget allocation at global contact centers
      </p>
      <p>
        Composed SQL queries to acquire data from salesforce, develop Python scripts to for table automation
        and develop alerting tools to optimize operation performance
      </p>
      <p>
        Developed Tableau dashboards and utilize self-service tools (ggplot, matplotlib, seaborn) 
        to identify and analyze time trends of KPIs to provide insights on cost estimation and reduction
      </p>
    </TimelineItem>

    <TimelineItem
      key="003"
      style={{ color: '#76bb7f' }}
      dateText="08/2016 – 05/2017"
      dateInnerStyle={{ background: '#76bb7f' }}
    >
      <h3 style={{ color: '#76bb7f'}}>Carnegie Mellon University</h3>
      <h4>Master of Science, Statistical Practice</h4>
    </TimelineItem>

    <TimelineItem
      key="004"
      dateText="04/2015 – 07/2016"
      style={{ color: '#e86971' }}
      dateInnerStyle={{ background: '#e86971'}}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971'}}>AptClarity LLC</h3>
      <h4>Business Intelligence Consultant</h4>
      <p></p>
      <p>
        Customized and designed user dashboard for 15+ midsized apparel retailers
        to monitor inventory, sales operation and demand forecasting
      </p>
      <p>
        Maintained clients’ QlikView server, automated the process of data acquisition 
        and cleanup, and created custom queries for data validation and anomaly detection
      </p>
      <p>
        Analyzed retail sell through data for potential discrepancies, derived key metrics 
        to measure sales performance and provided suggestions on expanding new business operations
      </p>
    </TimelineItem>


    <TimelineItem
      key="005"
      style={{ color: '#ffab61' }}
      dateText="09/2011 – 06/2015"
      dateInnerStyle={{ background: '#ffab61' }}
    >
      <h3 style={{ color: '#ffab61' }}>University of California, Los Angeles</h3>
      <h4>Bachelor of Science, Mathematics & Statistics</h4>
    </TimelineItem>

  </Timeline>
  <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
</Layout>
)

export default CareerPage
