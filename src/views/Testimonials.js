import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css'

export default () => (
    <div id="testimonials">
        <Carousel
            showThumbs={false}
            showStatus={false}
            interval={10000}
            infiniteLoop
            autoPlay
        >
            <div>
                <h3>
                I first spoke to Charlotte when she was researching a career change into development. Of all the students I have worked with, I have never seen someone progress as quickly or as impressively.

                    Fantastic attitude to all challenges, positive approach to every problem and a calm attitude to all things.

                    A credit to any company she works for
                </h3>
                <p>Stuart Crang, The Learning People (2019)</p>
            </div>
            <div>
                <h3>
                I have been working with Charlotte on Enlitened student engagement app and university data dashboard for the past few months and I have been privileged to witness her remarkable technical and communication skills. She is known in the team for excelling at translating the technical data to user value, as well as her impressive work ethic. I admire her ability to focus on urgent issues while strategically investing time into preventing long term problems.
                </h3>
                <p>Migle Povilenaite, Enlitened (2020)</p>
            </div>
            <div>
                <h3>
                Charlotte's an absolute pleasure to work with, and though my own technical expertise isn't sufficiently qualified to judge(!) her technical reputation (among those that work with her) and her professionalism are both first class. Would recommend Charlotte in every way.
                </h3>
                <p>Joe McTiernan, The Student Room (2020)</p>
            </div>
        </Carousel>
    </div>
);
