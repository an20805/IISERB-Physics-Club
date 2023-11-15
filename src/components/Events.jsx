import React from "react";
import HorizontalCard from './eventCard'
import { e1, e2, e3, e4, e5, e6 } from "../assets";
const eventList = [
    {
        id: 6,
        img: e6,
        name: 'Dr. Surajit Saha (Associate Professor, Department of Physics)',
        title: 'Quantum Materials: Unravelling their mysteries through Raman scattering',
        abstract: 'The interactions among various quantum particles in condensed matter systems have intrigued the community for long, especially, the last few decades that have led to the discovery of new materials systems hosting such interactions and emergent properties. The community of condensed matter physics and materials science use various tools and techniques to probe such interactions. In our research group, we predominantly use Raman scattering - an inelastic scattering of light discovered by Sir C. V. Raman in 1928 (28th Feb: We celebrate it as National Science Day). In this talk, at first, I will introduce some of such quantum particles and, importantly, how their interactions lead to novel phases/properties in condensed matter systems with examples. I will also introduce Raman scattering and how it gives us vital understanding on such interactions and the properties. Later, I will discuss some of the exciting results obtained by my group members on some of such quantum materials.'
    },
    {
        id: 5,
        img: e5,
        name: 'Ishaan Deo, 2022 Batch',
        title: 'Unlocking the Enigmatic Connection: Magnetic Fields and Electric Fields with a Twist of Special Relativity',
        abstract: `With the advent of Einstein's special theory of relativity, Maxwell's equations required revision. They were originally explained with the speed of light, 'c, ' relative to the ether medium. However, Einstein rejected the concept of ether, prompting the need for a new perspective on the equations. His explanations in the 1905 paper "On the Electrodynamics of Moving Bodies" led to the unification of electric and magnetic fields.
        In this talk, we'll discuss electric and magnetic fields as part of a single entity called the electromagnetic tensor. We'll derive the Lorentz transformation to understand why moving charges create magnetic fields and what they move with.By using these mathematical tools, we aim to arrive at the same conclusions as Einstein.By the end of the talk, you'll gain satisfaction in understanding how everything fits together.`
    },
    {
        id: 4,
        img: e4,
        name: 'Dr. Andrew Edmonds, Asst. Professor, York University',
        title: 'A Measurement of the Muon Magnetic Anomaly to 0.2 ppm',
        abstract: `On August 10th 2023, the Muon g – 2 Experiment announced the most precise measurement of the muon magnetic anomaly with a precision of 0.2 ppm. The muon magnetic anomaly relates the muon’s spin to its magnetic moment and can be calculated in the Standard Model of Particle Physics. Recent experiments have shown some differences with the theoretical value, which would point to the effect of new particles or new forces that are not in the Standard Model.
        The Muon g – 2 Experiment, based at Fermilab, stores polarized muons in a 14-m diameter storage ring with a highly uniform magnetic field. As the muons travel around the ring, they decay to produce positrons, which we detect in calorimeter and tracking detectors, and we see the number of positrons oscillates as a function of time. The frequency of this oscillation, combined with a precise measurement of the magnetic field, gives us a measurement of the muon magnetic anomaly.
        In this talk, he will discuss what the muon magnetic anomaly is and why it’s important, how we measure the muon magnetic anomaly in the Muon g – 2 Experiment, and what the outlook is for this area of research.`
    },
    {
        id:3,
        img:e3,
        name:'Udit Varma, 2019 Batch',
        title:'Electron, Topology and all that',
        abstract:`In recent years, the field of condensed matter physics has witnessed a remarkable surge of interest in studying topological phases of matter. These exotic quantum phases of matter have captured the attention of researchers and captivated the scientific community due to their peculiar properties and potential applications in quantum technologies. This introductory talk aims to provide a comprehensive overview of the topological phases of matter, offering an exciting journey into this fascinating world.

        The talk will commence with a brief historical context, tracing the origins of topological physics and its groundbreaking milestones, from the quantum Hall effect to topological insulators and beyond.
        A foundational understanding of topological invariants, such as the winding number, will be presented, as they serve as key tools for characterizing these unconventional phases.
        The central theme of the talk will revolve around the exploration of a toy-model of the simplest topological phase - the Su–Schrieffer–Heeger model, which exhibits unique topological properties. The talk will provide analogies and real-world examples to make the concepts more accessible to those without a condensed matter physics background. Furthermore, the potential impact of topological phases on technological advancements, such as quantum computing, will be discussed, opening avenues for exciting future research.
       
        In conclusion, this introductory talk on topological phases of matter seeks to ignite curiosity and foster a deeper appreciation for the beauty and significance of condensed matter physics.
       `
    },
    {
        id:2,
        img:e2,
        name:'Pritindra Bhowmick, 2018 Batch Physics, Technical student CERN',
        title:'A Physics Approach to Detector Technologies',
        abstract:`Modern-day detectors convert a physical variable to electronic signals read by computers. They work on underlying physics principles and convert physical quantities to voltage or current signals. Calibration of such devices is an essential task that involves a thorough understanding of the physics involved in the detector. Electrical signals must be cleaned and transmitted through a data acquisition architecture. In this talk, I will explain the basics of detector instrumentation to the best of my abilities, using the example of magnetic field sensors or magnetometers. I will explain the underlying principle behind a simple Gaussmeter and its calibration and data acquisition mechanism. I will then provide a brief window into complicated high-precision calibrated 3D magnetic field sensors that CERN uses to understand magnets in high-energy physics experiments.
        The talk titled "The Whole is Greater than the Sum of Its Parts: An Introduction to Quantum Many-body Systems" promises to be an engaging and informative session. Parvathy will share her expertise on techniques used to understand such quantum systems. We hope you will learn something new from this exciting talk.
        `
    },
    {
        id:1,
        img:e1,
        name:'Parvathy P Sekhar, 2018 Batch Physics',
        title:'The Whole is Greater than the Sum of Its Parts: An Introduction to Quantum Many-body Systems',
        abstract:`Quantum many-body systems are systems with many interacting quantum particles, and understanding such systems is an outstanding challenge in Condensed Matter Physics. Understanding quantum many-body systems will give insight into the mechanism of high-temperature superconductivity and superfluidity of Helium and can even help us in creating materials with new properties. Over the course of the talk, I will introduce what quantum many-body systems are, and then I will motivate why an accurate description of quantum many-body systems is complex and a variety of numerical methods that exist to deal with them.
        `
    },
]

const event = eventList.map((item) => (<HorizontalCard key={item.id} img={item.img} title={item.title} abstract={item.abstract} name={item.name} />))

const Events = () => {
    return (
        <div>
            {event}
        </div>
    )
}
export default Events