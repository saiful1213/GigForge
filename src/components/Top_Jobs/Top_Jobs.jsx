import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseApi from '../../Hooks/UseApi';
import { useState } from 'react';
import Job_Card from '../Job_Card/Job_Card';

const Top_Jobs = () => {
   const tabTitles = ["Web_Development", "Digital_Marketing", "Graphics_Design"]
   const axios = UseApi()
   const [selectedCategory, setSelectedCategory] = useState('Web_Development');

   const { data: query } = useQuery({
      queryKey: ['jobs', selectedCategory],
      queryFn: async() => {
         return await axios.get(`/jobs?category=${selectedCategory}`)
      }
   })

   const handleSelect = (index) => {
      setSelectedCategory(tabTitles[index]);
   };

   return (
      <div className="my-24" id='top_job'>
         <h1 className="text-3xl font-bold text-center">Find Your Job</h1>
         <Tabs onSelect={handleSelect} className="my-12">
            <TabList className="lg:w-2/5 flex-wrap sm:flex-nowrap justify-between flex mx-auto mb-12 border-b-2">
               {tabTitles.map((category, index) => (
                  <Tab key={index}>{category}</Tab>
               ))}
            </TabList>
            {tabTitles.map((index) => (
               <TabPanel key={index}>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                     {
                        query?.data?.map(obj => <Job_Card key={obj._id} cardInfo={obj}></Job_Card>)
                     }
                  </div>
               </TabPanel>
            ))}
         </Tabs>
      </div >
   );
};

export default Top_Jobs;