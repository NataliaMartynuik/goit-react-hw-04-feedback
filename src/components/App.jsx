import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  onLeaveFeedback = (option) => {
      this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));
    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const percentage = this.countPositiveFeedbackPercentage();


    return (
    <div>
      <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
        {total === 0 ? 
          <Notification message="There is no feedback"></Notification> :
      <Section title="Statistics">   
          <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage} />
       </Section>   }
    </div>)
  }
};
