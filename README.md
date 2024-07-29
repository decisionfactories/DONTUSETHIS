# Make Real

Use this repo as a template to create Make Real style apps like
[makereal.tldraw.com](https://makereal.tldraw.com). To get started:

1. Download and unzip the file. Once unzipped, navigate to its directory in Terminal.
2. Run `npm install` to install dependencies. 
3. Get an OpenAI API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys). Make sure
   you are at least a
   [Tier 1](https://platform.openai.com/docs/guides/rate-limits/usage-tiers) API
   user, which means you have access to GPT-4 Vision. You can check your tier on
   the [OpenAI API Limits](https://platform.openai.com/account/limits).
4. Create a `.env.local` file that contains `OPENAI_API_KEY=your api key here`
5. Run `npm run dev`
6. Open [localhost:3000](http://localhost:3000) and make some stuff real!

FOR NOW JUST DO STEPS 1, 2, 5, AND 6 AND YOU SHOULD BE ABLE TO SEE THE APPLICATION

## How it works

The Use Case Application leverages tldraw, an exceptional React library designed for creating whiteboards and other infinite canvas experiences.

To use the application, start by drawing a mockup for a piece of UI on the canvas. Once your design is ready, select the drawing and press the "Make Real" button. This action transforms your mockup into a detailed Use Case Description, visualizes the workflow in the form of flowcharts, generates the necessary code to run the use case, and outlines test cases to ensure thorough coverage.

This application is especially beneficial for Product Managers and anyone needing to write use cases, as it streamlines the entire process. By providing a visual and interactive approach, it helps you write use cases more quickly, efficiently, and accurately. You can annotate and refine the use case directly on the canvas, ensuring that every aspect is well-documented and validated. This seamless transition from ideation to implementation and testing significantly enhances the overall development process, making it an indispensable tool for effective product management.


## The dangerous API key input method

For prototyping or at least until the vision APIs are able to support higher usage limits, we've also included the `RiskyButCoolAPIKeyInput`, similar to the one found on [makereal.tldraw.com](https://makereal.tldraw.com). Please use this as carefully and ethically as you can, as users should be reluctant to add API keys to public sites.
