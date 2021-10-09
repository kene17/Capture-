import React from 'react';

const FaqSection = (props) => {
    return(
        <div className="faq">
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>lorem ipsum dolor sit amet</p>
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>lorem ipsum dolor sit amet</p>
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>lorem ipsum dolor sit amet</p>
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>lorem ipsum dolor sit amet</p>
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;