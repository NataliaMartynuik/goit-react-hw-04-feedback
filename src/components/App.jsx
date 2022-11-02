import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
   }
 } 
  
  const countTotalFeedback = () => {
   return good + neutral + bad }
  

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number(((good / countTotalFeedback()) * 100).toFixed(0));
    return positivePercentage;
  }

 
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
    
    return (
    <div>
      <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
        {total === 0 ? 
          <Notification message="There is no feedback"></Notification> :
      <Section title="Statistics">   
          <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={positivePercentage} />
       </Section>   }
    </div>)
  
};
