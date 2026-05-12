# React + Vite Webcard Template
A "Linktree" style portfolio designed for quick networking. 
Built with React, Vite, and Tailwind CSS v4.
Live Demo: [Check it out here](https://webcard-fabrizio.vercel.app/)!!!!!
My client needed a lightweight website to link via **NFC** tags. 
It’s perfect for fairs and networking events, where you want people to quickly learn who you are.

The vfc file is generated dinamically based on the data you put in the .env file, feel free to clone/fork the repository and improve it!

## Installation guide:

**1. Clone the repository**
```
git clone https://github.com/fabrizioPesce/webcard.git webcard

cd webcard
```
**2. Install dependencies**
```
npm install
```
**3. Configure Environment Variables**

Create a .env file in the root directory. You can just copy the .env.example
```
touch .env
or
cp .env.example .env
```
Then open the .env file to edit it, usually I use nano
```
nano .env
```
**4. LAN test**

You can run the solution locally
```
npm run dev
```
If you want to test it with other devices you can run it with this command
```
npm run dev -- --host
```
it enables the connectivity for outside the localhost.

**5. Deployment**

Vercel is easier for a first approach to web deployment. You just have to push your code to GitHub, and then import everything into Vercel.

## Important: DO NOT PUSH THE .env FILE ON GITHUB
