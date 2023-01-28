import React from "react"
import odin from "../assets/odin.jpeg"
import betTips from "../assets/betTips.jpeg"
import loopstudio from "../assets/loopstudio.jpg"
import portfolio from "../assets/portfolio.png"


export const Projects_Data = [
    {
        appName:"Bet-Tips-App",
        img: betTips,
        href: "https://udaceue.github.io/betTipsAppv2/",
        stack: "React,semanticUi,React-router",
        description:"App that provides betting tools and tips"
    },
    
    {
        appName:"loopstudio",
        img: loopstudio,
        href: "https://udaceue.github.io/loopstudios-landing-page-main/",
        stack: "Html,Css[grid,flex],vanilla js",
        description:`Fully responsive landing page for Frontend-mentor challange`,
    },

    {
        appName:"Portfolio",
        img: portfolio,
        href: "#",
        stack: "React,tailwind,type-animation",
        description:"Current site where I can show my experience and projects."
    },

    {
        appName:"Odin",
        img: odin,
        href: "https://udaceue.github.io/OdinProject_Sign-Up_Form/",
        stack: "Html / css",
        description:"Mapping layout to html/css challange from one of my best learning sources."
    },
]