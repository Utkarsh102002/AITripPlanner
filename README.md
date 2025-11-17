AI TRIP PLANNER - PLAN BEST TRIP FOR YOU AND YOUR FAMILY .

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Build](https://img.shields.io/badge/Build-Passing-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Tech](https://img.shields.io/badge/Tech-Next.js%20%7C%20OpenAI%20%7C%20Convex-orange)

#This is The Demo Of My Project.
#Demo Video -

#Features Implemented on Project.
1.AI-generated personalized itineraries based on user prompt & preferences.
2.Secure authentication with Clerk + role-based session handling.
3.Route optimization using OpenRoute API for accurate travel timings.
4.Real-time trip creation, editing, and storage using Convex + MongoDB.

#Tech Stack
Frontend = Next.js,React,Tailwind CSS.
Backend = Next.js API Routes, Node.js.
Database = Convex DB, MongoDB  
Auth = clerk  
AI =OpenAI API  
APIs = OpenRoute API  
Deployment=Vercel

#Live Demo
https://ai-trip-planner-six-ivory.vercel.app/

#Local Setup
1.git clone https://github.com/Utkarsh102002/ai-trip-planner.git
2.cd ai-trip-planner
3.npm install
4.npm run dev

1.Login or continue with Your Email  
2.Click Create New Trip
3.Enter destination, days, and preferences.
4.AI generates full day-by-day itinerary  
5.Save trip, edit details, or generate again.

#Architecture
1.Next.js handles UI + API routes  
2.Clerk manages authentication & session tokens  
3.AI request → OpenAI API 4.Route optimization → OpenRoute Service
4.Real-time trip storage → Convex  
5.Permanent user data → MongoDB  
6.UI deployed on Vercel

#Key Implementation Details
1.Auth: Clerk JWT + session-based protection for trip APIs  
2.AI: OpenAI model for generating multi-day itinerary text  
3.Maps: OpenRoute API for travel distance/time calculations  
4.State: Convex real-time storage + React state for UI  
5.Caching: Reduced repeated OpenAI calls by storing past requests  
6.Security: Server-side validation + rate-limiting on API routes

#Contribution
Pull requests are welcome!  
#License
MIT License
#Contact
Utkarsh Shrivastava
GitHub: https://github.com/Utkarsh102002  
Email: utkarshshrivastava102002@gmail.com
