import css from './FeedbackWidget.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.statistics_section}>
    {/* <h1>Please leave feedback</h1> */}
    <div className={css.btn_container}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FeedbackOptions;
