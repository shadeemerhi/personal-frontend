import React from 'react';
import Layout from '../components/Layout';
import { withApollo } from '../util/withApollo';

interface ExperiencePageProps {
  
};

const Experience:React.FC<ExperiencePageProps> = () => {
  
  return (
    <Layout>
      Experience Page
    </Layout>
  )
}
export default withApollo({ ssr: true })(Experience);