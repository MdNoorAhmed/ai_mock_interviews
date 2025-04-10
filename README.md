# 🧠 AI Mock Interviews

AI-powered mock interview platform to help users practice job interviews in a realistic and voice-based environment. Built with **Next.js**, **Firebase**, and **Vapi.ai** — it delivers instant feedback based on your spoken answers.

> **Live Site**: [ai-mock-interviews-noorahmed.vercel.app](https://ai-mock-interviews-noorahmed.vercel.app/sign-in)

---

## ✨ Features

- 🎧 Voice-based mock interviews using Vapi AI
- 🧠 Dynamic question generation using Gemini 2.0 (Google Generative AI)
- 🶌️ Real-time live transcript
- 🧠 AI-generated feedback with category breakdowns and scoring
- 🧪 Secure authentication with Firebase
- 🖼️ Personalized user dashboard
- 🧵 Interview history and feedback storage

---

## 🔠 Tech Stack

| Tech            | Purpose                                  |
|-----------------|-------------------------------------------|
| **Next.js 14**  | Fullstack React framework                 |
| **Firebase**    | Auth + Firestore (DB)                     |
| **Vapi.ai**     | Real-time voice conversation SDK          |
| **Gemini AI**   | Generates questions & interview feedback  |
| **TailwindCSS** | Utility-first styling                     |
| **Typescript**  | Type safety & maintainability             |

---

## 📆 Folder Structure

```
.
├── app                # Main app logic (Next.js pages, routes)
│   └── (root)         # Includes interview, feedback, dashboard, auth pages
├── components         # UI and functional components (Agent, InterviewCard, etc.)
├── constants          # All constants like tech stack, enums, etc.
├── firebase           # Firebase config (admin/client)
├── lib                # Reusable functions: actions, utils, vapi sdk, auth
├── public             # Static assets like avatars, icons, images
├── styles             # Global styles and Tailwind config
├── types              # Type definitions (Interview, Feedback, User)
├── .env               # Environment variables (not committed)
└── README.md          # Project overview
```

---

## ⚙️ Environment Variables

```env
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```
You can find these in your Firebase and Vapi.ai dashboards.

---

## 💊 Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/mdnoorahmed/ai-mock-interviews-noorahmed.git

# 2. Install dependencies
cd ai-mock-interviews-noorahmed
yarn install

# 3. Add your env variables in `.env`

# 4. Run the app
yarn dev
```

---

## 🧱 How it Works

1. User signs in via Firebase Authentication.
2. User starts a mock interview, which triggers a voice call via Vapi.ai.
3. Questions are dynamically generated using Gemini AI based on user-selected role, level, stack, and type.
4. Responses are transcribed live.
5. Post interview, Gemini AI analyzes the transcript and provides feedback.
6. The feedback is stored per user and accessible anytime via dashboard.

---

## 🚀 Future Improvements

- Add video-based interviews
- Allow resume uploads for personalized questions
- Admin panel for monitoring feedback

---

## 📸 Preview

Below is a preview of the platform:

![AI Mock Interview Screenshot](./public/preview.png)

<img width="1229" alt="Screenshot 2025-04-10 at 4 06 32 PM" src="https://github.com/user-attachments/assets/638b916f-2cd6-4b89-94f2-ffdddce2e072" />
<img width="959" alt="Screenshot 2025-04-10 at 4 07 06 PM" src="https://github.com/user-attachments/assets/bba6bf58-5fb4-43a9-967e-786e8aaaf564" />
<img width="1468" alt="Screenshot 2025-04-10 at 4 07 43 PM" src="https://github.com/user-attachments/assets/89034004-a1c1-47ef-bd4a-9b0d2290e741" />
<img width="956" alt="Screenshot 2025-04-10 at 4 08 10 PM" src="https://github.com/user-attachments/assets/2f74fae0-1342-493e-aa2a-62bfab2c3df5" />
<img width="1292" alt="Screenshot 2025-04-10 at 4 08 38 PM" src="https://github.com/user-attachments/assets/da23b050-38e7-4d41-9c53-a689cd893cb0" />
<img width="1299" alt="Screenshot 2025-04-10 at 4 09 05 PM" src="https://github.com/user-attachments/assets/d83dc862-0a87-4082-a54f-152a87bd54bd" />
<img width="1291" alt="Screenshot 2025-04-10 at 4 09 45 PM" src="https://github.com/user-attachments/assets/703d5a6c-45dc-4887-b4e3-a1caaf1fe71a" />
<img width="1208" alt="Screenshot 2025-04-10 at 4 10 09 PM" src="https://github.com/user-attachments/assets/000a7204-9f52-46ec-8a58-b65fd21271ba" />




---

## ❤️ Built By

**Md Noor Ahmed**  
[LinkedIn](https://www.linkedin.com/in/md-noor-ahmed/) | [Portfolio](https://www.mdnoorahmed.com/)

